import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import './CadastrarCliente.css';
import hoverOptionsIcon from './icons/table-hover-options.svg';
import deleteIcon from './icons/delete.svg';
import editIcon from './icons/edit.svg';
import hoverIconColor from './icons/hover-icon-color-4.svg';
import { ReactComponent as CalendarIcon } from './icons/icon-section.svg';
import { ReactComponent as VectorIcon } from './icons/Vector.svg';
import pdfIcon from './icons/pdf-simple-file.svg';
import checkIcon from './icons/check.svg';
import closeIcon from './icons/close.svg';
import SelectButton from './SelectButton';
import ProspectadorSelect from './ProspectadorSelect';
import TransportadoraSelect from './TransportadoraSelect';

export default function CadastrarCliente({ onCancel, onSave }) {
  const [form, setForm] = useState({
    codigo: '96128',
    documento: '11.882.936/0001-00',
    rg: '1233215648-8',
    isento: false,
    contribuinte: '1 - CONTRIBUINTE',
    regime: '2 - SIMPLES NACIONAL',
    status: 'ATIVO',
    nomeRazao: 'ALL NOTE - ASSISTENCIA TECNICA ESPECIALIZADA EIRELI',
    nomeFantasia: 'all note assistencia',
    cep: '77.006-070',
    endereco: 'QUADRA 106 NORTE, ALAMEDA 17',
    bairro: 'PLANO DIRETOR NORTE',
    numero: '09',
    complemento: 'ATRÁS DA JK, NO FUNDO DA LOTÉRICA',
    cidadeUf: 'ABREULÂNDIA - TO',
    tipo: 'COMERCIAL',
    vendedor: '8 - JOÃO',
    tabelaPreco: 'VAREJO',
    grupo: 'VAREJO - TO',
    prospectador: '18 - CECÍLIA',
    transportadora: '6 - AZUL TRANSPORTE INTERNACIONAL LTDA',
    rota: 'PALMAS SUL',
    cadastro: '01/10/2025',
    nascimento: '10/10/2010',
    inscricaoMunicipal: '898496541894015',
    inscricaoSuframa: '123456789',
    // Financeiro (fields matching reference)
    liberarVendasAPrazo: 'SIM',
    diasVencidosParaBloqueio: '30',
    creditoLiberado: '10000,00',
    creditoDisponivel: '8650,00',
    mediaAtraso: '0',
  });

  const [activeTab, setActiveTab] = useState('endereco');
  
  // Opções de dados para componentes padronizados
  const vendedorOptions = [
    { id: 18, label: 'CECÍLIA', name: 'CECÍLIA MEIRELES', cpf: '788.320.567-03' },
    { id: 8, label: 'JOÃO', name: 'JOÃO GUIMARÃES', cpf: '507.528.990-10' },
    { id: 27, label: 'RAQUEL', name: 'RAQUEL DE QUEIROZ', cpf: '109.692.433-58' },
    { id: 4, label: 'SAULO', name: 'SAULO CARVALHO NETO', cpf: '598.366.428-44' },
    { id: 15, label: 'ZILDA', name: 'ZILDA BORGES LIRA', cpf: '67.499.200/001-65' },
  ];

  const tabelaPrecOptions = ['VAREJO', 'ATACADO - PESSOA FÍSICA', 'ATACADO - PESSOA JURÍDICA', 'CONVÊNIO ASSOCIADO', 'ESPECIAL'];
  const grupoOptions = ['VAREJO - TO', 'ATACADO - TO', 'ATACADO - SP'];
  const rotaOptions = ['PALMAS SUL', 'PALMAS NORTE', 'BRASIL SUL / SUDESTE', 'NORDESTE'];

  const transportadoraOptions = [
    { id: 6, label: 'AZUL TRANSPORTE INTERNACIONAL LTDA', name: 'AZUL LOG INTERNACIONAL', cnpj: '788.320.567-03' },
    { id: 20, label: 'COELHO E FILHOS LOGISTICA EIRELI - ME', name: 'COELHO VAPT-VUPT', cnpj: '507.528.990-10' },
    { id: 55, label: 'ELO FRETE RAPIDO LTDA', name: 'ELO FRETES', cnpj: '109.692.433-58' },
    { id: 11, label: 'HORIZONTE TRANPORTADORA LTDA', name: 'HORIZONTE TRANPORTES', cnpj: '598.366.428-44' },
    { id: 38, label: 'RIO GRANDE TRANSPORTE DE CARGAS S.A.', name: 'TRANSRIO LOGISTICA S.A.', cnpj: '67.499.200/001-65' },
  ];

  // Opções para Toolbar e Endereço
  const contribuinteOptions = ['1 - CONTRIBUINTE', '2 - ISENTO', '9 - NÃO CONTRIBUINTE'];
  const regimeOptions = ['SIMPLES NACIONAL', 'LUCRO PRESUMIDO', 'LUCRO REAL', 'MEI'];
  const statusOptions = ['ATIVO', 'INATIVO'];
  const cidadeUfOptions = ['ABREULÂNDIA - TO', 'AGUIARNÓPOLIS - TO', 'ALIANÇA DO TOCANTINS - TO', 'ALMAS - TO', 'ALVORADA - TO', 'ANANÁS - TO', 'ANGICO - TO'];
  const tipoOptions = ['COMERCIAL', 'INDUSTRIAL', 'INSTITUCIONAL / SERVIÇOS', 'RURAL / AGRÍCOLA', 'ÁREAS DE PRESERVAÇÃO OU ESPECIAIS', 'LOGÍSTICO', '7 - ANANÁS - TO', '8 - ANGICO - TO'];

  const prospectadorOptions = [
    { id: 18, label: 'CECÍLIA', name: 'CECÍLIA MEIRELES', cpf: '788.320.567-03' },
    { id: 8, label: 'JOÃO', name: 'JOÃO GUIMARÃES', cpf: '507.528.990-10' },
    { id: 27, label: 'RAQUEL', name: 'RAQUEL DE QUEIROZ', cpf: '109.692.433-58' },
    { id: 4, label: 'SAULO', name: 'SAULO CARVALHO NETO', cpf: '598.366.428-44' },
    { id: 15, label: 'ZILDA', name: 'ZILDA BORGES LIRA', cpf: '67.499.200/001-65' },
  ];
  const [addresses, setAddresses] = useState([
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidadeUf: 'Palmas - TO',
    },
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidadeUf: 'Palmas - TO',
    },
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidadeUf: 'Palmas - TO',
    },
  ]);

  const [phones, setPhones] = useState([
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipoTelefone: 'WHATSAPP',
      departamento: 'FINANCEIRO',
      contato: 'JOÃO MARIA PEREIRA SILVA',
      observacao: 'LINHA DESATIVADA MOMENTANEAMENTE',
    },
  ]);

  const [emails, setEmails] = useState([
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: true,
      venda: true,
      orcamento: true,
      ordemServico: false,
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: true,
      venda: true,
      orcamento: true,
      ordemServico: true,
    },
  ]);

  const [attachments] = useState([
    { name: 'FICHA TÉCNICA MR60X V4.1.3', type: 'PDF', size: '527 KB', icon: pdfIcon },
    { name: 'FICHA TÉCNICA MR60X V4.1.3', type: 'PDF', size: '527 KB', icon: pdfIcon },
    { name: 'FICHA TÉCNICA MR60X V4.1.3', type: 'PDF', size: '527 KB', icon: pdfIcon },
    { name: 'FICHA TÉCNICA MR60X V4.1.3', type: 'PDF', size: '527 KB', icon: pdfIcon },
  ]);

  const [emailForm, setEmailForm] = useState({
    email: 'palmastec@palmastec.com',
    descricao: 'E-MAIL PRINCIPAL',
    nota: false,
    boleto: false,
    venda: false,
    orcamento: false,
    ordemServico: false,
    todos: false,
  });

  const setEmailField = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEmailForm({ ...emailForm, [key]: value });
  };

  const handleAddEmail = () => {
    setEmails([...emails, { ...emailForm }]);
  };

  const [phoneForm, setPhoneForm] = useState({
    telefone: '(63) 98765-4321',
    ramal: '06',
    tipoTelefone: 'WHATSAPP',
    departamento: 'FINANCEIRO',
    contato: 'JOÃO MARIA PEREIRA SILVA',
    observacao: 'LINHA DESATIVADA',
  });

  const setPhone = (key) => (e) => setPhoneForm({ ...phoneForm, [key]: e.target.value });

  const handleAddPhone = () => {
    setPhones([...phones, { ...phoneForm }]);
  };

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleAddAddress = () => {
    const newAddress = {
      tipo: form.tipo,
      cep: form.cep,
      endereco: form.endereco,
      bairro: form.bairro,
      numero: form.numero,
      complemento: form.complemento,
      cidadeUf: form.cidadeUf,
    };
    setAddresses([...addresses, newAddress]);
  };

  useEffect(() => {
    function updateScrollbars() {
      document.querySelectorAll('.cc-table-container').forEach((container) => {
        const tbody = container.querySelector('tbody');
        if (!tbody) return;
        const scrollbarWidth = Math.max(0, tbody.offsetWidth - tbody.clientWidth);
        container.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      });
    }

    // initial (run twice to let DOM settle after tab switches)
    updateScrollbars();
    const settleTimer = setTimeout(updateScrollbars, 50);

    // update on resize
    window.addEventListener('resize', updateScrollbars);

    // observe changes inside tables (rows added/removed)
    const observers = [];
    document.querySelectorAll('.cc-table-container').forEach((container) => {
      const obs = new MutationObserver(updateScrollbars);
      obs.observe(container, { childList: true, subtree: true });
      observers.push(obs);
    });

    return () => {
      clearTimeout(settleTimer);
      window.removeEventListener('resize', updateScrollbars);
      observers.forEach((o) => o.disconnect());
    };
  }, [phones, addresses, activeTab]);

  const [showCalendar, setShowCalendar] = React.useState(false);

  const handleOpenCalendar = (mode = 'single') => {
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => setShowCalendar(false);

  const handleConfirmCalendar = (s, e) => {
    if (s && !e) {
      const dd = String(s.getDate()).padStart(2,'0');
      const mm = String(s.getMonth()+1).padStart(2,'0');
      const yyyy = s.getFullYear();
      setForm(prev => ({ ...prev, nascimento: `${dd}/${mm}/${yyyy}` }));
    } else if (s && e) {
      // range selected, set to `start - end`
      const f = (d)=> `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
      setForm(prev => ({ ...prev, nascimento: `${f(s)} - ${f(e)}` }));
    }
    setShowCalendar(false);
  };

  return (
    <div className="cc-page">
      {/* Header */}
      <div className="cc-header-top">
        <div className="cc-title">CADASTRAR CLIENTE</div>
        <div className="cc-actions">
          <button className="cc-btn-outline" onClick={onCancel}>
            <img src={closeIcon} alt="Cancelar" className="cc-btn-icon-svg" />
            <div className="cc-btn-label">Cancelar</div>
          </button>
          <button className="cc-btn-outline" onClick={onSave}>
            <img src={checkIcon} alt="Salvar" className="cc-btn-icon-svg" />
            <div className="cc-btn-label">Salvar</div>
          </button>
        </div>
      </div>
      <div className="cc-divider" />

      {/* Toolbar - Primeira linha */}
      <div className="cc-toolbar">
        <div className="cc-field" style={{ flex: '10' }}>
          <label className="cc-label">Código</label>
          <div className="cc-input-disabled">{form.codigo}</div>
        </div>

        <div className="cc-field" style={{ flex: '10' }}>
          <label className="cc-label">CPF / CNPJ</label>
          <input value={form.documento} onChange={set('documento')} className="cc-input" />
        </div>

        <div className="cc-field" style={{ flex: '15' }}>
          <label className="cc-label">RG / IE</label>
          <div className="cc-input cc-input-checkbox">
            <input
              value={form.rg}
              onChange={set('rg')}
              className="cc-input-text"
            />
            <label className="cc-checkbox-inline">
              <input
                type="checkbox"
                checked={form.isento}
                onChange={(e) => setForm({ ...form, isento: e.target.checked })}
                className="cc-checkbox"
              />
              <span>Isento</span>
            </label>
          </div>
        </div>

        <div className="cc-field" style={{ flex: '10' }}>
          <SelectButton
            label="Contribuinte"
            value={form.contribuinte}
            onChange={(val) => setForm({ ...form, contribuinte: val })}
            options={contribuinteOptions}
            placeholder="TODOS"
          />
        </div>

        <div className="cc-field" style={{ flex: '15' }}>
          <SelectButton
            label="Regime Tributário"
            value={form.regime}
            onChange={(val) => setForm({ ...form, regime: val })}
            options={regimeOptions}
            placeholder="TODOS"
          />
        </div>

        <div className="cc-field" style={{ flex: '10' }}>
          <SelectButton
            label="Status"
            value={form.status}
            onChange={(val) => setForm({ ...form, status: val })}
            options={statusOptions}
            placeholder="TODOS"
          />
        </div>
      </div>

      {/* Nome / Razão Social e Nome Fantasia */}
      <div className="cc-row">
        <div className="cc-field" style={{ flex: '35' }}>
          <label className="cc-label">Nome / Razão Social</label>
          <input value={form.nomeRazao} onChange={set('nomeRazao')} className="cc-input" />
        </div>

        <div className="cc-field" style={{ flex: '35' }}>
          <label className="cc-label">Nome Social / Nome Fantasia</label>
          <input value={form.nomeFantasia} onChange={set('nomeFantasia')} className="cc-input" />
        </div>
      </div>

      {/* Tabs */}
      <div className="cc-tabs">
        <div
          className={`cc-tab ${activeTab === 'endereco' ? 'active' : ''}`}
          onClick={() => setActiveTab('endereco')}
        >
          Endereço
        </div>
        <div
          className={`cc-tab ${activeTab === 'telefone' ? 'active' : ''}`}
          onClick={() => setActiveTab('telefone')}
        >
          Telefone
        </div>
        <div
          className={`cc-tab ${activeTab === 'email' ? 'active' : ''}`}
          onClick={() => setActiveTab('email')}
        >
          E-mail
        </div>
        <div
          className={`cc-tab ${activeTab === 'complemento' ? 'active' : ''}`}
          onClick={() => setActiveTab('complemento')}
        >
          Complemento
        </div>
        <div
          className={`cc-tab ${activeTab === 'financeiro' ? 'active' : ''}`}
          onClick={() => setActiveTab('financeiro')}
        >
          Financeiro
        </div>
        <div
          className={`cc-tab ${activeTab === 'anexos' ? 'active' : ''}`}
          onClick={() => setActiveTab('anexos')}
        >
          Anexos
        </div>
      </div>

      {/* add-button-group will be rendered per-tab right before each table container */}

      {/* Seção Endereço */}
      {activeTab === 'endereco' && (
        <div className="cc-address-section">
          <div className="cc-line">
          <div className="cc-field" style={{ flex: '1' }}>
            <label className="cc-label">CEP</label>
            <input value={form.cep} onChange={set('cep')} className="cc-input" />
          </div>

          <div className="cc-field" style={{ flex: '5.3' }}>
            <label className="cc-label">Endereço</label>
            <input value={form.endereco} onChange={set('endereco')} className="cc-input" />
          </div>

          <div className="cc-field" style={{ flex: '1.9' }}>
            <label className="cc-label">Bairro</label>
            <input value={form.bairro} onChange={set('bairro')} className="cc-input" />
          </div>

          <div className="cc-field" style={{ flex: '1.2' }}>
            <label className="cc-label">Número</label>
            <input value={form.numero} onChange={set('numero')} className="cc-input" />
          </div>
        </div>

          <div className="cc-line">
          <div className="cc-field" style={{ flex: '3' }}>
            <label className="cc-label">Complemento</label>
            <input value={form.complemento} onChange={set('complemento')} className="cc-input" />
          </div>

          <div className="cc-field" style={{ flex: '2.0' }}>
            <SelectButton
              label="Cidade - UF"
              value={form.cidadeUf}
              onChange={(val) => setForm({ ...form, cidadeUf: val })}
              options={cidadeUfOptions}
              placeholder="TODOS"
            />
          </div>

          <div className="cc-field" style={{ flex: '2.5' }}>
            <SelectButton
              label="Tipo"
              value={form.tipo}
              onChange={(val) => setForm({ ...form, tipo: val })}
              options={tipoOptions}
              placeholder="TODOS"
            />
          </div>
        </div>

          
        </div>
      )}

      {/* Seção Telefone */}
      {activeTab === 'telefone' && (
        <>
          <div className="cc-address-section">
            <div className="cc-phone-grid">
              <div className="cc-field">
                <label className="cc-label">Telefone</label>
                <input value={phoneForm.telefone} onChange={setPhone('telefone')} className="cc-input" />
              </div>

              <div className="cc-field">
                <label className="cc-label">Ramal</label>
                <input value={phoneForm.ramal} onChange={setPhone('ramal')} className="cc-input" />
              </div>

              <div className="cc-field">
                <label className="cc-label">Tipo</label>
                <input value={phoneForm.tipoTelefone} onChange={setPhone('tipoTelefone')} className="cc-input" />
              </div>

              <div className="cc-field">
                <label className="cc-label">Departamento</label>
                <input value={phoneForm.departamento} onChange={setPhone('departamento')} className="cc-input" />
              </div>

              <div className="cc-field" style={{ gridColumn: '1 / span 2' }}>
                <label className="cc-label">Contato</label>
                <input value={phoneForm.contato} onChange={setPhone('contato')} className="cc-input" />
              </div>

              <div className="cc-field" style={{ gridColumn: '3 / span 2' }}>
                <label className="cc-label">Observação</label>
                <input value={phoneForm.observacao} onChange={setPhone('observacao')} className="cc-input" />
              </div>
            </div>

          
          </div>

          <div className="cc-add-button-group">
            <button className="cc-add-btn" onClick={handleAddPhone}>Adicionar</button>
          </div>


          <div className="cc-table-container">
            <table className="cc-table">
                <colgroup>
                  <col style={{ width: '152px' }} />
                  <col style={{ width: '93px' }} />
                  <col style={{ width: '173px' }} />
                  <col style={{ width: '219px' }} />
                  <col style={{ width: '219px' }} />
                  <col style={{ width: '260px' }} />
                </colgroup>
              <thead>
                <tr>
                  <th style={{ width: '152px' }}>Telefone</th>
                  <th style={{ width: '93px' }}>Ramal</th>
                  <th style={{ width: '173px' }}>Tipo</th>
                  <th style={{ width: '219px' }}>Departamento</th>
                  <th style={{ width: '219px' }}>Contato</th>
                  <th style={{ width: '260px' }}>Observação</th>
                </tr>
              </thead>
              <tbody>
                {phones.map((p, idx) => (
                  <tr key={`p-${idx}`}>
                    <td style={{ width: '152px' }}>{p.telefone}</td>
                    <td style={{ width: '93px' }}>{p.ramal}</td>
                    <td style={{ width: '173px' }}>{p.tipoTelefone}</td>
                    <td style={{ width: '219px' }}>{p.departamento}</td>
                    <td style={{ width: '219px' }}>{p.contato}</td>
                    <td style={{ width: '260px' }} className="cc-cell-with-icons">
                      <span className="cc-cell-text">{p.observacao}</span>
                      <div className="cc-row-icons">
                        <button type="button" className="cc-row-icon-btn">
                          <img src={editIcon} alt="Editar" />
                        </button>
                        <button type="button" className="cc-row-icon-btn">
                          <img src={hoverIconColor} alt="Opções" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Tabela de Endereços */}
      {activeTab === 'endereco' && (
        <>
        <div className="cc-add-button-group">
          <button className="cc-add-btn" onClick={handleAddAddress}>Adicionar</button>
        </div>
        <div className="cc-table-container">
        <table className="cc-table">
          <colgroup>
            <col style={{ width: '135px' }} />
            <col style={{ width: '96px' }} />
            <col style={{ width: '261px' }} />
            <col style={{ width: '163px' }} />
            <col style={{ width: '89px' }} />
            <col style={{ width: '160px' }} />
            <col style={{ width: '160px' }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ width: '135px' }}>Tipo</th>
              <th style={{ width: '96px' }}>CEP</th>
              <th style={{ width: '261px' }}>Endereço</th>
              <th style={{ width: '163px' }}>Bairro</th>
              <th style={{ width: '89px' }}>Número</th>
              <th style={{ width: '160px' }}>Complemento</th>
              <th style={{ width: '160px' }}>Cidade - UF</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((addr, idx) => (
              <tr key={idx}>
                <td style={{ width: '135px' }}>{addr.tipo}</td>
                <td style={{ width: '96px' }}>{addr.cep}</td>
                <td style={{ width: '261px' }}>{addr.endereco}</td>
                <td style={{ width: '163px' }}>{addr.bairro}</td>
                <td style={{ width: '89px' }}>{addr.numero}</td>
                <td style={{ width: '160px' }}>{addr.complemento}</td>
                <td style={{ width: '160px' }} className="cc-cell-with-icons">
                  <span className="cc-cell-text">{addr.cidadeUf}</span>
                  <div className="cc-row-icons">
                    <button type="button" className="cc-row-icon-btn">
                      <img src={hoverOptionsIcon} alt="Opções" />
                    </button>
                    <button type="button" className="cc-row-icon-btn">
                      <img src={deleteIcon} alt="Excluir" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </>
      )}

      {/* Seção E-mail */}
      {activeTab === 'email' && (
        <>
          <div className="cc-address-section">
            <div className="cc-line">
              <div className="cc-field" style={{ flex: '1.5' }}>
                <label className="cc-label">E-mail</label>
                <input value={emailForm.email} onChange={setEmailField('email')} className="cc-input" />
              </div>

              <div className="cc-field" style={{ flex: '1.5' }}>
                <label className="cc-label">Descrição</label>
                <input value={emailForm.descricao} onChange={setEmailField('descricao')} className="cc-input" />
              </div>
            </div>

            <div className="cc-line" style={{ paddingTop: 8, paddingBottom: 8 }}>
              <label style={{ color: '#008236', marginRight: 12 }}> </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.todos} onChange={(e)=>{
                  const val = e.target.checked;
                  setEmailForm({ ...emailForm, todos: val, nota: val, boleto: val, venda: val, orcamento: val, ordemServico: val });
                }} />
                <span>Todos</span>
              </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.nota} onChange={setEmailField('nota')} />
                <span>Nota</span>
              </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.boleto} onChange={setEmailField('boleto')} />
                <span>Boleto</span>
              </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.venda} onChange={setEmailField('venda')} />
                <span>Venda</span>
              </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.orcamento} onChange={setEmailField('orcamento')} />
                <span>Orçamento</span>
              </label>
              <label className="cc-checkbox-inline">
                <input type="checkbox" className="cc-checkbox" checked={emailForm.ordemServico} onChange={setEmailField('ordemServico')} />
                <span>Ordem de Serviço</span>
              </label>
            </div>

            
          
          </div>

          <div className="cc-add-button-group cc-add-button-group-email">
            <button className="cc-add-btn" onClick={handleAddEmail}>Adicionar</button>
          </div>

          <div className="cc-table-container">
            <table className="cc-table">
              <colgroup>
                <col style={{ width: '260px' }} />
                <col style={{ width: '420px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '120px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ width: '260px' }}>Email</th>
                  <th style={{ width: '420px' }}>Descrição</th>
                  <th style={{ width: '80px' }}>Nota</th>
                  <th style={{ width: '80px' }}>Boleto</th>
                  <th style={{ width: '80px' }}>Venda</th>
                  <th style={{ width: '80px' }}>Orçamento</th>
                  <th style={{ width: '120px' }}>Ordem de Serviço</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((em, i) => (
                  <tr key={`em-${i}`}>
                    <td style={{ width: '260px' }}>{em.email}</td>
                    <td style={{ width: '420px' }}>{em.descricao}</td>
                    <td style={{ width: '80px' }} className={em.nota ? 'cc-flag-true' : 'cc-flag-false'}>{em.nota ? '✓' : '✕'}</td>
                    <td style={{ width: '80px' }} className={em.boleto ? 'cc-flag-true' : 'cc-flag-false'}>{em.boleto ? '✓' : '✕'}</td>
                    <td style={{ width: '80px' }} className={em.venda ? 'cc-flag-true' : 'cc-flag-false'}>{em.venda ? '✓' : '✕'}</td>
                    <td style={{ width: '80px' }} className={em.orcamento ? 'cc-flag-true' : 'cc-flag-false'}>{em.orcamento ? '✓' : '✕'}</td>
                    <td style={{ width: '120px' }} className={em.ordemServico ? 'cc-flag-true' : 'cc-flag-false'}>
                      <span className="cc-cell-text">{em.ordemServico ? '✓' : '✕'}</span>
                      <div className="cc-row-icons">
                        <button type="button" className="cc-row-icon-btn">
                          <img src={editIcon} alt="Editar" />
                        </button>
                        <button type="button" className="cc-row-icon-btn">
                          <img src={hoverIconColor} alt="Opções" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Seção Complemento */}
      {activeTab === 'complemento' && (
        <div className="cc-address-section">
          <div className="cc-complement-grid">
            {/* Row 1 */}
            <div className="cc-field cc-complement-vendedor">
              <SelectButton
                label="Vendedor"
                value={form.vendedor}
                onChange={(val) => setForm({ ...form, vendedor: val })}
                options={vendedorOptions}
                placeholder="Selecione vendedor..."
              />
            </div>

            <div className="cc-field cc-complement-tabela">
              <SelectButton
                label="Tabela de Preço"
                value={form.tabelaPreco}
                onChange={(val) => setForm({ ...form, tabelaPreco: val })}
                options={tabelaPrecOptions}
                placeholder="TODOS"
              />
            </div>

            <div className="cc-field cc-complement-grupo">
              <SelectButton
                label="Grupo"
                value={form.grupo}
                onChange={(val) => setForm({ ...form, grupo: val })}
                options={grupoOptions}
                placeholder="TODOS"
              />
            </div>

            {/* Row 2 */}
            <div className="cc-field cc-complement-prospectador">
              <ProspectadorSelect
                label="Prospectador"
                value={form.prospectador}
                onChange={(val) => setForm({ ...form, prospectador: val })}
                options={prospectadorOptions}
                placeholder="Selecione prospectador..."
              />
            </div>

            <div className="cc-field cc-complement-transportadora">
              <TransportadoraSelect
                label="Transportadora"
                value={form.transportadora}
                onChange={(val) => setForm({ ...form, transportadora: val })}
                options={transportadoraOptions}
                placeholder="Selecione transportadora..."
              />
            </div>

            <div className="cc-field cc-complement-rota">
              <SelectButton
                label="Rota"
                value={form.rota}
                onChange={(val) => setForm({ ...form, rota: val })}
                options={rotaOptions}
                placeholder="TODOS"
              />
            </div>

            {/* Row 3 */}
            <div className="cc-complement-left-pair">
              <div className="cc-field">
                <label className="cc-label">Cadastro</label>
                <input value={form.cadastro} onChange={set('cadastro')} className="cc-input" />
              </div>

              <div className="cc-field">
                <label className="cc-label">Nascimento / Criação</label>
                <div className="cc-input-with-icon cc-input-with-calendar">
                    <input value={form.nascimento} readOnly className="cc-input" />
                      <button type="button" className="cc-calendar-btn" aria-label="Abrir calendário" onClick={() => handleOpenCalendar('single')}>
                        <CalendarIcon className="cc-calendar-svg" aria-hidden="true" />
                      </button>
                </div>
              </div>
            </div>

            <div className="cc-complement-insc-pair">
              <div className="cc-field cc-complement-insc-mun">
                <label className="cc-label">Inscrição Municipal</label>
                <input value={form.inscricaoMunicipal} onChange={set('inscricaoMunicipal')} className="cc-input" />
              </div>

              <div className="cc-field cc-complement-insc-suframa">
                <label className="cc-label">Inscrição Suframa</label>
                <input value={form.inscricaoSuframa} onChange={set('inscricaoSuframa')} className="cc-input" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Seção Anexos */}
      {activeTab === 'anexos' && (
        <div className="cc-anexos-section">
          <div className="cc-table-container cc-attachments-table">
            <table className="cc-table anexos-fullwidth-table">
              <colgroup>
                <col style={{ width: '60%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Tamanho</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cc-attachment-add-row">
                  <td className="cc-attachment-add-cell">
                    <button className="cc-attachments-add-btn">
                      <VectorIcon className="cc-attachments-add-svg" aria-hidden="true" />
                      <span>ADICIONAR ARQUIVOS</span>
                    </button>
                  </td>
                  <td className="cc-attachment-add-empty" />
                  <td className="cc-attachment-add-empty" />
                </tr>
                {attachments.map((a, i) => (
                  <tr key={`att-${i}`}>
                    <td style={{ textAlign: 'left', paddingLeft: 16 }} className="cc-attachment-name">
                      <img src={a.icon} alt={a.type} className="cc-attachment-icon" />
                      <span className="cc-attachment-text">{a.name}</span>
                    </td>
                    <td>
                      <span className="cc-cell-text">{a.type}</span>
                    </td>
                    <td className="cc-cell-with-icons">
                      <span className="cc-cell-text">{a.size}</span>
                      <div className="cc-row-icons">
                        <button type="button" className="cc-row-icon-btn">
                          <img src={editIcon} alt="Editar" />
                        </button>
                        <button type="button" className="cc-row-icon-btn">
                          <img src={hoverIconColor} alt="Opções" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Seção Financeiro */}
      {activeTab === 'financeiro' && (
        <div className="cc-address-section">
          <div className="cc-finance-grid">
            <div className="cc-field">
              <label className="cc-label">Liberar Vendas a Prazo</label>
              <select value={form.liberarVendasAPrazo} onChange={set('liberarVendasAPrazo')} className="cc-input">
                <option>SIM</option>
                <option>NÃO</option>
              </select>
            </div>
            <div className="cc-field">
              <label className="cc-label">Dias Vencidos para Bloqueio</label>
              <input value={form.diasVencidosParaBloqueio} onChange={set('diasVencidosParaBloqueio')} className="cc-input" />
            </div>
            <div className="cc-field">
              <label className="cc-label">Crédito Liberado</label>
              <input value={form.creditoLiberado} onChange={set('creditoLiberado')} className="cc-input" />
            </div>
            <div className="cc-field">
              <label className="cc-label">Crédito Disponível</label>
              <input value={form.creditoDisponivel} onChange={set('creditoDisponivel')} className="cc-input" />
            </div>
            <div className="cc-field">
              <label className="cc-label">Média de Atraso</label>
              <input value={form.mediaAtraso} onChange={set('mediaAtraso')} className="cc-input" />
            </div>
          </div>
        </div>
      )}
      {showCalendar && (
        <Calendar mode="single" initialStart={null} initialEnd={null} onClose={handleCloseCalendar} onConfirm={handleConfirmCalendar} />
      )}
    </div>
  );
}
