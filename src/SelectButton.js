import React, { useState, useRef, useEffect } from 'react';
import './SelectButton.css';

// Função para calcular similaridade entre strings (Levenshtein simplificado)
const calculateSimilarity = (str1, str2) => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  if (s1 === s2) return 1;
  
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = getEditDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

const getEditDistance = (s1, s2) => {
  const costs = [];
  
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  
  return costs[s2.length];
};

const SelectButton = ({ label, value, onChange, options, placeholder = 'Selecione...', onOpenChange, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        onOpenChange?.(false);
        setSearchTerm('');
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onOpenChange]);

  // Focus no input de busca quando abre
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  const handleSelectOption = (optionValue, e) => {
    e.stopPropagation();
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
    setIsFocused(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setIsOpen(false);
    setSearchTerm('');
  };

  const isPlaceholderJSX = React.isValidElement(placeholder);

  const getDisplayValue = () => {
    if (!value) return isPlaceholderJSX ? placeholder : placeholder;
    if (typeof value === 'string') {
      // Se for string simples, procura na array
      const selectedOption = options.find(opt => opt === value);
      if (selectedOption) return selectedOption;
      return value;
    }
    // Se for número, procura por id
    const selectedOption = options.find(opt => {
      if (typeof opt === 'object' && opt.id) {
        return opt.id === value;
      }
      return opt === value;
    });
    if (selectedOption && typeof selectedOption === 'object') {
      if (selectedOption.id && selectedOption.label) {
        return `${selectedOption.id} - ${selectedOption.label}`;
      }
      return selectedOption.label || value;
    }
    return value;
  };

  const filterOptions = (term) => {
    if (!term) return options;
    
    return options.filter(option => {
      if (typeof option === 'string') {
        return option.toLowerCase().includes(term.toLowerCase());
      }
      
      const searchStr = `${option.id} ${option.label} ${option.name} ${option.cpf || option.cnpj || ''}`.toLowerCase();
      return searchStr.includes(term.toLowerCase());
    });
  };

  const getSuggestion = (term) => {
    if (!term || term.length < 2) return null;
    
    const filtered = options.filter(option => {
      if (typeof option === 'string') {
        return !option.toLowerCase().includes(term.toLowerCase());
      }
      const searchStr = `${option.id} ${option.label} ${option.name} ${option.cpf || option.cnpj || ''}`.toLowerCase();
      return !searchStr.includes(term.toLowerCase());
    });

    let bestMatch = null;
    let bestSimilarity = 0;

    filtered.forEach(option => {
      let searchStr = '';
      if (typeof option === 'string') {
        searchStr = option;
      } else {
        searchStr = `${option.id} ${option.label} ${option.name} ${option.cpf || option.cnpj || ''}`;
      }
      const similarity = calculateSimilarity(term, searchStr);
      
      if (similarity > bestSimilarity && similarity > 0.4) {
        bestSimilarity = similarity;
        bestMatch = option;
      }
    });

    return bestMatch;
  };

  const filteredOptions = filterOptions(searchTerm);
  const suggestion = searchTerm && filteredOptions.length === 0 ? getSuggestion(searchTerm) : null;

  const renderOption = (option) => {
    // Se for um objeto com render customizado
    if (typeof option === 'object' && option.render) {
      return option.render();
    }
    // Se for um objeto com dados estruturados (id, label, name, cpf/cnpj)
    if (typeof option === 'object' && option.id) {
      return (
        <div className="select-button-option-content">
          <div className="option-top">
            <span className="option-number">{option.id}</span>
            <span className="option-separator">-</span>
            <span className="option-name">{option.label}</span>
          </div>
          <div className="option-bottom">
            <span className="option-fullname">{option.name}</span>
            <span className="option-cpf">{option.cpf || option.cnpj}</span>
          </div>
        </div>
      );
    }
    // Caso simples
    return <span className="simple-option-text">{option}</span>;
  };

  return (
    <div className="select-button-wrapper" ref={dropdownRef}>
      {label && <label className="select-button-label">{label}</label>}
      
      {searchable ? (
        // Modo com busca (vendedor)
        <div className="select-button-field-container">
          <input
            type="text"
            className="vendedor-field"
            placeholder={isFocused ? 'Digite nome, código ou CPF...' : (isOpen ? 'Buscar por código, nome, CPF...' : '')}
            value={isFocused || isOpen ? searchTerm : (value ? getDisplayValue() : '')}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          
          {!value && !searchTerm && (!isOpen && !isFocused) && (
            <span className="vendedor-placeholder-text">
              {placeholder}
            </span>
          )}
          
          <button
            className="vendedor-arrow-icon"
            onClick={handleButtonClick}
            type="button"
            title={isOpen ? 'Fechar' : 'Abrir'}
          >
            <div className={`vendedor-arrow ${isOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      ) : (
        // Modo simples (sem busca)
        <button
          className="select-button-field"
          onClick={handleButtonClick}
          type="button"
        >
          <div className="select-button-text-section">
            <p className="select-button-text">
              {!value && isPlaceholderJSX ? placeholder : getDisplayValue()}
            </p>
          </div>
          <div className="select-button-icon-section">
            <div className={`select-button-arrow ${isOpen ? 'open' : ''}`}></div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="select-button-dropdown">
          {value && (
            <button
              className="select-button-clear-option"
              onClick={handleClear}
              type="button"
            >
              <span className="clear-icon">×</span>
              <span className="clear-text">{getDisplayValue()}</span>
            </button>
          )}

          {(searchable ? filteredOptions : options).length > 0 ? (
            (searchable ? filteredOptions : options).map((option, idx) => {
              const isStructured = typeof option === 'object' && option.id;
              return (
                <button
                  key={idx}
                  className={`select-button-option ${isStructured ? 'structured' : 'simple'} ${(option.id || option) === value ? 'active' : ''}`}
                  onClick={(e) => handleSelectOption(option.id || option, e)}
                  type="button"
                >
                  {renderOption(option)}
                </button>
              );
            })
          ) : searchable && suggestion ? (
            <>
              <div className="select-button-no-results">
                Nenhum resultado para "{searchTerm}"
              </div>
              <button
                className="select-button-suggestion"
                onClick={(e) => handleSelectOption(suggestion.id || suggestion, e)}
                type="button"
              >
                <span className="suggestion-text">Você quis dizer:</span>
                {renderOption(suggestion)}
              </button>
            </>
          ) : searchable ? (
            <div className="select-button-no-results">
              Nenhum resultado para "{searchTerm}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SelectButton;
