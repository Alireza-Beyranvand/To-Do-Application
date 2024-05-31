
import { Link } from "react-router-dom";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { EditJob, DeleteJobs } from "../reducers/jobSlice";
import { useDispatch } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Job = ({ AllJobs }) => {

// initialaze Dispatch
  const Dispatch = useDispatch();

  //statusjob
  const StatusJob = AllJobs.status;

  //  id for send to ViewJob.js
  const jobId = AllJobs.id;

  // State for Change completeJob
  const [preJob, setPreJob] = useState({
    ...AllJobs, status: "Completed"
  })


  //swall
  const swall = withReactContent(Swal);


  // function btn for change style Description
  const delJobs = async () => {
    await Dispatch(EditJob(preJob));
  };


  // confirm alert & Delete Job from json-server
  const removejob = async () => {

    const Dl = async (jobId) => {
      try {
        await Dispatch(DeleteJobs(jobId))
      } catch (err) {
        console.log(err.massage)
      }
    }

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='m-5 p-5 confirm' style={{ backgroundColor: "#034078", border: "1px solid blue", borderRadius: "50px 0 50px 0" }}>
            <h1 className="text-warning">Delete Job ?</h1>
            <p className="text-center text-white">Are you want delete Job ?</p>
            <div className="btn-groups text-center">
              <button className="btn btn-secondary mx-1" onClick={onClose}>No</button>
              <button className="btn btn-danger"
                onClick={() => {
                  Dl(jobId)
                  onClose();
                  toast.success("Job is deleted" , {icon : "✅"})
                }}
              >
                Yes, Delete it!
              </button>
            </div>

          </div>
        );
      }
    });
  };


// Handeler swall 
const AlertDeleteJob = () => {
  swall.fire({
    title: "delete succsesFull !",
    text: "Complete!",
    icon: "success"
  })
}



  return (

    <>

      <div className="card mx-4 Scroll" style={{ backgroundColor: "#dee2e6" }} >
        <div className="card-header bg-dark text-white">
          #New-Job
        </div>
        <div className="card-body text-center">

          <h5 className="card-title" style={StatusJob === "Completed" ? { display: "none" }
            : { display: "inline" } && { color: "#DD2D4A", fontWeight: "bold" }}>
            {AllJobs.name}
          </h5>
          <del style={StatusJob === "Completed" ? { display: "inline" } :
            { display: "none", fontWeight: "900d" }}>{" "} {AllJobs.name} {" "}  </del>

          <div className="container">
            <hr className="hr-text text-dark" />
          </div>

          <p className="card-text" >
            <i className="fa">  Description </i>   <i className="	fa fa-file-text"> : </i>{"   "}
            <b style={StatusJob === "Completed" ? { display: "none" } : { display: "inline" }}>{AllJobs.Description}</b>
            <del style={StatusJob === "Completed" ?
              { display: "inline" } : { display: "none", fontWeight: "bold" }
            }>{AllJobs.Description} {"  "}
              <i className="fa fa-check bg-succsess p-2 mx-2" style={{ backgroundColor: "#8ADAB2", borderRadius: "20px 0 15px 0" }}> Completed</i></del>
          </p>

          <button className="btn btn-success mt-2" onClick={delJobs}> <i className="fa fa-check" ></i></button>
          <div className="container btn-group w-50 mt-2" >
            <Link to={`/viewjob/${jobId}`} className="btn btn-primary text-center "><i className="fa-solid fa-eye"></i></Link>
            <button onClick={removejob}
              className="btn btn-danger text-dark"
            ><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>

      <hr className="text-white hr-text w-75 mx-auto" />

    </>
  )
};
export default Job;