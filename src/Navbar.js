import React, { useState } from 'react';
import './Navbar.css';
import DropdownMenu from './DropdownMenu';
import logo from './icons/logo.svg';
import cadastrosIcon from './icons/address-book-tabs.svg';
import comercialIcon from './icons/comercial.svg';
import financeiroIcon from './icons/financeiro.svg';
import fiscalIcon from './icons/bank.svg';
import relatoriosIcon from './icons/chart-bar.svg';
import searchIcon from './icons/icon-search.svg';
import bellIcon from './icons/menu-btn-side-bell.svg';
import questionIcon from './icons/menu-btn-side-question.svg';
import gearIcon from './icons/menu-btn-side-gear-six.svg';
import userAvatar from './icons/Ellipse 1.svg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const handleMouseEnter = (menuType) => {
    setActiveMenu(menuType);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setActiveMenu('');
  };

  return (
    <div className="navbar" style={{ position: 'relative' }}>
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="44SOFT" />
            </div>
          </div>
          <div className="navbar-menu">
            <div 
              className={`menu-item menu-cadastros ${activeMenu === 'cadastros' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('cadastros')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-icon">
                <img src={cadastrosIcon} alt="Cadastros" />
              </div>
              <span>Cadastros</span>
            </div>
            <div 
              className={`menu-item menu-comercial ${activeMenu === 'comercial' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('comercial')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-icon">
                <img src={comercialIcon} alt="Comercial" />
              </div>
              <span>Comercial</span>
            </div>
            <div 
              className={`menu-item menu-financeiro ${activeMenu === 'financeiro' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('financeiro')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-icon">
                <img src={financeiroIcon} alt="Financeiro" />
              </div>
              <span>Financeiro</span>
            </div>
            <div 
              className={`menu-item menu-fiscal ${activeMenu === 'fiscal' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('fiscal')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-icon">
                <img src={fiscalIcon} alt="Fiscal" />
              </div>
              <span>Fiscal</span>
            </div>
            <div 
              className={`menu-item menu-relatorios ${activeMenu === 'relatorios' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('relatorios')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-icon">
                <img src={relatoriosIcon} alt="Relatórios" />
              </div>
              <span>Relatórios</span>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="search-container">
            <button className="search-button">
              <div className="search-icon">
                <img src={searchIcon} alt="Buscar" />
              </div>
            </button>
          </div>
          <div className="navbar-icons">
            <button className="icon-button">
              <img src={bellIcon} alt="Notificações" />
            </button>
            <button className="icon-button">
              <img src={questionIcon} alt="Ajuda" />
            </button>
            <button className="icon-button">
              <img src={gearIcon} alt="Configurações" />
            </button>
            <div className="user-avatar">
              <img src={userAvatar} alt="User" />
            </div>
          </div>
        </div>
      </div>
      <DropdownMenu 
        isVisible={showDropdown} 
        type={activeMenu}
        onMouseEnter={() => handleMouseEnter(activeMenu)}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Navbar;
