

import NotFound from "./Spinner/NotFound"
import SpinnerLoading from "./Spinner/SpinnerLoading";

// react Router
import { Routes, Route, Navigate, Link, useNavigate, Outlet, useLocation } from "react-router-dom";

// real components
import Jobs from "./Components/Jobs";
import ViewJob from "./Components/ViewJob";
import Navbar from "./Components/Navbar";
import CreateJob from "./Components/CreateJob";



// Hooks imports
import { useState, useEffect } from "react";






// Download http metoud Api inn Server.json by axios from json-Server
import { getAllJobs, createJob, UpdateJob, DeleteJob } from './services/services'
import { useMemo } from "react";



const App = () => {
Location = useLocation();

  //states

  const [AllJobs, setAllJobs] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Querysearch, setQuerySearch] = useState({ text: "" })
  const [filtered, setFiltered] = useState([])


  // navigate for return to other component ( for example back to jobs.js component)
  const Go = useNavigate();


  // downolad data Alljobs & Allgroups from Server (services)
  useEffect(() => {

    const dataAwait = async () => {
      try {
        setLoading((prevLoading) => !prevLoading)
        const { data: dataAwaitJobs } = await getAllJobs();

        if (dataAwaitJobs) {
          setAllJobs(dataAwaitJobs);
          setFiltered(dataAwaitJobs)
        }
        setLoading((prevLoading) => !prevLoading)
      }
      catch (err) {
        console.log(err.massage)
        setLoading(false)
      }
    };
    dataAwait();
  }, []);



  // searchbox

  const searchjob = async (event) => {
    setQuerySearch({ ...Querysearch, text: event.target.value });
    const FilteredAll = AllJobs.filter((job) => {
      return job.name.toLowerCase().includes(event.target.value)
    })
    setFiltered(FilteredAll)
  }



  return (

    <>

      {/* Nvabar (Title & Searchbox) */}

      <Navbar Querysearch={Querysearch} searchjob={searchjob} />
      <hr className="text-white mt-1" />
      <br />
      <br />
      <br />

      {/* button createJob */}
      <div className="container text-center mt-4" >
        <Link to={"/createjob"}
          style={{ color: "whitesmoke", borderRadius: "50px" }}
          className="btn w-50  btn-outline-secondary border-danger mb-1 " >Create New Job
          {"  "}  {" "} <i className="fa fa-plus" ></i></Link>
      </div>
      <div className="container" >
      <hr className="hr-text text-white" />
      </div>
      <br />

      {/* Link and Route from go to Components */}
    {
      Location.pathname === "/" ?  <Jobs/> : null
    } 
      <Outlet />

    </>
  )
};

export default App;