
//components real
import Job from "./Job";


//components spinner & NotFound
import NotFound from "../Spinner/NotFound";
import SpinnerLoading from './../Spinner/SpinnerLoading';

import { AllJobSelector, EditJob, fetchJobs } from "../reducers/jobSlice";

import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

const Jobs = () => {
    const Dispatch = useDispatch();
    const AllJobs = useSelector(AllJobSelector)
    const spinnerLoading = useSelector(state => state.jobs.status)

  console.log(spinnerLoading)

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
                   AllJobs ? (AllJobs.map((jobs) =>
                     <Job key={jobs.id} AllJobs={jobs}  />))  : (
                        <h1>Not Found</h1>
                     )
                    }
                </div>
            )
            }
        </>

    )
};

export default Jobs;