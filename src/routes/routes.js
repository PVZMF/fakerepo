import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/Categories";
import {Layout,Layout1} from "../components/layout";
import Layout2 from "../components/Layout2";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
      children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout1 />,
      children: [
    {
      path: "about-us",
      element: <AboutUs />,
    },
  ]
  },
  
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
