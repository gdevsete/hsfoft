import React, { useState } from 'react';
import './ContasAReceber.css';
import checkIcon from './icons/check.svg';
import trashIcon from './icons/trash.svg';

const ContasAReceberTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState(new Set());

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(data.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleRowSelect = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="car-table-wrapper">
      <table className="car-table">
        <thead>
          <tr className="car-table-header">
            <th className="car-th car-th-checkbox">
              <input
                type="checkbox"
                className="car-checkbox"
                checked={selectedRows.size === data.length && data.length > 0}
                onChange={handleSelectAll}
              />
            </th>
            <th className="car-th car-th-cliente">Cliente</th>
            <th className="car-th car-th-emp">Emp</th>
            <th className="car-th car-th-pedido">Pedido</th>
            <th className="car-th car-th-nota">Nota</th>
            <th className="car-th car-th-par">Par</th>
            <th className="car-th car-th-vencimento">Vencimento</th>
            <th className="car-th car-th-valor">Valor</th>
            <th className="car-th car-th-dias">Dias</th>
            <th className="car-th car-th-multa">Multa</th>
            <th className="car-th car-th-juros">Juros</th>
            <th className="car-th car-th-total">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={`car-table-row car-row-${row.status}`}>
              <td className="car-td car-td-checkbox">
                <input
                  type="checkbox"
                  className="car-checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                />
              </td>
              <td className="car-td car-td-cliente">{row.cliente}</td>
              <td className="car-td car-td-emp">{row.emp}</td>
              <td className="car-td car-td-pedido">{row.pedido}</td>
              <td className="car-td car-td-nota">{row.nota}</td>
              <td className="car-td car-td-par">{row.par}</td>
              <td className="car-td car-td-vencimento">{row.vencimento}</td>
              <td className="car-td car-td-valor">{row.valor}</td>
              <td className="car-td car-td-dias">{row.dias}</td>
              <td className="car-td car-td-multa">{row.multa}</td>
              <td className="car-td car-td-juros">{row.juros}</td>
              <td className="car-td car-td-total car-cell-actions">
                {row.total}
                <button className="car-btn-icon-action" title="Receber">
                  <img src={checkIcon} alt="Receber" />
                </button>
                <button className="car-btn-icon-action" title="Deletar">
                  <img src={trashIcon} alt="Deletar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContasAReceberTable;
