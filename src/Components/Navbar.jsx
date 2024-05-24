// search box
import SearchJobs from "./SearchJobs";
// time and Date
import Cl from "../Spinner/Cl";

import "./css/Navbar.css";


const Navbar = ({ searchjob, Querysearch }) => {


    return (
        <>

            {/* <div className={` container-fluid overflow-hidden text-white position-fixed bg-dark z-3`}  
             style={{ borderRadius: "20px 0 20px 0" }}>

                <div className="row gx-5" >
                    <div className={` col-sm-4 pt-4 ${StyleNavbar.mg} `}>
                        <i className="fa-regular fa-calendar " > Manager Jobs  {" "}  </i>
                    </div>


                    <div className={`col-xs-6 col-sm-4 text-center my-3  ${StyleNavbar.Clock} `} style={{ border: "1px solid blue", borderRadius: "50px 0 50px 0", backgroundColor:"#242582" }} >
                      
                    </div>


                    <div className={`col-xs-6 col-sm-4 ${StyleNavbar.rr}`}>
                        <div className="p-3" >
                            <SearchJobs Querysearch={Querysearch} searchjob={searchjob}  />
                        </div>

                    </div>

                </div>

            </div> */}


            <nav class="navbar bg-body-tertiary position-absolute w-100">
                <div class="container-fluid mx-4">
                    <a class="navbar-brand text-white NavbarTitle" style={{marginRight:"10rem"}}>To-Do <i  className="fa fa-calendar" ></i></a>
                        <div className="text-white navbar-brand mx-5 NavbarClock "><Cl/></div>
                        <input class="form-control NavbarSearch" style={{width:"15rem"}} type="search" placeholder="Search" aria-label="Search" />
                </div>
            </nav>

        </>
    )
};

export default Navbar
