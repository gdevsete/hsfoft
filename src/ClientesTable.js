import React, { useState } from 'react';
import { clientesData } from './clientesData';
import './ClientesTable.css';
import editIcon from './icons/edit.svg';
import visibilityIcon from './icons/visibility.svg';
import hoverIcon from './icons/hover-icon-color-4.svg';
import ConfirmModal from './ConfirmModal';
import Toast from './Toast';

const ClientesTable = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [clients, setClients] = useState(clientesData);
  const [removingClientIndex, setRemovingClientIndex] = useState(null);

  const handleDeleteClick = (cliente) => {
    setSelectedClient(cliente);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // Encontrar o índice do cliente selecionado
    const clientIndex = clients.findIndex(c => c.codigo === selectedClient.codigo);
    if (clientIndex !== -1) {
      setRemovingClientIndex(clientIndex);
    }
    
    console.log('Deletando cliente:', selectedClient);
    setShowDeleteModal(false);
    setShowSuccessToast(true);
    
    // Remover o cliente após a animação (300ms)
    setTimeout(() => {
      setClients(clients.filter((_, idx) => idx !== clientIndex));
      setRemovingClientIndex(null);
    }, 300);
    
    setSelectedClient(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedClient(null);
  };

  const handleCloseToast = () => {
    setShowSuccessToast(false);
  };

  return (
    <>
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Desativar Cadastro"
        message="Deseja desativar o cadastro abaixo?"
        itemInfo={selectedClient ? `${selectedClient.codigo} - ${selectedClient.razaoSocial} - ${selectedClient.documento}` : ''}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      <Toast
        isVisible={showSuccessToast}
        message="Cliente desativado com sucesso!"
        duration={3000}
        onClose={handleCloseToast}
      />
      <div className="table-wrapper">
      <div className="table-header">
        <div className="header-cell" style={{flex: 1}}>
          <div className="header-text">Razão Social / Código</div>
        </div>
        <div className="header-cell" style={{flex: 1}}>
          <div className="header-text">Nome Fantasia / CPF ou CNPJ</div>
        </div>
        <div className="header-cell" style={{flex: 320}}>
          <div className="header-text">Cidade / Estado</div>
        </div>
        <div className="header-cell" style={{flex: 320}}>
          <div className="header-text">Telefone / E-mail</div>
        </div>
      </div>

      <div className="table-body">
        {clients.map((cliente, index) => (
          <div 
            key={index} 
            className={`table-row ${removingClientIndex === index ? 'removing' : ''}`}
            onMouseEnter={() => setHoveredCell(`${index}-3`)}
            onMouseLeave={() => setHoveredCell(null)}
          >
            <div 
              className="table-cell-double" 
              style={{flex: 1, position: 'relative'}}
            >
              <div className="cell-text-primary">{cliente.razaoSocial}</div>
              <div className="cell-text-secondary">{cliente.codigo}</div>
            </div>
            <div 
              className="table-cell-double" 
              style={{flex: 1, position: 'relative'}}
            >
              <div className="cell-text-primary">{cliente.nomeFantasia || ''}</div>
              <div className="cell-text-secondary">{cliente.documento}</div>
            </div>
            <div 
              className="table-cell-single" 
            >
              <div className="cell-text-primary">{cliente.cidade}</div>
              <div className="cell-text-secondary">{cliente.estado}</div>
            </div>
            <div 
              className="table-cell-single" 
            >
              <div className="cell-text-primary">{cliente.telefone}</div>
              <div className="cell-text-secondary-email">{cliente.email}</div>
              {hoveredCell === `${index}-3` && (
                <div className="cell-hover-icons">
                  <div className="cell-hover-content">
                    <div className="icon-wrapper">
                      <div className="icon-inner">
                        <img src={visibilityIcon} alt="View" />
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-inner">
                        <img src={editIcon} alt="Edit" />
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-inner">
                        <img src={hoverIcon} alt="Delete" onClick={() => handleDeleteClick(cliente)} style={{cursor: 'pointer'}} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ClientesTable;
