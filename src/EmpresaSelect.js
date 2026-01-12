import React, { useState, useRef, useEffect } from 'react';
import './EmpresaSelect.css';

const EmpresaSelect = ({ label, value, onChange, options, placeholder = 'Selecione...', onOpenChange }) => {
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
    const selectedOption = options.find(opt => (opt.id || opt) === value);
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
    // Se for um objeto com dados estruturados (id, label, name, cnpj)
    if (typeof option === 'object' && option.id) {
      return (
        <div className="empresa-select-option-content">
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
    // Caso simples
    return <span>{option}</span>;
  };

  return (
    <div className="empresa-select-wrapper" ref={dropdownRef}>
      {label && <label className="empresa-select-label">{label}</label>}
      
      <button
        className="empresa-select-field"
        onClick={handleButtonClick}
        type="button"
      >
        <div className="empresa-select-text-section">
          <p className="empresa-select-text">{getDisplayValue()}</p>
        </div>
        <div className="empresa-select-icon-section">
          <div className={`empresa-select-arrow ${isOpen ? 'open' : ''}`}></div>
        </div>
      </button>

      {isOpen && (
        <div className="empresa-select-dropdown">
          {value && (
            <button
              className="empresa-select-clear-option"
              onClick={handleClear}
              type="button"
            >
              <span className="clear-icon">×</span>
              <span className="clear-text">{getDisplayValue()}</span>
            </button>
          )}
          {options.map((option, idx) => (
            <button
              key={idx}
              className={`empresa-select-option ${(option.id || option) === value ? 'active' : ''}`}
              onClick={(e) => handleSelectOption(option.id || option, e)}
              type="button"
            >
              {renderOption(option)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmpresaSelect;
