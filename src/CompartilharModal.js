import React, { useState } from 'react';
import './CompartilharModal.css';

const CompartilharModal = ({ isOpen, onClose, documentCount = 17 }) => {
  const [tab, setTab] = useState('email');
  const [emailRecipients, setEmailRecipients] = useState([
    'compras@allnote.com.br',
    'nilton.silva@allnote.com.br',
    'financeiro@allnote.com.br'
  ]);
  const [phoneRecipients, setPhoneRecipients] = useState([
    '(63) 98454-3808',
    '(63) 91234-5678',
    '(63) 98765-432'
  ]);
  const [newRecipient, setNewRecipient] = useState('');
  const [subject, setSubject] = useState('CONTAS A PAGAR 2025');
  const [message, setMessage] = useState('Envio de relatório dos débitos pendentes referentes ao ano de 2025.');
  const [selectedFiles, setSelectedFiles] = useState({
    boleto: true,
    pedido: false,
    notaPdf: false,
    notaXml: false
  });

  if (!isOpen) return null;

  const handleRemoveRecipient = (index) => {
    if (tab === 'email') {
      setEmailRecipients(emailRecipients.filter((_, i) => i !== index));
    } else {
      setPhoneRecipients(phoneRecipients.filter((_, i) => i !== index));
    }
  };

  const handleAddRecipient = () => {
    if (newRecipient.trim()) {
      if (tab === 'email') {
        if (!emailRecipients.includes(newRecipient)) {
          setEmailRecipients([...emailRecipients, newRecipient]);
          setNewRecipient('');
        }
      } else {
        if (!phoneRecipients.includes(newRecipient)) {
          setPhoneRecipients([...phoneRecipients, newRecipient]);
          setNewRecipient('');
        }
      }
    }
  };

  const currentRecipients = tab === 'email' ? emailRecipients : phoneRecipients;

  const handleFileChange = (file) => {
    setSelectedFiles({
      ...selectedFiles,
      [file]: !selectedFiles[file]
    });
  };

  return (
    <div className="cm-modal-overlay">
      <div className="cm-modal-container">
        {/* Header */}
        <div className="cm-header">
          <h2 className="cm-title">Compartilhar</h2>
          <button className="cm-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cm-content">
          {/* Documentos Selecionados */}
          <div className="cm-doc-count">
            {documentCount} Documentos Selecionados
          </div>

          {/* Abas */}
          <div className="cm-tabs">
            <button
              className={`cm-tab ${tab === 'email' ? 'active' : ''}`}
              onClick={() => setTab('email')}
            >
              E-mail
            </button>
            <button
              className={`cm-tab ${tab === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setTab('whatsapp')}
            >
              Whatsapp
            </button>
          </div>

          {/* Destinatário */}
          <div className="cm-section">
            <label className="cm-label">Destinatário</label>
            <div className="cm-recipients">
              {currentRecipients.map((recipient, index) => (
                <div key={index} className="cm-recipient-tag">
                  {recipient}
                  <button
                    className="cm-tag-remove"
                    onClick={() => handleRemoveRecipient(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <input
                type="text"
                className="cm-recipient-input"
                placeholder={tab === 'email' ? 'Adicionar e-mail' : 'Adicionar telefone'}
                value={newRecipient}
                onChange={(e) => setNewRecipient(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddRecipient()}
              />
            </div>
          </div>

          {/* Assunto */}
          <div className="cm-section">
            <label className="cm-label">Assunto</label>
            <input
              type="text"
              className="cm-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Mensagem */}
          <div className="cm-section">
            <div className="cm-editor-toolbar">
              <button className="cm-toolbar-btn" title="Negrito">
                <strong>B</strong>
              </button>
              <button className="cm-toolbar-btn" title="Itálico">
                <i>I</i>
              </button>
              <button className="cm-toolbar-btn" title="Sublinhado">
                <u>U</u>
              </button>
              <div className="cm-toolbar-divider"></div>
              <button className="cm-toolbar-btn" title="Alinhar esquerda">
                ⬅
              </button>
              <button className="cm-toolbar-btn" title="Alinhar centro">
                ⬌
              </button>
              <button className="cm-toolbar-btn" title="Alinhar direita">
                ➡
              </button>
              <div className="cm-toolbar-divider"></div>
              <button className="cm-toolbar-btn" title="Lista com bullets">
                ≡
              </button>
              <button className="cm-toolbar-btn" title="Lista numerada">
                1.
              </button>
              <button className="cm-toolbar-btn" title="Link">
                🔗
              </button>
              <button className="cm-toolbar-btn" title="Emoji">
                😊
              </button>
            </div>
            <textarea
              className="cm-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="cm-footer">
          <div className="cm-checkboxes">
            <label className="cm-checkbox-label">
              <input
                type="checkbox"
                checked={selectedFiles.boleto}
                onChange={() => handleFileChange('boleto')}
              />
              Boleto
            </label>
            <label className="cm-checkbox-label">
              <input
                type="checkbox"
                checked={selectedFiles.pedido}
                onChange={() => handleFileChange('pedido')}
              />
              Pedido
            </label>
            <label className="cm-checkbox-label">
              <input
                type="checkbox"
                checked={selectedFiles.notaPdf}
                onChange={() => handleFileChange('notaPdf')}
              />
              Nota (PDF)
            </label>
            <label className="cm-checkbox-label">
              <input
                type="checkbox"
                checked={selectedFiles.notaXml}
                onChange={() => handleFileChange('notaXml')}
              />
              Nota (XML)
            </label>
          </div>
          <button className="cm-btn-enviar" onClick={onClose}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompartilharModal;
