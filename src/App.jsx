import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a SushiHouse" />
    </div>
  );
}

export default App;
