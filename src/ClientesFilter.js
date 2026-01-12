import React, { useState } from 'react';
import './ClientesFilter.css';
import SelectButton from './SelectButton';
import ClienteSelect from './ClienteSelect';
import EmpresaSelect from './EmpresaSelect';
import InputField from './InputField';

const ClientesFilter = () => {
  const [filters, setFilters] = useState({
    cliente: '',
    estado: '',
    situacao: '',
    empresa: '',
    email: '',
    celular: '',
    vendedor: '',
    grupo: '',
    rota: '',
    tipo: 'todos'
  });

  const [hoveredField, setHoveredField] = useState(null);

  // Mapeamento de clientes com dados para auto-preenchimento
  const clienteDataMap = {
    1: {
      estado: 'VILA BELA DA SANTÍSSIMA TRINDADE - TO',
      situacao: 'ATIVO',
      email: 'contato@palmastech.com.br',
      celular: '(63) 99999-1111',
      vendedor: 18,
      grupo: 'VAREJO',
      rota: 'NORTE'
    },
    2: {
      estado: 'SÃO PAULO - SP',
      situacao: 'ATIVO',
      email: 'vendas@palmasinfo.com.br',
      celular: '(11) 99999-2222',
      vendedor: 8,
      grupo: 'ATACADO',
      rota: 'SUDESTE'
    },
    3: {
      estado: 'RIO DE JANEIRO - RJ',
      situacao: 'ATIVO',
      email: 'suporte@jalapao.com.br',
      celular: '(21) 99999-3333',
      vendedor: 27,
      grupo: 'DISTRIBUIDOR',
      rota: 'SUDESTE'
    },
    4: {
      estado: 'SÃO PAULO - SP',
      situacao: 'ATIVO',
      email: 'info@tecnorte.com.br',
      celular: '(11) 99999-4444',
      vendedor: 46,
      grupo: 'VAREJO',
      rota: 'SUDESTE'
    },
    5: {
      estado: 'VILA BELA DA SANTÍSSIMA TRINDADE - TO',
      situacao: 'ATIVO',
      email: 'pedidos@suprimais.com.br',
      celular: '(63) 99999-5555',
      vendedor: 15,
      grupo: 'ATACADO',
      rota: 'NORTE'
    }
  };

  // Função para handle de mudança de cliente com auto-preenchimento
  const handleClienteChange = (clienteId) => {
    if (clienteId && clienteDataMap[clienteId]) {
      const clienteData = clienteDataMap[clienteId];
      setFilters({
        ...filters,
        cliente: clienteId,
        estado: clienteData.estado,
        situacao: clienteData.situacao,
        email: clienteData.email,
        celular: clienteData.celular,
        vendedor: clienteData.vendedor,
        grupo: clienteData.grupo,
        rota: clienteData.rota
      });
    } else {
      setFilters({...filters, cliente: clienteId});
    }
  };

  // Opções dos selects
  // Opções de cliente com formato estruturado
  const clienteOptions = [
    {
      id: 1,
      label: 'PALMAS TEC DISTRIBUIDORA EIRELI - ME',
      name: 'PALMAS TEC DISTRIBUIDORA',
      cnpj: '78.654.201/0001-90'
    },
    {
      id: 2,
      label: 'PALMAS INFO DISTRIBUIDORA LTDA - ME',
      name: 'PALMAS INFO DISTRIBUIDORA',
      cnpj: '31.552.007/0001-15'
    },
    {
      id: 3,
      label: 'JALAPAO TECNOLOGIA E SISTEMAS LTDA',
      name: 'JALAPAO SISTEMAS',
      cnpj: '89.564.159/0001-30'
    },
    {
      id: 4,
      label: 'TECNORTE ASSISTENCIA TECNICA AUTORIZADA EIRELI',
      name: 'TECNORTE ASSISTENCIA AUTORIZADA',
      cnpj: '11.855.200/0001-30'
    },
    {
      id: 5,
      label: 'SUPRIMAIS SUPRIMENTOS E TECNOLOGIA LTDA',
      name: 'SUPRIMAIS TECNOLOGIA',
      cnpj: '35.999.277/0001-44'
    }
  ];
  const estadoOptions = ['VILA BELA DA SANTÍSSIMA TRINDADE - TO', 'SÃO PAULO - SP', 'RIO DE JANEIRO - RJ'];
  const situacaoOptions = ['ATIVO', 'INATIVO'];
  const empresaOptions = [
    {
      id: 1,
      label: 'PALMAS TEC DISTRIBUIDORA EIRELI - ME',
      name: 'PALMAS TEC DISTRIBUIDORA',
      cnpj: '78.654.201/0001-90'
    },
    {
      id: 2,
      label: 'PALMAS INFO DISTRIBUIDORA LTDA - ME',
      name: 'PALMAS INFO DISTRIBUIDORA',
      cnpj: '31.552.007/0001-15'
    },
    {
      id: 3,
      label: 'JALAPAO TECNOLOGIA E SISTEMAS LTDA',
      name: 'JALAPAO SISTEMAS',
      cnpj: '89.564.159/0001-30'
    },
    {
      id: 4,
      label: 'TECNORTE ASSISTENCIA TECNICA AUTORIZADA EIRELI',
      name: 'TECNORTE ASSISTENCIA AUTORIZADA',
      cnpj: '11.855.200/0001-30'
    },
    {
      id: 5,
      label: 'SUPRIMAIS SUPRIMENTOS E TECNOLOGIA LTDA',
      name: 'SUPRIMAIS TECNOLOGIA',
      cnpj: '35.999.277/0001-44'
    }
  ];
  
  // Opções de vendedor com formato estruturado (do Figma)
  const vendedorOptions = [
    {
      id: 18,
      label: 'CECÍLIA',
      name: 'CECÍLIA MEIRELES',
      cpf: '788.320.567-03'
    },
    {
      id: 8,
      label: 'JOÃO',
      name: 'JOÃO GUIMARÃES',
      cpf: '507.528.990-10'
    },
    {
      id: 27,
      label: 'RAQUEL',
      name: 'RAQUEL DE QUEIROZ',
      cpf: '109.692.433-58'
    },
    {
      id: 46,
      label: 'SAULO',
      name: 'SAULO CARVALHO NETO',
      cpf: '598.366.428-44'
    },
    {
      id: 15,
      label: 'ZILDA',
      name: 'ZILDA BORGES LIRA',
      cpf: '67.499.200/001-65'
    }
  ];
  
  const grupoOptions = ['VAREJO', 'ATACADO', 'DISTRIBUIDOR'];
  const rotaOptions = ['NORDESTE', 'NORTE', 'SUDESTE', 'SUL'];

  return (
    <div className="filters-container">
      <div className="filter-row">
        <div 
          className="filter-field" 
          style={{flex: '3.8', position: 'relative'}}
          onMouseEnter={() => setHoveredField('cliente')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <ClienteSelect 
            label="Cliente" 
            value={filters.cliente} 
            onChange={handleClienteChange}
            options={clienteOptions}
            placeholder="Selecione cliente..."
          />
          {hoveredField === 'cliente' && filters.cliente && (
            <button
              className="filter-clear-btn"
              onClick={() => handleClienteChange('')}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '3.6', position: 'relative'}}
          onMouseEnter={() => setHoveredField('estado')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <SelectButton 
            label="Estado / Cidade" 
            value={filters.estado} 
            onChange={(val) => setFilters({...filters, estado: val})}
            options={estadoOptions}
            placeholder="Selecione estado..."
          />
          {hoveredField === 'estado' && filters.estado && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, estado: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '2.6', position: 'relative'}}
          onMouseEnter={() => setHoveredField('situacao')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <SelectButton 
            label="Situação" 
            value={filters.situacao} 
            onChange={(val) => setFilters({...filters, situacao: val})}
            options={situacaoOptions}
            placeholder="Selecione..."
          />
          {hoveredField === 'situacao' && filters.situacao && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, situacao: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="filter-row">
        <div 
          className="filter-field" 
          style={{flex: '3.8', position: 'relative'}}
          onMouseEnter={() => setHoveredField('empresa')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <EmpresaSelect 
            label="Empresa" 
            value={filters.empresa} 
            onChange={(val) => setFilters({...filters, empresa: val})}
            options={empresaOptions}
            placeholder="Selecione empresa..."
          />
          {hoveredField === 'empresa' && filters.empresa && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, empresa: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '3.6', position: 'relative'}}
          onMouseEnter={() => setHoveredField('email')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <InputField 
            label="E-mail" 
            value={filters.email}
            onChange={(val) => setFilters({...filters, email: val})}
            type="email"
            placeholder="seu@email.com"
            showClear={false}
          />
          {hoveredField === 'email' && filters.email && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, email: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '2.6', position: 'relative'}}
          onMouseEnter={() => setHoveredField('celular')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <InputField 
            label="Celular" 
            value={filters.celular}
            onChange={(val) => setFilters({...filters, celular: val})}
            type="text"
            placeholder="(00) 00000-0000"
            showClear={false}
          />
          {hoveredField === 'celular' && filters.celular && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, celular: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="filter-row">
        <div 
          className="filter-field" 
          style={{flex: '3.82', position: 'relative'}}
          onMouseEnter={() => setHoveredField('vendedor')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <SelectButton 
            label="Vendedor" 
            value={filters.vendedor} 
            onChange={(val) => setFilters({...filters, vendedor: val})}
            options={vendedorOptions}
            placeholder="Selecione vendedor..."
          />
          {hoveredField === 'vendedor' && filters.vendedor && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, vendedor: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '1.79', position: 'relative'}}
          onMouseEnter={() => setHoveredField('grupo')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <SelectButton 
            label="Grupo" 
            value={filters.grupo} 
            onChange={(val) => setFilters({...filters, grupo: val})}
            options={grupoOptions}
            placeholder="Selecione..."
          />
          {hoveredField === 'grupo' && filters.grupo && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, grupo: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div 
          className="filter-field" 
          style={{flex: '1.79', position: 'relative'}}
          onMouseEnter={() => setHoveredField('rota')}
          onMouseLeave={() => setHoveredField(null)}
        >
          <SelectButton 
            label="Rota" 
            value={filters.rota} 
            onChange={(val) => setFilters({...filters, rota: val})}
            options={rotaOptions}
            placeholder="Selecione..."
          />
          {hoveredField === 'rota' && filters.rota && (
            <button
              className="filter-clear-btn"
              onClick={() => setFilters({...filters, rota: ''})}
              title="Limpar"
            >
              ×
            </button>
          )}
        </div>
        <div className="filter-field-radio" style={{flex: '2.60'}}>
          <label>Tipo</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                name="tipo"
                value="fisica"
                checked={filters.tipo === 'fisica'}
                onChange={(e) => setFilters({...filters, tipo: e.target.value})}
              />
              <span>Física</span>
            </label>
            <label>
              <input 
                type="radio" 
                name="tipo"
                value="juridica"
                checked={filters.tipo === 'juridica'}
                onChange={(e) => setFilters({...filters, tipo: e.target.value})}
              />
              <span>Jurídica</span>
            </label>
            <label>
              <input 
                type="radio" 
                name="tipo"
                value="todos"
                checked={filters.tipo === 'todos'}
                onChange={(e) => setFilters({...filters, tipo: e.target.value})}
              />
              <span>Todos</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientesFilter;
