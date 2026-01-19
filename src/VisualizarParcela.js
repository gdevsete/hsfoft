import React from 'react';
import './VisualizarParcela.css';
import orcamentoIcon from './icons/icons-contas-a-receber/note-alt.svg';
import receiptIcon from './icons/icons-contas-a-receber/receipt-long.svg';
import docsIcon from './icons/icons-contas-a-receber/docs.svg';
import attachIcon from './icons/icons-contas-a-receber/attach-file.svg';
import tableHoverOptionsIcon from './icons/icons-contas-a-receber/table-hover-options.svg';
import fileCopyIcon from './icons/icons-contas-a-receber/file-copy.svg';
import tableHoverShareIcon from './icons/icons-contas-a-receber/table-hover-share.svg';
import tableHoverOptionsCopyIcon from './icons/icons-contas-a-receber/table-hover-options copy.svg';

const VisualizarParcela = ({ isOpen, onClose, parcelaData }) => {
  const [selectedEmpresas, setSelectedEmpresas] = React.useState({
    todas: true,
    empresa1: false,
    empresa2: false,
    empresa3: false
  });

  if (!isOpen || !parcelaData) return null;

  const {
    cliente = '1652 - WEB PALMAS PAPELARIA E INFORMATICA - 10.552.934/0001-90',
    vendedor = '3 - JOAO SILVA MEIDEIRO - 325.878.002-77',
    pedido = '12345678',
    dataVenda = '10/10/2010',
    parcelas = [
      {
        par: '01/05',
        vencimento: '05/08/2022',
        valor: 'R$ 521,32',
        dias: '10',
        multa: 'R$ 1,21',
        juros: 'R$ 2,54',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 521,32',
        dataPagamento: '10/08/2022',
        tipo: 'boleto'
      },
      {
        par: '02/05',
        vencimento: '05/09/2022',
        valor: 'R$ 1.220,00',
        dias: '15',
        multa: 'R$ 2,10',
        juros: 'R$ 3,80',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.220,00',
        dataPagamento: '15/09/2022',
        tipo: 'boleto'
      },
      {
        par: '03/05',
        vencimento: '05/10/2022',
        valor: 'R$ 1.430,00',
        dias: '-31',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.430,00',
        dataPagamento: '05/12/2022',
        tipo: 'boleto'
      },
      {
        par: '04/05',
        vencimento: '05/11/2022',
        valor: 'R$ 1.220,00',
        dias: '-34',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.220,00',
        dataPagamento: '10/12/2022',
        tipo: 'boleto'
      },
      {
        par: '05/05',
        vencimento: '05/12/2022',
        valor: 'R$ 1.065,90',
        dias: '30',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '06/35',
        vencimento: '10/01/2023',
        valor: 'R$ 850,50',
        dias: '45',
        multa: 'R$ 5,20',
        juros: 'R$ 8,90',
        desconto: 'R$ 50,00',
        valorPago: 'R$ 850,50',
        dataPagamento: '15/01/2023',
        tipo: 'transferencia'
      },
      {
        par: '07/35',
        vencimento: '15/01/2023',
        valor: 'R$ 920,75',
        dias: '50',
        multa: 'R$ 6,10',
        juros: 'R$ 9,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 920,75',
        dataPagamento: '20/01/2023',
        tipo: 'boleto'
      },
      {
        par: '08/35',
        vencimento: '20/01/2023',
        valor: 'R$ 1.150,25',
        dias: '55',
        multa: 'R$ 8,75',
        juros: 'R$ 12,30',
        desconto: 'R$ 100,00',
        valorPago: 'R$ 1.150,25',
        dataPagamento: '25/01/2023',
        tipo: 'cheque'
      },
      {
        par: '09/35',
        vencimento: '25/01/2023',
        valor: 'R$ 750,00',
        dias: '-5',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 750,00',
        dataPagamento: '30/01/2023',
        tipo: 'boleto'
      },
      {
        par: '10/35',
        vencimento: '01/02/2023',
        valor: 'R$ 1.300,50',
        dias: '-10',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.300,50',
        dataPagamento: '05/02/2023',
        tipo: 'transferencia'
      },
      {
        par: '11/35',
        vencimento: '05/02/2023',
        valor: 'R$ 680,25',
        dias: '20',
        multa: 'R$ 3,45',
        juros: 'R$ 5,80',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 680,25',
        dataPagamento: '10/02/2023',
        tipo: 'boleto'
      },
      {
        par: '12/35',
        vencimento: '10/02/2023',
        valor: 'R$ 990,75',
        dias: '25',
        multa: 'R$ 5,15',
        juros: 'R$ 8,20',
        desconto: 'R$ 25,00',
        valorPago: 'R$ 990,75',
        dataPagamento: '15/02/2023',
        tipo: 'cheque'
      },
      {
        par: '13/35',
        vencimento: '15/02/2023',
        valor: 'R$ 1.100,00',
        dias: '30',
        multa: 'R$ 7,25',
        juros: 'R$ 11,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.100,00',
        dataPagamento: '20/02/2023',
        tipo: 'boleto'
      },
      {
        par: '14/35',
        vencimento: '20/02/2023',
        valor: 'R$ 850,00',
        dias: '0',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '15/35',
        vencimento: '25/02/2023',
        valor: 'R$ 1.250,50',
        dias: '5',
        multa: 'R$ 0,85',
        juros: 'R$ 1,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '16/35',
        vencimento: '01/03/2023',
        valor: 'R$ 920,25',
        dias: '10',
        multa: 'R$ 2,10',
        juros: 'R$ 3,95',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 920,25',
        dataPagamento: '05/03/2023',
        tipo: 'transferencia'
      },
      {
        par: '17/35',
        vencimento: '05/03/2023',
        valor: 'R$ 1.080,75',
        dias: '15',
        multa: 'R$ 4,25',
        juros: 'R$ 7,10',
        desconto: 'R$ 50,00',
        valorPago: 'R$ 1.080,75',
        dataPagamento: '10/03/2023',
        tipo: 'boleto'
      },
      {
        par: '18/35',
        vencimento: '10/03/2023',
        valor: 'R$ 750,50',
        dias: '20',
        multa: 'R$ 5,75',
        juros: 'R$ 9,20',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 750,50',
        dataPagamento: '15/03/2023',
        tipo: 'cheque'
      },
      {
        par: '19/35',
        vencimento: '15/03/2023',
        valor: 'R$ 1.350,00',
        dias: '25',
        multa: 'R$ 8,90',
        juros: 'R$ 14,20',
        desconto: 'R$ 100,00',
        valorPago: 'R$ 1.350,00',
        dataPagamento: '20/03/2023',
        tipo: 'boleto'
      },
      {
        par: '20/35',
        vencimento: '20/03/2023',
        valor: 'R$ 680,00',
        dias: '-15',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 680,00',
        dataPagamento: '25/03/2023',
        tipo: 'transferencia'
      },
      {
        par: '21/35',
        vencimento: '25/03/2023',
        valor: 'R$ 1.100,25',
        dias: '-10',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.100,25',
        dataPagamento: '30/03/2023',
        tipo: 'boleto'
      },
      {
        par: '22/35',
        vencimento: '01/04/2023',
        valor: 'R$ 950,75',
        dias: '5',
        multa: 'R$ 1,25',
        juros: 'R$ 2,85',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 950,75',
        dataPagamento: '05/04/2023',
        tipo: 'cheque'
      },
      {
        par: '23/35',
        vencimento: '05/04/2023',
        valor: 'R$ 820,50',
        dias: '10',
        multa: 'R$ 3,50',
        juros: 'R$ 6,25',
        desconto: 'R$ 25,00',
        valorPago: 'R$ 820,50',
        dataPagamento: '10/04/2023',
        tipo: 'transferencia'
      },
      {
        par: '24/35',
        vencimento: '10/04/2023',
        valor: 'R$ 1.200,00',
        dias: '15',
        multa: 'R$ 5,80',
        juros: 'R$ 10,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.200,00',
        dataPagamento: '15/04/2023',
        tipo: 'boleto'
      },
      {
        par: '25/35',
        vencimento: '15/04/2023',
        valor: 'R$ 760,25',
        dias: '20',
        multa: 'R$ 6,95',
        juros: 'R$ 11,80',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 760,25',
        dataPagamento: '20/04/2023',
        tipo: 'boleto'
      },
      {
        par: '26/35',
        vencimento: '20/04/2023',
        valor: 'R$ 1.080,00',
        dias: '0',
        multa: 'R$ 0,00',
        juros: 'R$ 0,00',
        desconto: 'R$ 50,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '27/35',
        vencimento: '25/04/2023',
        valor: 'R$ 920,50',
        dias: '5',
        multa: 'R$ 0,95',
        juros: 'R$ 1,75',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '28/35',
        vencimento: '01/05/2023',
        valor: 'R$ 1.350,75',
        dias: '10',
        multa: 'R$ 3,25',
        juros: 'R$ 6,85',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 1.350,75',
        dataPagamento: '05/05/2023',
        tipo: 'transferencia'
      },
      {
        par: '29/35',
        vencimento: '05/05/2023',
        valor: 'R$ 680,00',
        dias: '15',
        multa: 'R$ 5,10',
        juros: 'R$ 8,95',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 680,00',
        dataPagamento: '10/05/2023',
        tipo: 'cheque'
      },
      {
        par: '30/35',
        vencimento: '10/05/2023',
        valor: 'R$ 1.100,25',
        dias: '20',
        multa: 'R$ 7,45',
        juros: 'R$ 12,50',
        desconto: 'R$ 75,00',
        valorPago: 'R$ 1.100,25',
        dataPagamento: '15/05/2023',
        tipo: 'boleto'
      },
      {
        par: '31/35',
        vencimento: '15/05/2023',
        valor: 'R$ 950,00',
        dias: '25',
        multa: 'R$ 8,75',
        juros: 'R$ 14,80',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 950,00',
        dataPagamento: '20/05/2023',
        tipo: 'transferencia'
      },
      {
        par: '32/35',
        vencimento: '20/05/2023',
        valor: 'R$ 820,50',
        dias: '30',
        multa: 'R$ 9,20',
        juros: 'R$ 15,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '33/35',
        vencimento: '25/05/2023',
        valor: 'R$ 1.250,00',
        dias: '35',
        multa: 'R$ 12,50',
        juros: 'R$ 20,75',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '34/35',
        vencimento: '01/06/2023',
        valor: 'R$ 750,25',
        dias: '40',
        multa: 'R$ 10,85',
        juros: 'R$ 18,50',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      },
      {
        par: '35/35',
        vencimento: '05/06/2023',
        valor: 'R$ 1.100,00',
        dias: '45',
        multa: 'R$ 14,25',
        juros: 'R$ 22,90',
        desconto: 'R$ 0,00',
        valorPago: 'R$ 0,00',
        dataPagamento: '-',
        tipo: '-'
      }
    ]
  } = parcelaData;

  return (
    <div className="vp-modal-overlay" onClick={onClose}>
      <div className="vp-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="vp-header">
          <h2 className="vp-title">Visualizar Parcela</h2>
          <button className="vp-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 7L17 17M7 17L17 7" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Empresas Section */}
        <div className="vp-empresas-section">
          <div className="vp-empresas-header">
            <div className="vp-empresas-header-cell vp-checkbox-col"></div>
            <div className="vp-empresas-header-cell">Empresas</div>
            <div className="vp-empresas-header-cell">Nota Fiscal</div>
            <div className="vp-empresas-header-cell">Condição</div>
            <div className="vp-empresas-header-cell">Total</div>
          </div>

          <div className="vp-empresas-row">
            <div className="vp-empresas-cell vp-checkbox-col">
              <input 
                type="checkbox" 
                checked={selectedEmpresas.todas}
                onChange={(e) => setSelectedEmpresas({todas: e.target.checked, empresa1: e.target.checked, empresa2: e.target.checked, empresa3: e.target.checked})}
                className="vp-checkbox"
              />
            </div>
            <div className="vp-empresas-cell">0 - TODAS AS EMPRESAS</div>
            <div className="vp-empresas-cell"></div>
            <div className="vp-empresas-cell"></div>
            <div className="vp-empresas-cell">161.267,41</div>
          </div>

          <div className="vp-empresas-row">
            <div className="vp-empresas-cell vp-checkbox-col">
              <input 
                type="checkbox" 
                checked={selectedEmpresas.empresa1}
                onChange={(e) => setSelectedEmpresas({...selectedEmpresas, empresa1: e.target.checked})}
                className="vp-checkbox"
              />
            </div>
            <div className="vp-empresas-cell">1 - SOLUCAO TI COMERCIO DE EQUIPAMENTO DE INFORMATICA - 11.882.936/0001-00</div>
            <div className="vp-empresas-cell">78.102</div>
            <div className="vp-empresas-cell">4 x</div>
            <div className="vp-empresas-cell">161.267,41</div>
          </div>

          <div className="vp-empresas-row">
            <div className="vp-empresas-cell vp-checkbox-col">
              <input 
                type="checkbox" 
                checked={selectedEmpresas.empresa2}
                onChange={(e) => setSelectedEmpresas({...selectedEmpresas, empresa2: e.target.checked})}
                className="vp-checkbox"
              />
            </div>
            <div className="vp-empresas-cell">2 - SOLUCAO TI ASSISTENCIA TECNICA EM INFORMATICA LTDA - 11.882.936/0001-00</div>
            <div className="vp-empresas-cell">25.200</div>
            <div className="vp-empresas-cell">4 x</div>
            <div className="vp-empresas-cell">161.267,41</div>
          </div>

          <div className="vp-empresas-row">
            <div className="vp-empresas-cell vp-checkbox-col">
              <input 
                type="checkbox" 
                checked={selectedEmpresas.empresa3}
                onChange={(e) => setSelectedEmpresas({...selectedEmpresas, empresa3: e.target.checked})}
                className="vp-checkbox"
              />
            </div>
            <div className="vp-empresas-cell">3 - SONHO MEU COMERCIO DE CALCADOS E DERIVADOS - 11.882.936/0001-00</div>
            <div className="vp-empresas-cell">90.358</div>
            <div className="vp-empresas-cell">4 x</div>
            <div className="vp-empresas-cell">161.267,41</div>
          </div>
        </div>

        {/* Details Section - Simplified */}
        <div className="vp-details-section-simple">
          <div className="vp-detail-item">
            <label className="vp-detail-label">Cliente:</label>
            <p className="vp-detail-value">{cliente}</p>
          </div>
          <div className="vp-detail-item">
            <label className="vp-detail-label">Vendedor</label>
            <p className="vp-detail-value">{vendedor}</p>
          </div>
          <div className="vp-detail-item">
            <label className="vp-detail-label">Pedido</label>
            <div className="vp-pedido-container">
              <p className="vp-detail-value">{pedido}</p>
              <button className="vp-search-btn" title="Buscar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="vp-detail-item">
            <label className="vp-detail-label">Data Venda</label>
            <p className="vp-detail-value">{dataVenda}</p>
          </div>
          <button className="vp-anexos-btn">
            <img src={attachIcon} alt="Anexos" />
            <span>Anexos</span>
          </button>
        </div>

        {/* Main Parcelas Table */}
        <div className="vp-parcelas-table-wrapper">
          <div className="vp-parcelas-header">
            <div className="vp-parcelas-header-cell">Emp</div>
            <div className="vp-parcelas-header-cell">Par</div>
            <div className="vp-parcelas-header-cell">Vencimento</div>
            <div className="vp-parcelas-header-cell">Valor</div>
            <div className="vp-parcelas-header-cell">Dias</div>
            <div className="vp-parcelas-header-cell">Multa</div>
            <div className="vp-parcelas-header-cell">Juros</div>
            <div className="vp-parcelas-header-cell">Desconto</div>
            <div className="vp-parcelas-header-cell">Valor Pago</div>
            <div className="vp-parcelas-header-cell">Data Pagamento</div>
            <div className="vp-parcelas-header-cell">Tipo</div>
          </div>

          <div className="vp-parcelas-body">
            {parcelas.map((parcela, index) => (
              <div key={index} className="vp-parcelas-row">
                <div className="vp-parcelas-cell">1</div>
                <div className="vp-parcelas-cell">{parcela.par}</div>
                <div className="vp-parcelas-cell">{parcela.vencimento}</div>
                <div className="vp-parcelas-cell">{parcela.valor}</div>
                <div className="vp-parcelas-cell">{parcela.dias}</div>
                <div className="vp-parcelas-cell">{parcela.multa}</div>
                <div className="vp-parcelas-cell">{parcela.juros}</div>
                <div className="vp-parcelas-cell">{parcela.desconto}</div>
                <div className="vp-parcelas-cell">{parcela.valorPago}</div>
                <div className="vp-parcelas-cell">{parcela.dataPagamento}</div>
                <div className="vp-parcelas-cell">{parcela.tipo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="vp-footer">
          <button className="vp-action-btn">
            <img src={orcamentoIcon} alt="Orçamento" />
            Orçamento
          </button>
          <button className="vp-action-btn">
            <img src={receiptIcon} alt="Pedido" />
            Pedido
          </button>
          <button className="vp-action-btn">
            <img src={docsIcon} alt="Nota" />
            Nota
          </button>
          <button className="vp-action-btn">
            <img src={attachIcon} alt="Anexos" />
            Anexos
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualizarParcela;
