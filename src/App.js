import './App.css';
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './components/Cards.jsx';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div>Valerian tienda virtual</div>
        <NavBar />
      </header>
      <main>
        <ItemListContainer nombre= "catalogo"/>
        
        <ItemCount />
      </main>
    </div>
    
  );
}

export default App;
