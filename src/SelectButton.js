import React, { useState, useRef, useEffect } from 'react';
import './SelectButton.css';

const SelectButton = ({ label, value, onChange, options, placeholder = 'Selecione...', onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onOpenChange]);

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
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange('');
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;
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
      
      <button
        className="select-button-field"
        onClick={handleButtonClick}
        type="button"
      >
        <div className="select-button-text-section">
          <p className="select-button-text">{getDisplayValue()}</p>
        </div>
        <div className="select-button-icon-section">
          <div className={`select-button-arrow ${isOpen ? 'open' : ''}`}></div>
        </div>
      </button>

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
          {options.map((option, idx) => {
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
          })}
        </div>
      )}
    </div>
  );
};

export default SelectButton;
