
// import image 
import { useDispatch } from "react-redux";
import { createJobs } from "../reducers/jobSlice";

// import Hooks for CreateJob componenet
import { Link, useNavigate } from 'react-router-dom';

// Module Style
import Style from "./css/CreateJob.module.css";

// Formik & JobSchema
import { ErrorMessage, Field, Formik, Form } from "formik";
import { JobSchema } from "../validations/JobSchema";
import { toast } from "react-toastify";



const CreateJob = () => {

  // initialize useDispatch => Dispatch
  const Dispatch = useDispatch()
  const Navigate = useNavigate()



  // button send
  const SendForm = async (values) => {
    try {
    await Dispatch(createJobs(values))
      toast.success("Completed !" , {icon : "🚀"})
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
              <Formik
                initialValues={{
                  name: "",
                  Description: "",
                  start: "",
                  end: "",
                  status: "Not Completed"
                  , date : new Date().toISOString()
                }}
                validationSchema={JobSchema}
                onSubmit={(values) => {
                  SendForm(values)
                }}
              >
                <Form>
                  <div className="row g-3 align-items-center text-white my-1">
                    <div className="col-auto">
                      <label className="col-form-label "> Job name : </label>
                    </div>
                    <div className="col-auto">
                      <Field type="text" name="name" maxLength={15} className="form-control " aria-describedby="passwordHelpInline" placeholder="Enter you job name" />
                    </div>
                    <div className="col-auto">
                      <span className="form-text text-white">
                        max length name 15
                      </span>
                      <ErrorMessage name="name" render={(err) => <p className="text-danger" >{err}</p>} />
                    </div>
                  </div>
                  <hr className=" text-white" />
                  <div className="row g-3 align-items-center text-white ">
                    <div className="col-auto">
                      <label className="col-form-label ">  Description : </label>
                    </div>
                    <div className="col-auto">
                      <Field type="text" name="Description" placeholder="Enter Job Description" className="form-control " aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto">
                      <span className="form-text text-white">
                        Description Job
                      </span>
                      <ErrorMessage name="Description" render={(err) => <p className="text-danger" >{err}</p>} />
                    </div>
                  </div>
                  <hr className=" text-white" />
                  <div className="row g-3 align-items-center text-white ">
                    <div className="col-auto">
                      <label className="col-form-label ">  Start Job  </label>
                    </div>
                    <div className="col-auto">
                      <Field type="date" name="start" className="form-control " aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto">
                      <span className="form-text text-white">
                        for example xxx/x/x
                      </span>
                      <ErrorMessage name="start" render={(err) => <p className="text-danger" >{err}</p>} />
                    </div>
                  </div>
                  <hr className=" text-white" />
                  <div className="row g-3 align-items-center text-white ">
                    <div className="col-auto">
                      <label className="col-form-label ">  End Job   </label>
                    </div>
                    <div className="col-auto mb-2">
                      <Field type="date" name="end" className="form-control " aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto mb-2">
                      <span className="form-text text-white">
                        for example 2024/4/4
                      </span>
                      <ErrorMessage name="end" render={(err) => <p className="text-danger" >{err}</p>} />
                    </div>
                  </div>
                  <hr className=" text-white" />
                  <br />
                  <div className="row g-3 align-items-center text-white ">
                  </div>
                  <div className="container text-center my-2" >
                    <input type="submit" value="Save" className="btn btn-primary w-50" />
                  </div>
                </Form>
              </Formik>
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