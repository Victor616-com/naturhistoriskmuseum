import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./views/Footer";
import ScrollToTop from "./components/ScrollToTop";



function Layout() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <div style={{ marginTop: 'var(--nav-height, 60px)' }}>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
