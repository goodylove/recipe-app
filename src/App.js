import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Categories from "./pages/Categorie";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />;
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
