import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
