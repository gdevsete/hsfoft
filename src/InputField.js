import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ label, value, onChange, type = 'text', placeholder = '', showClear = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = (e) => {
    e.preventDefault();
    onChange('');
  };

  return (
    <div className="input-field-wrapper">
      {label && <label className="input-field-label">{label}</label>}
      
      <div className={`input-field-container ${isFocused ? 'focused' : ''}`}>
        <input
          type={type}
          className="input-field-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
        {showClear && value && (
          <button
            className="input-field-clear-btn"
            onClick={handleClear}
            type="button"
            aria-label="Limpar campo"
          >
            <div className="input-field-clear-icon">×</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
