
import {Outlet} from "react-router-dom"
import Navbar from "./NavBar";



const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4">
                <Outlet />
            </div>         
        </div>
    )
}

export default Layout;