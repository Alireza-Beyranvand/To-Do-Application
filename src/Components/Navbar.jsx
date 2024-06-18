import {  useLocation } from "react-router-dom";

// search box
import SearchJobs from "./SearchJobs";
// time and Date
import Cl from "../Spinner/Cl";

import "./css/Navbar.css";




const Navbar = () => {
    
// Setting the Location for rendering some components & elemnts
    const Location = useLocation()

    
    return (
        <>
        <nav class="navbar position-fixed z-3 w-100">
                <div class="container-fluid mx-4">
                    <a class="navbar-brand text-white NavbarTitle" style={{ marginRight: "10rem" }}>To-Do <i className="fa fa-calendar" ></i></a>
                    {Location.pathname.includes("/viewjob") ? <div className="navbar-brand text-white title" style={{ marginRight: "5rem" }} >ViewJob</div> : null}
                    {Location.pathname === "/createjob" ? <div className="navbar-brand text-white title" style={{ marginRight: "5rem" }} >CreateJob</div> : null}
                    <div className="text-white navbar-brand mx-5 NavbarClock "><Cl /></div>
                   {Location.pathname === "/" ?  <SearchJobs /> : null}
                </div>
            </nav>
        </>
    )
};

export default Navbar;
