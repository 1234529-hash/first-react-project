import ArrayMapDemo from "../Components/ArrayMapDemo";
import Props2 from "../Components/Porps2";
import Products from "../Components/Products";
import Props from "../Components/Props";
import UseStateDemo from "../Components/UseStateDemo";
import Home from "../Pages/Home";

export const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/array-map-demo",
    component: ArrayMapDemo,
  },
  {
    id: 3,
    path: "/products",
    component: Products,
  },
  {
    id: 4,
    path: "/Props",
    component: Props,
  },
  {
    id: 5,
    path: "/Props2",
    component: Props2,
  },
  {
    id: 6,
    path: "/use-state",
    component: UseStateDemo,
  },
];
