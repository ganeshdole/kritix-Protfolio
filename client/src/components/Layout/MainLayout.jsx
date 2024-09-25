import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContextProvider from "../../context/ContextProvider";

const MainLayout = () => {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </ContextProvider>
  );
};

export default MainLayout;
