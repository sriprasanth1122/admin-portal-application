import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "./userContext"



function SideBar() {


    // let navigate = useNavigate()
    // let open = () => {
    //     navigate = ("/products")
    // }

    let context = useContext(UserContext)

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link to="/portal/dashboard" className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
                
                
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup>
                    <br />
                    {context.userName}
                </div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/users">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Users</span></Link>
            </li>

            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            {/* <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span onClick={open}>Products</span></a>
            </li> */}

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/products">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Products</span></Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/profile">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Profile</span></Link>
            </li>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default SideBar