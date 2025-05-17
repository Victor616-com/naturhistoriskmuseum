import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";



function Layout() {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: 'var(--nav-height, 60px)' }}>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
