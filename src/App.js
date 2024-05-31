

// react Router
import { Outlet, useLocation } from "react-router-dom";

// real components
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import ButtonCreateJob from "./Components/ButtonCreatejob";
import { ToastContainer } from "react-toastify"

const App = () => {

  // location
  Location = useLocation();


  return (
    <>
      <ToastContainer rtl={true} position="top-right" autoClose={2000} 
      theme="colored"  />
      <Navbar />
      <hr className="text-white mt-1" />
      <br />
      {
        Location.pathname === "/" ? <ButtonCreateJob /> : null
      }
      {
        Location.pathname === "/" ? <Jobs /> : null
      }
      <Outlet />

    </>
  )
};

export default App;