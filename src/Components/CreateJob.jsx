
// import image 
import { useDispatch } from "react-redux";
import img from "../assets/WallpaperGram.IR_1559405791_23100.jpg";
import { createJobs } from "../reducers/jobSlice";
import { useState } from "react";

// import Hooks for CreateJob componenet
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from "@reduxjs/toolkit";




// input for create NewJobs
const CreateJob = () => {


  const Dispatch = useDispatch()
  const Navigate = useNavigate()



  //states


  const [CreatedJob, setCreatedJob] = useState({
    name: "", start: "", end: "",
    status: "Not Completed", id: nanoid()
  })




  // downolad Input from createJob 

  const SendInput = (event) => {
    setCreatedJob({
      ...CreatedJob,
      [event.target.name]: event.target.value
    })
  }



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
      <div className="container mt-3 " dir="rtl" style={{ border: "3px solid white", borderRadius: "30px 0 30px 0" }}>
        <div className="container my-3 " style={{
          backgroundImage: ` url(${img})`,
          background: "rgb(8,6,51)",
          background: "linear-gradient(90deg, rgba(8,6,51,1) 0%, rgba(1,0,20,1) 0%, rgba(23,23,37,1) 21%, rgba(109,108,129,1) 100%)",
          borderRadius: "25px 0 25px 0 "
        }} >
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
                <button onClick={SendForm} value="Save" className="btn btn-primary w-50" >save</button>
              </div>
            </div>
            <div className="col" >
              <img src={require("../assets/img background.jpg")} className="img-thumbnail my-1 " style={{ borderRadius: "30px 0 30px 0", outline: "1px solid red" }} alt="" />
            </div>
          </div>
        </div>

        <div className="container text-center " >
          <Link to={"/"} className="btn btn-info w-50 " > <i className="fas fa-arrow-circle-left" >  back</i></Link>
        </div>
      </div>
    </>
  )
};

export default CreateJob;