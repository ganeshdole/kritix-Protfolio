import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayout from "../Layout/MainLayout";
import Portfolio from "../../pages/Portfolio";

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
      ],
    },
  ]);

  return routes;
};

export default MainRoutes;
