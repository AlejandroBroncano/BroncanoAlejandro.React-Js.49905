
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProducts } from "./hooks/useProducts";
import { useState } from "react";


const App = () => {


  const { productsData } = useGetProducts (20);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <ItemListContainer  productsData={productsData} />
    </div>
  );
};

export default App;
