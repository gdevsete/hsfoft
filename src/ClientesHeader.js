import React from 'react';
import './ClientesHeader.css';
import addBoxIcon from './icons/add-box.svg';
import printIcon from './icons/print copy.svg';

const ClientesHeader = ({ onAdd }) => {
  return (
    <>
      <div className="clientes-header-container">
        <div className="clientes-header-content">
          <div className="clientes-title-section">
            <div className="clientes-title">CLIENTES</div>
          </div>
          <div className="clientes-actions">
            <button className="btn-action" onClick={() => onAdd && onAdd()}>
              <img src={addBoxIcon} alt="Incluir" className="btn-icon" />
              <div className="btn-label">Incluir</div>
            </button>
            <button className="btn-action">
              <img src={printIcon} alt="Imprimir" className="btn-icon" />
              <div className="btn-label">Imprimir</div>
            </button>
          </div>
        </div>
      </div>
      <div className="clientes-header-border cc-divider"></div>
    </>
  );
};

export default ClientesHeader;
