import React from 'react';
import './ClientesHeader.css';

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
              <div className="btn-icon-plus">+</div>
              <div className="btn-label">Incluir</div>
            </button>
            <button className="btn-action">
              <div className="btn-icon-print">🖨</div>
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
