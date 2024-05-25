
// import image 
import { useDispatch } from "react-redux";
import { createJobs } from "../reducers/jobSlice";
import { useState } from "react";

// import Hooks for CreateJob componenet
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from "@reduxjs/toolkit";

// Module Style
import Style from "./css/CreateJob.module.css";



const CreateJob = () => {

  // initialize useDispatch => Dispatch
  const Dispatch = useDispatch()
  const Navigate = useNavigate()



  //states
  const [CreatedJob, setCreatedJob] = useState({
    name: "", start: "", end: "", Description: "",
    status: "Not Completed", id: nanoid()
  })


  // downolad Input from createJob 
  const SendInput = (event) => {
    setCreatedJob({
      ...CreatedJob,
      [event.target.name]: event.target.value,
      date: new Date().toISOString()
    })
  }


  // Inputs Validation

  const Validation = [CreatedJob.name, CreatedJob.Description,
     CreatedJob.start, CreatedJob.end].every(Boolean);



  // button send
  const SendForm = async () => {
    try {

      await Dispatch(createJobs(CreatedJob))
      Navigate("/")

    } catch (err) {
      console.error(err.message)
    }
  }


  return (
    <>
      <header style={{ marginTop: "6rem" }}>
        <div>
          <h1 className="text-info text-center mb-5" style={{ textTransform: "uppercase" }}>Create Job</h1>
        </div>
      </header>
      <article className={`container mt-3  ${Style.createjob}`} dir="rtl" style={{ border: "3px solid white", borderRadius: "30px 0 30px 0" }}>
        <div className={`container my-3  ${Style.createjob} `}>
          <div className="row" >
            <div className="col mx-2" >
              <div className="row g-3 align-items-center text-white my-1">
                <div className="col-auto">
                  <label className="col-form-label "> Job name : </label>
                </div>
                <div className="col-auto">
                  <input type="text" name="name" value={CreatedJob.name} onChange={SendInput} maxLength={15} required className="form-control " aria-describedby="passwordHelpInline" placeholder="Enter you job name" />
                </div>
                <div className="col-auto">
                  <span className="form-text text-white">
                    max length name 15
                  </span>
                </div>
              </div>
              <hr className=" text-white" />
              <div className="row g-3 align-items-center text-white ">
                <div className="col-auto">
                  <label className="col-form-label ">  Description : </label>
                </div>
                <div className="col-auto">
                  <input type="text" name="Description" value={CreatedJob.Description} placeholder="Enter Job Description" onChange={SendInput} required className="form-control " aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                  <span className="form-text text-white">
                    Description Job
                  </span>
                </div>
              </div>
              <hr className=" text-white" />
              <div className="row g-3 align-items-center text-white ">
                <div className="col-auto">
                  <label className="col-form-label ">  Start Job  </label>
                </div>
                <div className="col-auto">
                  <input type="date" name="start" value={CreatedJob.start} onChange={SendInput} required className="form-control " aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                  <span className="form-text text-white">
                    for example xxx/x/x
                  </span>
                </div>
              </div>
              <hr className=" text-white" />
              <div className="row g-3 align-items-center text-white ">
                <div className="col-auto">
                  <label className="col-form-label ">  End Job   </label>
                </div>
                <div className="col-auto mb-2">
                  <input type="date" name="end" value={CreatedJob.end} onChange={SendInput} required className="form-control " aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto mb-2">
                  <span className="form-text text-white">
                    for example 2024/4/4
                  </span>
                </div>
              </div>
              <hr className=" text-white" />
              <br />
              <div className="row g-3 align-items-center text-white ">

              </div>
              <div className="container text-center my-2" >
                <button onClick={SendForm} value="Save" className="btn btn-primary w-50" disabled={!Validation} >save</button>
              </div>
            </div>
            <div className={` col ${Style.imgfluid}`}>
              <img src={require("../assets/img background.jpg")} className="img-thumbnail my-1 " style={{ borderRadius: "30px 0 30px 0" }} alt="" />
            </div>
          </div>
        </div>

        <div className="container text-center " >
          <Link to={"/"} className="btn btn-info w-50 mt-2" > <i className="fas fa-arrow-circle-left" >  back</i></Link>
        </div>
      </article>
    </>
  )
};

export default CreateJob;