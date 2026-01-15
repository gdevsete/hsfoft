import React, { useState } from 'react';
import './ContasAReceber.css';
import addBoxIcon from './icons/icons-contas-a-receber/add-box.svg';
import calendarExclamationIcon from './icons/icons-contas-a-receber/caledar-exclamation--custom.svg';
import calendarXIcon from './icons/icons-contas-a-receber/caledar-x.svg';
import calendarIcon from './icons/icons-contas-a-receber/icon-section.svg';
import cashRegisterIcon from './icons/icons-contas-a-receber/cash-register.svg';
import checkSquareIcon from './icons/icons-contas-a-receber/check-square.svg';
import checkIcon from './icons/icons-contas-a-receber/check.svg';
import currencyDollarIcon from './icons/icons-contas-a-receber/currency-circle-dollar.svg';
import printIcon from './icons/icons-contas-a-receber/print.svg';
import shareIcon from './icons/icons-contas-a-receber/share.svg';
import trashIcon from './icons/icons-contas-a-receber/trash.svg';
import fileCopyIcon from './icons/icons-contas-a-receber/file-copy.svg';
import tableHoverShareIcon from './icons/icons-contas-a-receber/table-hover-share.svg';
import tableHoverOptionsIcon from './icons/icons-contas-a-receber/table-hover-options.svg';
import tableHoverOptionsCopyIcon from './icons/icons-contas-a-receber/table-hover-options copy.svg';

const ContasAReceber = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [filters, setFilters] = useState({
    cliente: '2033 - NEXTGEN SYSTEMS BRASIL LTDA - 789.654.321/0001-88',
    periodo: '31/12/2010 até 31/10/2020',
    tipoData: 'VENCIMENTO',
    empresa: '1 - PALMAS TEC DISTRIBUIDORA EIRELI - ME - 78.654.201/0001-90',
    notaFiscal: '70401-5',
    duplicata: '4',
    pedido: '890999',
    orcamento: '1090752',
    vendedor: '18 - CECÍLIA MEIRELES - 788.320.567-03',
    situacao: 'Abertas',
  });

  const [totals, setTotals] = useState({
    selecionados: 'R$ 123,45',
    vencidos: 'R$ 123,45',
    aVencer: 'R$ 123,45',
    capital: 'R$ 123,45',
  });

  const [tableData] = useState([
    {
      id: '801',
      status: 'vencido',
      cliente: '801 - BYTE SYSTEMS INOVAÇÃO TECNOLÓGICA ME - 998.123.555/000',
      emp: '1',
      pedido: '70401-5',
      nota: '10/12',
      par: '01/05',
      vencimento: '01/02/2025',
      valor: '1.220,00',
      dias: '4',
      multa: '26,00',
      juros: '25,40',
      total: '1.282,00',
    },
    {
      id: '2802',
      status: 'vencido',
      cliente: '2802 - TECHLAB SOFTWARE E SERVIÇOS LTDA - 852.147.369/0001-90',
      emp: '4',
      pedido: '893452',
      nota: '70533-4',
      par: '02/26',
      vencimento: '10/02/2010',
      valor: '1.540,00',
      dias: '4',
      multa: '46,20',
      juros: '35,80',
      total: '1.622,00',
    },
    {
      id: '3',
      status: 'avencer',
      cliente: '3 - DATACORE SISTEMAS INTEGRADOS EIRELI - 963.258.741/0001-29',
      emp: '6',
      pedido: '894010',
      nota: '70562-5',
      par: '05/10',
      vencimento: '16/12/2025',
      valor: '1.310,00',
      dias: '0',
      multa: '0,00',
      juros: '0,00',
      total: '1.310,00',
    },
    {
      id: '477',
      status: 'normal',
      cliente: '477 - BLUE TECH COMPUTADORES LTDA - 741.369.258/0001-11',
      emp: '7',
      pedido: '895111',
      nota: '70572-1',
      par: '07/12',
      vencimento: '20/12/2025',
      valor: '860,00',
      dias: '-4',
      multa: '0,00',
      juros: '0,00',
      total: '860,00',
    },
    {
      id: '658',
      status: 'normal',
      cliente: '658 - ALPHA COMÉRCIO DE HARDWARE EIRELI - 329.741.852/0001-10',
      emp: '8',
      pedido: '893001',
      nota: '70512-3',
      par: '08/10',
      vencimento: '22/12/2025',
      valor: '2.340,00',
      dias: '-6',
      multa: '0,00',
      juros: '0,00',
      total: '2.340,00',
    },
    {
      id: '162',
      status: 'normal',
      cliente: '162 - CLOUDLINE SOLUÇÕES EM TI LTDA - 357.951.456/0001-12',
      emp: '9',
      pedido: '890765',
      nota: '70398-1',
      par: '06/12',
      vencimento: '23/12/2025',
      valor: '2.180,00',
      dias: '-7',
      multa: '0,00',
      juros: '0,00',
      total: '2.180,00',
    },
    {
      id: '53',
      status: 'normal',
      cliente: '53 - SOLUÇÃO TI ASSIST. TEC. E INFORMÁTICA LTDA - 123.123.123/000',
      emp: '4',
      pedido: '891350',
      nota: '70428-1',
      par: '10/12',
      vencimento: '04/01/2026',
      valor: '1.160,00',
      dias: '-20',
      multa: '0,00',
      juros: '0,00',
      total: '1.160,00',
    },
    {
      id: '1800',
      status: 'normal',
      cliente: '1800 - MEGABYTE SUPRIMENTOS DE INFORMÁTICA LTDA - 741.258.96',
      emp: '10',
      pedido: '892875',
      nota: '70500-1',
      par: '09/10',
      vencimento: '05/01/2026',
      valor: '890,00',
      dias: '-21',
      multa: '0,00',
      juros: '0,00',
      total: '890,00',
    },
    {
      id: '307',
      status: 'normal',
      cliente: '307 - SKYNET NETWORK SOLUTIONS S/A - 112.334.556/0001-77',
      emp: '3',
      pedido: '894125',
      nota: '70588-1',
      par: '03/12',
      vencimento: '08/01/2026',
      valor: '1.780,00',
      dias: '-24',
      multa: '0,00',
      juros: '0,00',
      total: '1.780,00',
    },
    {
      id: '1015',
      status: 'normal',
      cliente: '1015 - NOVA ERA SERVIÇOS DIGITAIS LTDA - 456.987.321/0001-45',
      emp: '1',
      pedido: '892412',
      nota: '70455-2',
      par: '03/10',
      vencimento: '12/01/2026',
      valor: '980,50',
      dias: '-28',
      multa: '0,00',
      juros: '0,00',
      total: '980,50',
    },
    {
      id: '2033',
      status: 'normal',
      cliente: '2033 - NEXTGEN SYSTEMS BRASIL LTDA - 789.654.321/0001-88',
      emp: '5',
      pedido: '894312',
      nota: '70600-2',
      par: '05/12',
      vencimento: '15/01/2026',
      valor: '1.430,00',
      dias: '-31',
      multa: '0,00',
      juros: '0,00',
      total: '1.430,00',
    },
    {
      id: '19',
      status: 'normal',
      cliente: '19 - PIXEL STORE BRASIL LTDA - 444.555.666/0001-44',
      emp: '7',
      pedido: '892120',
      nota: '70445-2',
      par: '01/08',
      vencimento: '18/01/2026',
      valor: '1.220,00',
      dias: '-34',
      multa: '0,00',
      juros: '0,00',
      total: '1.220,00',
    },
    {
      id: '20',
      status: 'avencer',
      cliente: '456 - TECH INNOVATIONS LTDA - 555.666.777/0001-99',
      emp: '2',
      pedido: '895500',
      nota: '70650-1',
      par: '01/15',
      vencimento: '25/01/2026',
      valor: '2.500,00',
      dias: '-15',
      multa: '0,00',
      juros: '0,00',
      total: '2.500,00',
    },
    {
      id: '21',
      status: 'vencido',
      cliente: '789 - DIGITAL PLUS S/A - 666.777.888/0001-55',
      emp: '3',
      pedido: '894800',
      nota: '70700-5',
      par: '02/10',
      vencimento: '10/01/2026',
      valor: '1.850,00',
      dias: '3',
      multa: '55,50',
      juros: '42,35',
      total: '1.947,85',
    },
    {
      id: '22',
      status: 'normal',
      cliente: '234 - SMART SYSTEMS BRASIL EIRELI - 777.888.999/0001-11',
      emp: '6',
      pedido: '893250',
      nota: '70750-9',
      par: '03/12',
      vencimento: '02/02/2026',
      valor: '3.100,00',
      dias: '-25',
      multa: '0,00',
      juros: '0,00',
      total: '3.100,00',
    },
    {
      id: '23',
      status: 'avencer',
      cliente: '567 - WEB SOLUTIONS LTDA - 888.999.000/0001-77',
      emp: '1',
      pedido: '892950',
      nota: '70800-2',
      par: '04/08',
      vencimento: '28/01/2026',
      valor: '1.650,00',
      dias: '-8',
      multa: '0,00',
      juros: '0,00',
      total: '1.650,00',
    },
    {
      id: '24',
      status: 'vencido',
      cliente: '890 - CLOUD SERVICES BRASIL - 999.000.111/0001-33',
      emp: '5',
      pedido: '895100',
      nota: '70850-6',
      par: '05/10',
      vencimento: '08/01/2026',
      valor: '2.200,00',
      dias: '5',
      multa: '66,00',
      juros: '50,60',
      total: '2.316,60',
    },
    {
      id: '25',
      status: 'normal',
      cliente: '123 - ENTERPRISE DATA LTDA - 111.222.333/0001-88',
      emp: '4',
      pedido: '893600',
      nota: '70900-0',
      par: '06/12',
      vencimento: '05/02/2026',
      valor: '4.500,00',
      dias: '-30',
      multa: '0,00',
      juros: '0,00',
      total: '4.500,00',
    },
    {
      id: '26',
      status: 'avencer',
      cliente: '345 - MOBILE TECH S/A - 222.333.444/0001-44',
      emp: '2',
      pedido: '894500',
      nota: '70950-4',
      par: '07/10',
      vencimento: '20/01/2026',
      valor: '1.450,00',
      dias: '-3',
      multa: '0,00',
      juros: '0,00',
      total: '1.450,00',
    },
    {
      id: '27',
      status: 'normal',
      cliente: '678 - INFRASTRUCTURE SOLUTIONS - 333.444.555/0001-00',
      emp: '3',
      pedido: '892500',
      nota: '71000-8',
      par: '08/15',
      vencimento: '10/02/2026',
      valor: '5.800,00',
      dias: '-35',
      multa: '0,00',
      juros: '0,00',
      total: '5.800,00',
    },
    {
      id: '28',
      status: 'vencido',
      cliente: '912 - CYBER SECURITY INC - 444.555.666/0001-66',
      emp: '6',
      pedido: '895300',
      nota: '71050-1',
      par: '09/12',
      vencimento: '15/01/2026',
      valor: '2.950,00',
      dias: '8',
      multa: '88,50',
      juros: '67,88',
      total: '3.106,38',
    },
    {
      id: '29',
      status: 'normal',
      cliente: '445 - AUTOMATION LABS LTDA - 555.666.777/0001-22',
      emp: '1',
      pedido: '893400',
      nota: '71100-5',
      par: '10/10',
      vencimento: '08/02/2026',
      valor: '1.900,00',
      dias: '-28',
      multa: '0,00',
      juros: '0,00',
      total: '1.900,00',
    },
    {
      id: '30',
      status: 'avencer',
      cliente: '778 - NETWORK GLOBAL S/A - 666.777.888/0001-99',
      emp: '4',
      pedido: '894100',
      nota: '71150-9',
      par: '11/08',
      vencimento: '22/01/2026',
      valor: '3.200,00',
      dias: '-10',
      multa: '0,00',
      juros: '0,00',
      total: '3.200,00',
    },
    {
      id: '31',
      status: 'vencido',
      cliente: '223 - DATABASE SOLUTIONS - 777.888.999/0001-55',
      emp: '2',
      pedido: '892700',
      nota: '71200-2',
      par: '12/15',
      vencimento: '20/01/2026',
      valor: '2.650,00',
      dias: '1',
      multa: '79,50',
      juros: '61,00',
      total: '2.790,50',
    },
    {
      id: '32',
      status: 'normal',
      cliente: '334 - SUPPORT SERVICES LTDA - 888.999.000/0001-11',
      emp: '5',
      pedido: '895200',
      nota: '71250-6',
      par: '13/12',
      vencimento: '12/02/2026',
      valor: '1.550,00',
      dias: '-32',
      multa: '0,00',
      juros: '0,00',
      total: '1.550,00',
    },
    {
      id: '33',
      status: 'avencer',
      cliente: '556 - INTEGRATION PLATFORM - 999.000.111/0001-77',
      emp: '3',
      pedido: '893800',
      nota: '71300-0',
      par: '14/10',
      vencimento: '26/01/2026',
      valor: '4.100,00',
      dias: '-12',
      multa: '0,00',
      juros: '0,00',
      total: '4.100,00',
    },
    {
      id: '34',
      status: 'normal',
      cliente: '667 - SECURITY PRODUCTS INC - 111.222.333/0001-33',
      emp: '6',
      pedido: '894700',
      nota: '71350-4',
      par: '15/15',
      vencimento: '15/02/2026',
      valor: '2.750,00',
      dias: '-37',
      multa: '0,00',
      juros: '0,00',
      total: '2.750,00',
    },
    {
      id: '35',
      status: 'vencido',
      cliente: '111 - CONSULTING GROUP LTDA - 222.333.444/0001-99',
      emp: '1',
      pedido: '892300',
      nota: '71400-8',
      par: '16/12',
      vencimento: '12/01/2026',
      valor: '3.400,00',
      dias: '6',
      multa: '102,00',
      juros: '78,40',
      total: '3.580,40',
    },
    {
      id: '36',
      status: 'normal',
      cliente: '222 - TECHNOLOGY PARTNERS - 333.444.555/0001-55',
      emp: '2',
      pedido: '895400',
      nota: '71450-1',
      par: '17/10',
      vencimento: '18/02/2026',
      valor: '1.980,00',
      dias: '-40',
      multa: '0,00',
      juros: '0,00',
      total: '1.980,00',
    },
    {
      id: '37',
      status: 'avencer',
      cliente: '333 - DIGITAL MARKETING PRO - 444.555.666/0001-11',
      emp: '4',
      pedido: '893200',
      nota: '71500-5',
      par: '18/15',
      vencimento: '24/01/2026',
      valor: '2.300,00',
      dias: '-6',
      multa: '0,00',
      juros: '0,00',
      total: '2.300,00',
    },
    {
      id: '38',
      status: 'vencido',
      cliente: '444 - ANALYTICS SOLUTIONS S/A - 555.666.777/0001-77',
      emp: '5',
      pedido: '894300',
      nota: '71550-9',
      par: '19/10',
      vencimento: '18/01/2026',
      valor: '1.750,00',
      dias: '2',
      multa: '52,50',
      juros: '40,25',
      total: '1.842,75',
    },
    {
      id: '39',
      status: 'normal',
      cliente: '555 - CONTENT MANAGEMENT LTDA - 666.777.888/0001-33',
      emp: '3',
      pedido: '892600',
      nota: '71600-2',
      par: '20/12',
      vencimento: '20/02/2026',
      valor: '2.100,00',
      dias: '-42',
      multa: '0,00',
      juros: '0,00',
      total: '2.100,00',
    },
    {
      id: '40',
      status: 'avencer',
      cliente: '666 - PAYMENT GATEWAY BRASIL - 777.888.999/0001-99',
      emp: '6',
      pedido: '895600',
      nota: '71650-6',
      par: '21/15',
      vencimento: '28/01/2026',
      valor: '3.600,00',
      dias: '-5',
      multa: '0,00',
      juros: '0,00',
      total: '3.600,00',
    },
    {
      id: '41',
      status: 'normal',
      cliente: '777 - LOGISTICS PROVIDER LTDA - 888.999.000/0001-55',
      emp: '1',
      pedido: '893100',
      nota: '71700-0',
      par: '22/10',
      vencimento: '22/02/2026',
      valor: '4.250,00',
      dias: '-45',
      multa: '0,00',
      juros: '0,00',
      total: '4.250,00',
    },
    {
      id: '42',
      status: 'vencido',
      cliente: '888 - ECOMMERCE PLATFORM - 999.000.111/0001-11',
      emp: '2',
      pedido: '894600',
      nota: '71750-4',
      par: '23/12',
      vencimento: '22/01/2026',
      valor: '2.890,00',
      dias: '4',
      multa: '86,70',
      juros: '66,54',
      total: '3.043,24',
    },
    {
      id: '43',
      status: 'normal',
      cliente: '999 - BUSINESS INTELLIGENCE - 111.222.333/0001-77',
      emp: '4',
      pedido: '892800',
      nota: '71800-8',
      par: '24/15',
      vencimento: '24/02/2026',
      valor: '1.620,00',
      dias: '-47',
      multa: '0,00',
      juros: '0,00',
      total: '1.620,00',
    },
    {
      id: '44',
      status: 'avencer',
      cliente: '101 - PERFORMANCE METRICS S/A - 222.333.444/0001-33',
      emp: '5',
      pedido: '895700',
      nota: '71850-1',
      par: '25/10',
      vencimento: '30/01/2026',
      valor: '2.750,00',
      dias: '-2',
      multa: '0,00',
      juros: '0,00',
      total: '2.750,00',
    },
    {
      id: '45',
      status: 'vencido',
      cliente: '202 - QUALITY ASSURANCE LTDA - 333.444.555/0001-99',
      emp: '3',
      pedido: '893700',
      nota: '71900-5',
      par: '26/12',
      vencimento: '25/01/2026',
      valor: '1.890,00',
      dias: '7',
      multa: '56,70',
      juros: '43,47',
      total: '1.990,17',
    },
    {
      id: '46',
      status: 'normal',
      cliente: '303 - INNOVATION PARTNERS LTDA - 444.555.666/0001-55',
      emp: '6',
      pedido: '894900',
      nota: '71950-9',
      par: '27/15',
      vencimento: '26/02/2026',
      valor: '3.450,00',
      dias: '-50',
      multa: '0,00',
      juros: '0,00',
      total: '3.450,00',
    },
    {
      id: '47',
      status: 'avencer',
      cliente: '404 - CUSTOMER RELATIONS BRASIL - 555.666.777/0001-11',
      emp: '1',
      pedido: '892400',
      nota: '72000-2',
      par: '28/10',
      vencimento: '02/02/2026',
      valor: '2.180,00',
      dias: '-16',
      multa: '0,00',
      juros: '0,00',
      total: '2.180,00',
    },
    {
      id: '48',
      status: 'normal',
      cliente: '505 - RESOURCE MANAGEMENT LTDA - 666.777.888/0001-77',
      emp: '2',
      pedido: '895800',
      nota: '72050-6',
      par: '29/12',
      vencimento: '28/02/2026',
      valor: '1.740,00',
      dias: '-52',
      multa: '0,00',
      juros: '0,00',
      total: '1.740,00',
    },
    {
      id: '49',
      status: 'vencido',
      cliente: '610 - STRATEGIC PLANNING S/A - 777.888.999/0001-33',
      emp: '4',
      pedido: '893900',
      nota: '72100-0',
      par: '30/15',
      vencimento: '28/01/2026',
      valor: '3.100,00',
      dias: '9',
      multa: '93,00',
      juros: '71,30',
      total: '3.264,30',
    },
  ]);

  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === tableData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(tableData.map((row) => row.id)));
    }
  };

  // Função para reordenar dados por status (vencido > avencer > normal)
  const getOrderedTableData = () => {
    const statusOrder = { vencido: 0, avencer: 1, normal: 2 };
    return [...tableData].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  };

  // Função para extrair código do cliente
  const getClienteInfo = (clienteStr) => {
    const match = clienteStr.match(/^(\d+)\s*-\s*(.+?)\s*-\s*(.+)$/);
    if (match) {
      return { codigo: match[1], nome: match[2], cnpj: match[3] };
    }
    // Fallback se não encontrar padrão
    const parts = clienteStr.split(' - ');
    return { codigo: '', nome: parts[0] || '', cnpj: parts[1] || '' };
  };

  return (
    <div className="car-page">
      {/* Header com Título e Botões */}
      <div className="car-header-top">
        <div className="car-title">
          CONTAS A RECEBER
        </div>
        <div className="car-buttons-container">
          <button className="car-btn-action-text">
            <img src={addBoxIcon} alt="Incluir" />
            Incluir
          </button>
          <button className="car-btn-action-text">
            <img src={trashIcon} alt="Cancelar" />
            Cancelar
          </button>
          <button className="car-btn-action-text">
            <img src={checkIcon} alt="Baixar" />
            Baixar
          </button>
          <button className="car-btn-action-text">
            <img src={printIcon} alt="Imprimir" />
            Imprimir
          </button>
          <button className="car-btn-action-text">
            <img src={shareIcon} alt="Compartilhar" />
            Compartilhar
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="car-form-container">
        {/* Linha 1: Cliente, Período, Tipo Data */}
        <div className="car-form-row">
          <div className="car-field car-field-cliente">
             <div className="car-field car-field-cliente move-up-2"></div>
             <label className="car-label">Cliente</label>
              <div className="car-field-wrapper">
               <input
                type="text"
                className="car-input"
                value={filters.cliente}
                readOnly
              />
              <div className="car-field-icon car-arrow-icon"></div>
            </div>
          </div>
          <div className="car-field car-field-periodo">
            <label className="car-label">Período</label>
            <div className="car-field-wrapper">
              <input
                type="text"
                className="car-input"
                value={filters.periodo}
                readOnly
              />
              <img src={calendarIcon} alt="calendar" className="car-field-icon car-calendar-icon" />
            </div>
          </div>
          <div className="car-field car-field-tipo-data">
            <label className="car-label">Tipo Data</label>
            <div className="car-field-wrapper">
              <input
                type="text"
                className="car-input"
                value={filters.tipoData}
                readOnly
              />
              <div className="car-field-icon car-arrow-icon"></div>
            </div>
          </div>
        </div>

        {/* Linha 2: Empresa, Nota Fiscal, Duplicata, Pedido, Orçamento */}
        <div className="car-form-row">
          <div className="car-field car-field-empresa">
            <label className="car-label">Empresa</label>
            <div className="car-field-wrapper">
              <input
                type="text"
                className="car-input"
                value={filters.empresa}
                readOnly
              />
              <div className="car-field-icon car-arrow-icon"></div>
            </div>
          </div>
          <div className="car-field car-field-nota-fiscal">
            <label className="car-label">Nota Fiscal</label>
            <input
              type="text"
              className="car-input"
              value={filters.notaFiscal}
              readOnly
            />
          </div>
          <div className="car-field car-field-duplicata">
            <label className="car-label">Duplicata</label>
            <input
              type="text"
              className="car-input"
              value={filters.duplicata}
              readOnly
            />
          </div>
          <div className="car-field car-field-pedido">
            <label className="car-label">Pedido</label>
            <input
              type="text"
              className="car-input"
              value={filters.pedido}
              readOnly
            />
          </div>
          <div className="car-field car-field-orcamento">
            <label className="car-label">Orçamento</label>
            <input
              type="text"
              className="car-input"
              value={filters.orcamento}
              readOnly
            />
          </div>
        </div>

        {/* Linha 3: Vendedor, Situação */}
        <div className="car-form-row">
          <div className="car-field car-field-vendedor">
            <label className="car-label">Vendedor</label>
            <div className="car-field-wrapper">
              <input
                type="text"
                className="car-input"
                value={filters.vendedor}
                readOnly
              />
              <div className="car-field-icon car-arrow-icon"></div>
            </div>
          </div>
          <div className="car-field car-field-situacao">
            <label className="car-label">Situação</label>
            <div className="car-situacao-container">
              <div className="car-radio-group">
                <input
                  type="radio"
                  id="sit-abertas"
                  name="situacao"
                  value="abertas"
                  defaultChecked
                  className="car-radio-input"
                />
                <label htmlFor="sit-abertas" className="car-radio-label">
                  <div className="car-radio-circle"></div>
                  <span className="car-radio-text">Abertas</span>
                </label>
              </div>
              <div className="car-radio-group">
                <input
                  type="radio"
                  id="sit-baixadas"
                  name="situacao"
                  value="baixadas"
                  className="car-radio-input"
                />
                <label htmlFor="sit-baixadas" className="car-radio-label">
                  <div className="car-radio-circle"></div>
                  <span className="car-radio-text">Baixadas</span>
                </label>
              </div>
              <div className="car-radio-group">
                <input
                  type="radio"
                  id="sit-canceladas"
                  name="situacao"
                  value="canceladas"
                  className="car-radio-input"
                />
                <label htmlFor="sit-canceladas" className="car-radio-label">
                  <div className="car-radio-circle"></div>
                  <span className="car-radio-text">Canceladas</span>
                </label>
              </div>
              <div className="car-radio-group">
                <input
                  type="radio"
                  id="sit-todos"
                  name="situacao"
                  value="todos"
                  className="car-radio-input"
                />
                <label htmlFor="sit-todos" className="car-radio-label">
                  <div className="car-radio-circle"></div>
                  <span className="car-radio-text">Todos</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Totalizador */}
      <div className="car-totalizador">
        <div className="car-total-item">
          <div className="car-total-icon">
            <img src={checkSquareIcon} alt="Selecionados" />
          </div>
          <div className="car-total-text-wrapper">
            <span className="car-total-label">Selecionados</span>
            <span className="car-total-value">{totals.selecionados}</span>
          </div>
        </div>
        <div className="car-total-item">
          <div className="car-total-icon">
            <img src={calendarXIcon} alt="Vencidos" />
          </div>
          <div className="car-total-text-wrapper">
            <span className="car-total-label">Vencidos</span>
            <span className="car-total-value">{totals.vencidos}</span>
          </div>
        </div>
        <div className="car-total-item">
          <div className="car-total-icon">
            <img src={calendarExclamationIcon} alt="A vencer" />
          </div>
          <div className="car-total-text-wrapper">
            <span className="car-total-label">A vencer</span>
            <span className="car-total-value">{totals.aVencer}</span>
          </div>
        </div>
        <div className="car-total-item">
          <div className="car-total-icon">
            <img src={currencyDollarIcon} alt="Capital" />
          </div>
          <div className="car-total-text-wrapper">
            <span className="car-total-label">Capital</span>
            <span className="car-total-value">{totals.capital}</span>
          </div>
        </div>
        <div className="car-total-item">
          <div className="car-total-icon">
            <img src={cashRegisterIcon} alt="Total" />
          </div>
          <div className="car-total-text-wrapper">
            <span className="car-total-label">Total</span>
            <span className="car-total-value">R$ 123,45</span>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="car-table-section">
        <div className="car-table-header">
          <div className="car-th car-th-checkbox">
            <input
              type="checkbox"
              className="car-checkbox"
              checked={selectedRows.size === tableData.length && tableData.length > 0}
              onChange={handleSelectAll}
            />
          </div>
          <div className="car-th car-th-cliente">Cliente</div>
          <div className="car-th car-th-emp">Emp</div>
          <div className="car-th car-th-pedido">Pedido</div>
          <div className="car-th car-th-nota">Nota</div>
          <div className="car-th car-th-par">Par</div>
          <div className="car-th car-th-vencimento">Vencimento</div>
          <div className="car-th car-th-valor">Valor</div>
          <div className="car-th car-th-dias">Dias</div>
          <div className="car-th car-th-multa">Multa</div>
          <div className="car-th car-th-juros">Juros</div>
          <div className="car-th car-th-total">Total</div>
        </div>
        <div className="car-table-body">
          {getOrderedTableData().map((row) => {
            const clienteInfo = getClienteInfo(row.cliente);
            return (
            <div key={row.id} className={`car-table-row car-row-${row.status}`}>
              <div className="car-td car-td-checkbox">
                <input
                  type="checkbox"
                  className="car-checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                />
              </div>
              <div className="car-td car-td-cliente">
                <span style={{ 
                  color: row.status === 'vencido' ? '#C10007' : row.status === 'avencer' ? '#A65F00' : '#404040'
                }}>{clienteInfo.codigo} - {clienteInfo.nome}</span>
              </div>
              <div className="car-td car-td-emp">{row.emp}</div>
              <div className="car-td car-td-pedido">{row.pedido}</div>
              <div className="car-td car-td-nota">{row.nota}</div>
              <div className="car-td car-td-par">{row.par}</div>
              <div className="car-td car-td-vencimento">{row.vencimento}</div>
              <div className="car-td car-td-valor">{row.valor}</div>
              <div className="car-td car-td-dias">{row.dias}</div>
              <div className="car-td car-td-multa">{row.multa}</div>
              <div className="car-td car-td-juros">{row.juros}</div>
              <div className="car-td car-td-total">
                <div className="car-total-cell">
                  <span style={{ 
                    color: row.status === 'vencido' ? '#C10007' : row.status === 'avencer' ? '#A65F00' : '#404040'
                  }}>{row.total}</span>
                  <div className="car-hover-icons-container">
                    <button className="car-btn-icon-action" title="Opções">
                      <img src={tableHoverOptionsIcon} alt="Opções" />
                    </button>
                    <button className="car-btn-icon-action" title="Duplicar">
                      <img src={fileCopyIcon} alt="Duplicar" />
                    </button>
                    <button className="car-btn-icon-action" title="Compartilhar">
                      <img src={tableHoverShareIcon} alt="Compartilhar" />
                    </button>
                    <button className="car-btn-icon-action" title="Mais">
                      <img src={tableHoverOptionsCopyIcon} alt="Mais" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContasAReceber;
