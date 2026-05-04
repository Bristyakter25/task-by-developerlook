
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


const MainLayout = () => {
    const location = useLocation();
    const hideLayout = location.pathname.startsWith("/");
    return (
        <>
        {!hideLayout && <Navbar />}
   <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;