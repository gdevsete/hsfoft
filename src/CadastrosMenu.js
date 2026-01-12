import React from 'react';
import './CadastrosMenu.css';

const CadastrosMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="menu-overlay" onClick={onClose}></div>
      <div className="cadastros-menu">
        <div className="menu-column">
          <div className="menu-section-title">Cadastros</div>
          <div className="menu-items">
            <div className="menu-item">Cliente</div>
            <div className="menu-item">Usuário</div>
            <div className="menu-item">Empresa</div>
            <div className="menu-item">Fornecedor</div>
            <div className="menu-item">Transportadora</div>
          </div>
        </div>

        <div className="menu-column">
          <div className="menu-section-title">Produtos</div>
          <div className="menu-items">
            <div className="menu-item">Produtos</div>
            <div className="menu-item">Acerto de Estoque</div>
            <div className="menu-item">Entrada e Saída Manual</div>
          </div>
        </div>

        <div className="menu-column">
          <div className="menu-section-title">Sub-section Title</div>
          <div className="menu-items">
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
          </div>
        </div>

        <div className="menu-column">
          <div className="menu-section-title">Sub-section Title</div>
          <div className="menu-items">
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
          </div>
        </div>

        <div className="menu-column">
          <div className="menu-section-title">Sub-section Title</div>
          <div className="menu-items">
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
            <div className="menu-item">Sub-section Item</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastrosMenu;
