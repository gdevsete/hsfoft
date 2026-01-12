import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ClientesHeader from './ClientesHeader';
import ClientesFilter from './ClientesFilter';
import ClientesTable from './ClientesTable';
import CadastrarCliente from './CadastrarCliente';

function App() {
  const [route, setRoute] = useState('list'); // 'list' | 'cadastrar'

  const handleNavigateToCadastrar = () => setRoute('cadastrar');
  const handleBackToList = () => setRoute('list');

  return (
    <div className="App">
      <Navbar />
      {route === 'list' && <ClientesHeader onAdd={handleNavigateToCadastrar} />}
      {route === 'list' ? (
        <>
          <ClientesFilter />
          <ClientesTable />
        </>
      ) : (
        <CadastrarCliente onCancel={handleBackToList} onSave={handleBackToList} />
      )}
    </div>
  );
}

export default App;
