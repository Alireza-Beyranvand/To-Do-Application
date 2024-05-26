

// react Router
import { Outlet, useLocation } from "react-router-dom";

// real components
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import ButtonCreateJob from "./Components/ButtonCreatejob";

// Hooks imports
import { useState } from "react";


const App = () => {

  // location
  Location = useLocation();

  //states

  const [AllJobs, setAllJobs] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Querysearch, setQuerySearch] = useState({ text: "" })
  const [filtered, setFiltered] = useState([])



  // searchbox
  const searchjob = async (event) => {
    setQuerySearch({ ...Querysearch, text: event.target.value });
    const FilteredAll = AllJobs.filter((job) => {
      return job.name.toLowerCase().includes(event.target.value)
    })
    setFiltered(FilteredAll)
  }

console.log("render")

  return (
    <>
      {/* Nvabar (Title & Searchbox) */}
      <Navbar searchjob={searchjob} />
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