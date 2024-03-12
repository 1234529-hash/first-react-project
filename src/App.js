import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArrayMapDemo from "./Components/ArrayMapDemo";
import Props2 from "./Components/Porps2";
import Products from "./Components/Products";
import Props from "./Components/Props";
import Home from "./Pages/Home";
import { routes } from "./Routes";

function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              Component={route.component}
            />
          );
        })}

        {/* <Route path="/" Component={Home} />
        <Route path="/array-map-demo" Component={ArrayMapDemo} />
        <Route path="/products" Component={Products} />
        <Route path="/Props" Component={Props} />
        <Route path="/Props2" Component={Props2} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
