import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login isAuth = {isAuth}  setIsAuth = {setIsAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop isAuth = {isAuth}  setIsAuth = {setIsAuth} />} />
          <Route path="/" element={<LandingPage isAuth = {isAuth}  setIsAuth = {setIsAuth}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
