// search box
import SearchJobs from "./SearchJobs";

import StyleNavbar from "./Navbar.module.css";

// time and Date

import Cl from "../Spinner/Cl"
import { Clock } from 'react-live-clock';


const Navbar = ({searchjob , Querysearch }) => {





    return (
        <>

            <div className=" container-fluid overflow-hidden text-white position-fixed bg-dark z-3"   style={{ borderRadius: "20px 0 20px 0" }}>

                <div className="row gx-5" >
                    <div className={` col-xs-5 col-sm-4 pt-4 ${StyleNavbar.mg} `}>
                        <i className="fa-regular fa-calendar  " > Manager Jobs  {" "}  </i>
                    </div>


                    <div className={`col-xs-6 col-sm-4 text-center my-3  ${StyleNavbar.Clock} `} style={{ border: "1px solid blue", borderRadius: "50px 0 50px 0", backgroundColor:"#242582" }} >
                        <div className="mt-1 "><Cl /></div>
                    </div>


                    <div className={`col-xs-6 col-sm-4 ${StyleNavbar.rr}`}>
                        <div className="p-3" >
                            <SearchJobs Querysearch={Querysearch} searchjob={searchjob}  />
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
};

export default Navbar
