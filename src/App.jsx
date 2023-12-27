import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./router/MainRouter";



const App = () => {



  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MainRouter />
      {/* <UserData firstName="Benjamin" lastName="García" age={20} birthdate="28/06/91" /> */}
    </div>
  );
};

export default App;
