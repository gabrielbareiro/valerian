import './App.css';
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown.js'
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
      </main>
    </div>
    
  );
}

export default App;
