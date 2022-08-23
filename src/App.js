import React from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <section>
      <Header />
      <Filters />
      <Table />
    </section>
  );
}

export default App;
