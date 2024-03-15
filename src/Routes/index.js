import ArrayMapDemo from "../Components/ArrayMapDemo";
import Counter from "../Components/Counter";
import ImageGallery from "../Components/ImageGallery";
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
  {
    id: 7,
    path: "/counter",
    component: Counter,
  },
  {
    id: 8,
    path: "/gallery",
    component: ImageGallery,
  },
];