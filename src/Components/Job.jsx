
import { Link } from "react-router-dom";

import { useContext, useEffect, useRef, useState } from "react";
import { CreateContext } from "../context/CreateContext";
import { EditJob } from "../reducers/jobSlice";
import { useDispatch } from "react-redux";


const Job = ({ AllJobs }) => {


const Dispatch = useDispatch();





  // State for Change completeJob
  const [preJob, setPreJob] = useState({
    ...AllJobs, status: "Completed"
  })

  
  // life cycle for Change Style <del></del> 
  useEffect(() => {
    if (AllJobs.status === "Completed") {
      ChangeTag.current.style.display = "inline";
      DesReal.current.style.display = "none";
      NameDel.current.style.display = "none";
      ShowDelName.current.style.display = "inline";
    }
    console.log("Render")
  }, [])


  // useRef for Change Tags
  const ChangeTag = useRef(null);
  const DesReal = useRef(null);
  const NameDel = useRef(null);
  const ShowDelName = useRef(null);




  //  function async Delete Job 
  const { remove } = useContext(CreateContext);


  //  id for send to ViewJob.js
  const jobId = AllJobs.id;


  // function btn for change style Description

  const delJobs = async () => {
    ChangeTag.current.style.display = "inline";
    DesReal.current.style.display = "none";
    NameDel.current.style.display = "none";
    ShowDelName.current.style.display = "inline";
    await Dispatch(EditJob(preJob));
  };





  return (

    <>

      <div className="card" style={{ backgroundColor: "#dee2e6" }} >
        <div className="card-header bg-dark text-white">
          #New-Job
        </div>
        <div className="card-body text-center">

          <h5 ref={NameDel} className="card-title" style={{ color: "#DD2D4A", fontWeight: "bold" }}>
            {AllJobs.name}
          </h5>
          <del ref={ShowDelName} style={{ display: "none" , fontWeight:"900d" }}>{" "} {AllJobs.name} {" "}  </del>

          <div className="container">
            <hr className="hr-text text-dark" />
          </div>

          <p className="card-text" >
            <i className="fa">  Description </i>   <i className="	fa fa-file-text"> : </i>{"   "}
            <b ref={DesReal}>{AllJobs.Description}</b>
            <del ref={ChangeTag} style={{ display: "none", fontWeight: "bold" }}>{AllJobs.Description} {"  "}
              <i className="fa fa-check bg-succsess p-2 mx-2" style={{ backgroundColor: "#8ADAB2", borderRadius: "20px 0 15px 0" }}> Completed</i></del>
          </p>

          <button className="btn btn-success mt-2" onClick={delJobs}> <i className="fa fa-check" ></i></button>
          <div className="container btn-group w-50 mt-2" >
            <Link to={`/viewjob/${jobId}`} className="btn btn-warning text-center "><i className="fa-solid fa-eye"></i></Link>
            <button onClick={() => remove(jobId)} 
            className="btn btn-danger text-dark"
            ><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>

      <hr className="text-white" />

    </>
  )
};
export default Job;