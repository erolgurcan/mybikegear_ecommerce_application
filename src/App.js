import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductDetails from "./components/Shop/ProductDetails";
import ShopRouter from "./components/Shop/ShopRouter";
import { useState } from "react";
import ContextProvider from "./context/ContextProvider";


function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (


      <ContextProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/shoping/*" element={<ShopRouter  isAuth = {isAuth}  setIsAuth = {setIsAuth} />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/login" element={<Login isAuth = {isAuth}  setIsAuth = {setIsAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop isAuth = {isAuth}  setIsAuth = {setIsAuth} />} />
          <Route path="/" element={<LandingPage isAuth = {isAuth}  setIsAuth = {setIsAuth}  />} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>

  );
}

export default App;
