import React, { useState } from 'react';
import './ImpressaoModal.css';

const ImpressaoModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(75);
  const totalPages = 3;

  if (!isOpen) return null;

  const handleZoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="im-modal-overlay">
      <div className="im-modal-container">
        {/* Toolbar */}
        <div className="im-toolbar">
          <div className="im-toolbar-left">
            <button className="im-toolbar-btn" title="Imprimir" onClick={() => window.print()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
            </button>
            <button className="im-toolbar-btn" title="Salvar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
              </svg>
            </button>
            <button className="im-toolbar-btn" title="Compartilhar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.15c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.44 9.31 6.77 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.77 0 1.44-.3 1.96-.77l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
            <button className="im-toolbar-btn" title="Tela cheia">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>

          <div className="im-toolbar-center">
            <button className="im-toolbar-btn" onClick={handleZoomOut}>−</button>
            <span className="im-zoom-display">{zoom}%</span>
            <input 
              type="range" 
              min="50" 
              max="150" 
              value={zoom}
              onChange={(e) => setZoom(parseInt(e.target.value))}
              className="im-zoom-slider"
            />
            <button className="im-toolbar-btn" onClick={handleZoomIn}>+</button>
          </div>

          <div className="im-toolbar-right">
            <button className="im-toolbar-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
              ←
            </button>
            <div className="im-page-info">
              <input 
                type="number" 
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) setCurrentPage(page);
                }}
                min="1"
                max={totalPages}
                className="im-page-input"
              />
              <span>de {totalPages}</span>
            </div>
            <button className="im-toolbar-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
              →
            </button>
            <button className="im-close-toolbar-btn" onClick={onClose}>
              Fechar (ESC)
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="im-content-wrapper">
          {/* Thumbnails */}
          <div className="im-thumbnails-panel">
            {[1, 2, 3].map((page) => (
              <div
                key={page}
                className={`im-thumbnail ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                <div className="im-thumbnail-content">
                  <div className="im-thumb-header">RECIBO DO PAGADOR</div>
                  <div className="im-thumb-number">756-{page}</div>
                  <div className="im-thumb-barcode">|||||||||||||||</div>
                </div>
              </div>
            ))}
          </div>

          {/* Document Viewer */}
          <div className="im-document-viewer">
            <div className="im-document-wrapper" style={{ transform: `scale(${zoom / 100})` }}>
              <div className="im-document-page">
                {/* Header */}
                <div className="im-doc-header">
                  <div className="im-doc-logo">TAGOM</div>
                  <div className="im-doc-title">RECIBO DO PAGADOR</div>
                  <div className="im-doc-number">756-{currentPage}</div>
                </div>

                {/* Main Content */}
                <div className="im-doc-content">
                  <div className="im-doc-section">
                    <div className="im-doc-row">
                      <div className="im-doc-field">
                        <label>Beneficiário:</label>
                        <p>TAGOM INDÚSTRIA E COMÉRCIO LTDA</p>
                      </div>
                      <div className="im-doc-field">
                        <label>Data:</label>
                        <p>15/01/2026</p>
                      </div>
                    </div>
                    <div className="im-doc-row">
                      <div className="im-doc-field">
                        <label>CNPJ:</label>
                        <p>75691.32637.0136-70</p>
                      </div>
                      <div className="im-doc-field">
                        <label>Referência:</label>
                        <p>REC 756-{currentPage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="im-doc-section">
                    <div className="im-doc-row">
                      <div className="im-doc-field">
                        <label>Sacado:</label>
                        <p>BYTE SYSTEMS INOVAÇÃO TEC.</p>
                      </div>
                    </div>
                    <div className="im-doc-row">
                      <div className="im-doc-field">
                        <label>Endereço:</label>
                        <p>Rua São Jorge, 100 - São Paulo - SP</p>
                      </div>
                    </div>
                  </div>

                  <div className="im-doc-table">
                    <div className="im-table-row im-table-header">
                      <div className="im-table-col">Descrição</div>
                      <div className="im-table-col">Valor</div>
                    </div>
                    <div className="im-table-row">
                      <div className="im-table-col">Serviços Prestados</div>
                      <div className="im-table-col">R$ 1.000,00</div>
                    </div>
                    <div className="im-table-row">
                      <div className="im-table-col">Impostos</div>
                      <div className="im-table-col">R$ 150,00</div>
                    </div>
                    <div className="im-table-row im-table-total">
                      <div className="im-table-col">TOTAL</div>
                      <div className="im-table-col">R$ 1.150,00</div>
                    </div>
                  </div>

                  <div className="im-doc-section">
                    <div className="im-barcode-area">
                      <p className="im-barcode-image">
                        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                      </p>
                      <p className="im-barcode-number">75691.32637 01326 07035 506062 0200623 6 10280000038700</p>
                    </div>
                  </div>

                  <div className="im-doc-footer">
                    <p><strong>Autenticação Mecânica</strong></p>
                    <p>PÁGINA DE COMPENSAÇÃO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="im-bottom-nav">
        <button className="im-nav-btn" onClick={handlePrevPage} disabled={currentPage === 1}>‹</button>
        <button className="im-nav-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>›</button>
      </div>
    </div>
  );
};

export default ImpressaoModal;
