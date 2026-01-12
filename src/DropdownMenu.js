import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ isVisible, onMouseEnter, onMouseLeave, type = 'cadastros' }) => {
  const menuDataMap = {
    cadastros: [
      {
        title: 'Cadastros',
        items: ['Cliente', 'Usuário', 'Empresa', 'Fornecedor', 'Transportadora']
      },
      {
        title: 'Produtos',
        items: ['Produtos', 'Acerto de Estoque', 'Entrada e Saída Manual']
      }
    ],
    comercial: [
      {
        title: 'Comercial',
        items: ['Incluir Venda', 'Consultar Vendas']
      },
      {
        title: 'Serviços',
        items: ['Incluir O.S.', 'Consultar O.S.']
      },
      {
        title: 'CRM',
        items: ['Radar de Clientes']
      }
    ],
    financeiro: [
      {
        title: 'Contas a Receber',
        items: ['Contas a Receber', 'Crédito Cliente']
      },
      {
        title: 'Contas a Pagar',
        items: ['Contas a Pagar']
      },
      {
        title: 'Boletos',
        items: ['Remessa de Boletos', 'Retorno de Boletos']
      },
      {
        title: 'Banco',
        items: ['Cadastro Bancário']
      }
    ],
    fiscal: [
      {
        title: 'Notas',
        items: ['Documentos Fiscais']
      },
      {
        title: 'Entrada',
        items: ['Entrada de Nota', 'Formação de Preço']
      },
      {
        title: 'Ajuste',
        items: ['Naturezas de Operação']
      }
    ],
    relatorios: [
      {
        title: 'Análise de Produtos',
        items: ['Estoque', 'Vendas por Produto']
      },
      {
        title: 'Vendas',
        items: ['Relatório de Vendas', 'Comissões']
      },
      {
        title: 'Financeiro',
        items: ['Fluxo de Caixa', 'Contas a Receber']
      }
    ]
  };

  const menuData = menuDataMap[type] || menuDataMap.cadastros;

  return (
    <div 
      className={`dropdown-menu-container dropdown-menu-${type} ${isVisible ? 'visible' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdown-menu-content">
        {menuData.map((section, index) => (
          <div key={index} className="dropdown-section">
            <div className="dropdown-section-header">
              <div className="dropdown-section-title">{section.title}</div>
            </div>
            <div className="dropdown-section-items">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="dropdown-item">
                  <div className="dropdown-item-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
