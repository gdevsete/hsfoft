import React from 'react';
import './ImpressaoModal.css';

const ImpressaoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="im-modal-overlay">
      <div className="im-modal-container">
        <div className="im-header">
          <h2 className="im-title">Visualizar Impressão</h2>
          <button className="im-close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
            </svg>
          </button>
        </div>

        <div className="im-content">
          <div className="im-document">
            <div className="im-page">
              <div className="im-page-header">
                <div className="im-company-logo">TAGOM</div>
                <div className="im-company-info">
                  <p><strong>TAGOM INDÚSTRIA E COMÉRCIO</strong></p>
                  <p>CNPJ: 00.000.000/0000-00</p>
                  <p>Rua São Jorge, 100 - São Paulo - SP</p>
                </div>
              </div>

              <div className="im-document-title">
                <h1>FATURA Nº 756-0</h1>
              </div>

              <div className="im-document-info">
                <div className="im-info-row">
                  <div className="im-info-group">
                    <label>CLIENTE:</label>
                    <p>BYTE SYSTEMS INOVAÇÃO</p>
                  </div>
                  <div className="im-info-group">
                    <label>DATA:</label>
                    <p>15/01/2026</p>
                  </div>
                </div>
                <div className="im-info-row">
                  <div className="im-info-group">
                    <label>ENDEREÇO:</label>
                    <p>Rua Exemplo, 123 - São Paulo</p>
                  </div>
                  <div className="im-info-group">
                    <label>VENCIMENTO:</label>
                    <p>15/02/2026</p>
                  </div>
                </div>
              </div>

              <div className="im-table">
                <div className="im-table-header">
                  <div className="im-table-cell" style={{flex: 3}}>DESCRIÇÃO</div>
                  <div className="im-table-cell" style={{flex: 1}}>QTD</div>
                  <div className="im-table-cell" style={{flex: 1}}>UNIT.</div>
                  <div className="im-table-cell" style={{flex: 1}}>TOTAL</div>
                </div>
                <div className="im-table-body">
                  <div className="im-table-row">
                    <div className="im-table-cell" style={{flex: 3}}>Produto/Serviço Exemplo 1</div>
                    <div className="im-table-cell" style={{flex: 1}}>1</div>
                    <div className="im-table-cell" style={{flex: 1}}>R$ 500,00</div>
                    <div className="im-table-cell" style={{flex: 1}}>R$ 500,00</div>
                  </div>
                  <div className="im-table-row">
                    <div className="im-table-cell" style={{flex: 3}}>Produto/Serviço Exemplo 2</div>
                    <div className="im-table-cell" style={{flex: 1}}>2</div>
                    <div className="im-table-cell" style={{flex: 1}}>R$ 250,00</div>
                    <div className="im-table-cell" style={{flex: 1}}>R$ 500,00</div>
                  </div>
                </div>
              </div>

              <div className="im-totals">
                <div className="im-total-row">
                  <span>Subtotal:</span>
                  <span>R$ 1.000,00</span>
                </div>
                <div className="im-total-row">
                  <span>Impostos:</span>
                  <span>R$ 150,00</span>
                </div>
                <div className="im-total-row im-total-main">
                  <span>TOTAL:</span>
                  <span>R$ 1.150,00</span>
                </div>
              </div>

              <div className="im-barcode">
                <p>|||||||||||||||||||||||||||||||||||</p>
                <p>756-0</p>
              </div>

              <div className="im-footer">
                <p>Documento gerado digitalmente. Não requer assinatura.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="im-footer-buttons">
          <button className="im-btn im-btn-print" onClick={() => window.print()}>
            Imprimir
          </button>
          <button className="im-btn im-btn-download">
            Baixar PDF
          </button>
          <button className="im-btn im-btn-close" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpressaoModal;
