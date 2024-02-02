import routes from "../config/routes";
import ListProducts from "../pages/Collections/ListProducts";
import CartLayout from "../layouts/CartLayout";
import About from "../pages/About";
import Cart from "../pages/Cart";
import EverworldStories from "../pages/EverworldStories/EverworldStories";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.productDetail, component: ProductDetail },
  { path: routes.about, component: About },
  { path: routes.everworldStories, component: EverworldStories },
  { path: routes.cart, component: Cart, Layout: CartLayout },
  {
    path: routes.mensSweaters,
    component: () => <ListProducts type="mens-sweaters" />,
  },
  {
    path: routes.womensSweaters,
    component: () => <ListProducts type="womens-sweaters" />,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };