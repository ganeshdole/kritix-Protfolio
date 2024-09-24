import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../../pages/NotFound";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import AuthPage from "../../pages/AuthPage";

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
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default MainRoutes;
