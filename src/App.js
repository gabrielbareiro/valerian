import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './components/Item';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div>Valerian tienda virtual</div>
        <NavBar />
      </header>
      <main>
        <ItemListContainer titulo= "catalogo"/>
      </main>
    </div>
    
  );
}

export default App;
