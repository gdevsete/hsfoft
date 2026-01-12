import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, title, message, itemInfo, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onCancel} aria-label="Fechar">
            ×
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-message">{message}</p>
          <p className="modal-spacer">&nbsp;</p>
          {itemInfo && (
            <p className="modal-item-info">{itemInfo}</p>
          )}
        </div>

        <div className="modal-footer">
          <button className="modal-btn modal-btn-secondary" onClick={onCancel}>
            <span>Fechar</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </button>
          <button className="modal-btn modal-btn-primary" onClick={onConfirm}>
            <span>OK</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
