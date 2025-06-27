import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
