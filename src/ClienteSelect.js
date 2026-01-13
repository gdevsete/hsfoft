import React, { useState, useRef, useEffect } from 'react';
import './ClienteSelect.css';

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

const ClienteSelect = ({ label, value, onChange, options, placeholder = 'TODOS', onOpenChange }) => {
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
    const selectedOption = options.find(opt => (opt.id || opt) === value);
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
      
      const searchStr = `${option.id} ${option.label} ${option.name} ${option.cnpj}`.toLowerCase();
      return searchStr.includes(term.toLowerCase());
    });
  };

  const getSuggestion = (term) => {
    if (!term || term.length < 2) return null;
    
    const filtered = options.filter(option => {
      if (typeof option === 'string') return false;
      const searchStr = `${option.id} ${option.label} ${option.name} ${option.cnpj}`.toLowerCase();
      return !searchStr.includes(term.toLowerCase());
    });

    let bestMatch = null;
    let bestSimilarity = 0;

    filtered.forEach(option => {
      const searchStr = `${option.id} ${option.label} ${option.name} ${option.cnpj}`;
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
    if (typeof option === 'object' && option.render) {
      return option.render();
    }
    
    if (typeof option === 'object' && option.id) {
      return (
        <div className="cliente-select-option-content">
          <div className="option-top">
            <span className="option-number">{option.id}</span>
            <span className="option-separator">-</span>
            <span className="option-name">{option.label}</span>
          </div>
          <div className="option-bottom">
            <span className="option-fullname">{option.name}</span>
            <span className="option-cnpj">{option.cnpj}</span>
          </div>
        </div>
      );
    }
    
    return <span>{option}</span>;
  };

  return (
    <div className="cliente-select-wrapper" ref={dropdownRef}>
      {label && <label className="cliente-select-label">{label}</label>}
      
      <div className="cliente-select-field-container">
        <input
          type="text"
          className="cliente-select-field"
          placeholder={isFocused ? 'Digite nome, código ou CNPJ...' : (isOpen ? 'Buscar por código, nome, CNPJ...' : '')}
          value={isFocused || isOpen ? searchTerm : (value ? getDisplayValue() : '')}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {!value && !searchTerm && (!isOpen && !isFocused) && (
          <span className="cliente-select-placeholder-text">
            <span style={{ color: '#008236', fontWeight: 700 }}>0</span>
            <span> - TODOS OS CLIENTES</span>
          </span>
        )}
        
        <button
          className="cliente-select-arrow-icon"
          onClick={handleButtonClick}
          type="button"
          title={isOpen ? 'Fechar' : 'Abrir'}
        >
          <div className={`cliente-select-arrow ${isOpen ? 'open' : ''}`}></div>
        </button>
      </div>

      {isOpen && (
        <div className="cliente-select-dropdown">
          {value && (
            <button
              className="cliente-select-clear-option"
              onClick={handleClear}
              type="button"
            >
              <span className="clear-icon">×</span>
              <span className="clear-text">{getDisplayValue()}</span>
            </button>
          )}

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, idx) => (
              <button
                key={idx}
                className={`cliente-select-option ${(option.id || option) === value ? 'active' : ''}`}
                onClick={(e) => handleSelectOption(option.id || option, e)}
                type="button"
              >
                {renderOption(option)}
              </button>
            ))
          ) : suggestion ? (
            <>
              <div className="cliente-select-no-results">
                Nenhum resultado para "{searchTerm}"
              </div>
              <button
                className="cliente-select-suggestion"
                onClick={(e) => handleSelectOption(suggestion.id, e)}
                type="button"
              >
                <span className="suggestion-text">Você quis dizer:</span>
                {renderOption(suggestion)}
              </button>
            </>
          ) : (
            <div className="cliente-select-no-results">
              Nenhum resultado para "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClienteSelect;
