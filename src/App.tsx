import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import { checkAuth } from "./utils/auth";
import { useEffect } from "react";
import { useLoginContext } from "./context/LoginContext";

function App() {
  const { setIsLogin } = useLoginContext();
  useEffect(() => {
    setIsLogin(checkAuth());
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
