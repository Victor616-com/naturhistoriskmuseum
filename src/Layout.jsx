import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./views/Footer";



function Layout() {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: 'var(--nav-height, 60px)' }}>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
