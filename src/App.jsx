
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProducts } from "./hooks/useProducts";
import UserData from "./components/UserData";



const App = () => {


  const { productsData } = useGetProducts (20);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <ItemListContainer  productsData={productsData} />
      {/* <UserData firstName="Benjamin" lastName="García" age={20} birthdate="28/06/91" /> */}
    </div>
  );
};

export default App;
