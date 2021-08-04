import './App.css';
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown.js'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div>Valerian tienda virtual</div>
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
    </div>
    
  );
}

export default App;
