import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import MainLayout from "../Layout/MainLayout";

const LazyPortfolio = React.lazy(() => import("../../pages/Portfolio"));

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/portfolio",
          element: (
            <React.Suspense fallback="Loading...">
              <LazyPortfolio />
            </React.Suspense>
          ),
        },
      ],
    },
  ]);

  return routes;
};

export default MainRoutes;
