import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ArrayMapDemo from "./Components/ArrayMapDemo";
import Products from "./Components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/array-map-demo" Component={ArrayMapDemo} />
        <Route path="/products" Component={Products} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
