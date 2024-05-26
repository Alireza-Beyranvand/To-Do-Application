
//components real
import Job from "./Job";

//components spinner & NotFound
import NotFound from "../Spinner/NotFound";
import SpinnerLoading from './../Spinner/SpinnerLoading';

//hooks
import { AllJobSelector, fetchJobs } from "../reducers/jobSlice";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

const Jobs = () => {

    // initialize useDispatch => Dispatch
    const Dispatch = useDispatch();

    // initialize state => ShowJobs 
    const AllJobs = useSelector(AllJobSelector)

    // initialize SpinnerLoading by state.status
    const spinnerLoading = useSelector(state => state.jobs.status)

// When changing status => render => Dispatch(fetchJobs())
useEffect(() =>{
if (spinnerLoading === "none"){
   Dispatch(fetchJobs())
}
},[Dispatch , spinnerLoading])


    return (
        <>

            {spinnerLoading === "none" ? <SpinnerLoading /> : (
                <div>
                    {
                   AllJobs.length > 0 ? (AllJobs.slice().sort((a, b) => b.date.localeCompare(a.date)).map((jobs) =>
                     <Job key={jobs.id} AllJobs={jobs}  />))  : (
                        <h1 className="text-center text-white Scroll"><NotFound message={"Nothing Job"} /></h1>
                     )
                    }
                </div>
            )
            }
            
        </>

    )
};

export default Jobs;