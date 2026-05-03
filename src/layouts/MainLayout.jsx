import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


const MainLayout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    );
};

export default MainLayout;