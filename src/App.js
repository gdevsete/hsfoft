import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ClientesHeader from './ClientesHeader';
import ClientesFilter from './ClientesFilter';
import ClientesTable from './ClientesTable';
import CadastrarCliente from './CadastrarCliente';
import ContasAReceber from './ContasAReceber';

function App() {
  const [route, setRoute] = useState('list'); // 'list' | 'cadastrar' | 'contasAReceber'

  const handleNavigateToCadastrar = () => setRoute('cadastrar');
  const handleNavigateToContasAReceber = () => setRoute('contasAReceber');
  const handleBackToList = () => setRoute('list');

  return (
    <div className="App">
      <Navbar onNavigateToContasAReceber={handleNavigateToContasAReceber} />
      {route === 'list' && <ClientesHeader onAdd={handleNavigateToCadastrar} />}
      {route === 'list' ? (
        <>
          <ClientesFilter />
          <ClientesTable />
        </>
      ) : route === 'cadastrar' ? (
        <CadastrarCliente onCancel={handleBackToList} onSave={handleBackToList} />
      ) : route === 'contasAReceber' ? (
        <ContasAReceber />
      ) : null}
    </div>
  );
}

export default App;
