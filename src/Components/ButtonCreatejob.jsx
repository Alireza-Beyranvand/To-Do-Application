


import { Link } from "react-router-dom";

const ButtonCreateJob = () => {
    return (
        <div className="container text-center Scroll" style={{ marginTop: "5rem" }} >
            <Link to={"/createjob"}
                style={{ color: "whitesmoke", borderRadius: "50px" }}
                className="btn w-50  btn-outline-secondary border-danger mb-1 " >Create New Job
                {"  "}  {" "} <i className="fa fa-plus" ></i></Link>
                 <br />
              <br />
            <br />
        </div>
    )
};

export default ButtonCreateJob;