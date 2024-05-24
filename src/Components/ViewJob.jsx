
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllJobSelector, LoadingSelector } from "../reducers/jobSlice";



// import SoinnerLoading
import SpinnerLoading from "../Spinner/SpinnerLoading";



const ViewJob = () => {

    // Download Id job from url Params
    const { jobId } = useParams();



    const ShowJob = useSelector(AllJobSelector);
    const Loading = useSelector(LoadingSelector);



    const DispJob = ShowJob.length > 0 ?
        ShowJob.find((job) => job.id === jobId) :
        (<h1>Not Found !</h1>)



    return (
        <>
            {!Loading ? (<SpinnerLoading />) : (

                <>
                    <div className="container" style={{ borderRadius: "50px" }} >

                        <div className="container text-white text-center">
                            <div className="row " >
                                <div className="col text-center" >
                                    <div className="alert  w-25 mx-auto mt-2" style={{ backgroundColor: "#941b0c", borderRadius: "50px" }}   >
                                        <b className="h4" >{DispJob.name}</b>
                                    </div>
                                </div>

                                <div className="col-20" >
                                    <div className="container" >
                                        <div className="row" >
                                            <div className="col" >
                                                <div className="alert  mx-auto mt-3 " style={{
                                                    border: "2px solid red", borderRadius: "50px 0 50px 0 ", background: "rgb(8,6,51)",
                                                    background: "linear-gradient(90deg, rgba(8,6,51,1) 0%, rgba(40,40,48,1) 0%, rgba(39,39,106,1) 51%, rgba(15,8,167,1) 100%)"
                                                }}>
                                                    <div className="container" >
                                                        <div className="row w-25 mx-auto " >
                                                            <div className="col text-white p-2" style={{ backgroundColor: "#4e148c", borderRadius: "30px 0 30px 0" }} >
                                                                <b>
                                                                    {DispJob.Description}
                                                                </b>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <br />

                                                    <div className="container" >
                                                        <div className="row w-25 mx-auto" >
                                                            <div className="col text-white p-2" style={{ backgroundColor: "#613dc1", borderRadius: "30px 0 30px 0" }} >
                                                                <b>
                                                                    <i className="fa"> Statr Date </i>  :  {DispJob.start}
                                                                </b>
                                                                <br />
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <br />


                                                    <div className="container" >
                                                        <div className="row w-25 mx-auto " >
                                                            <div className="col text-white p-2 " style={{ backgroundColor: "#613dc1", borderRadius: "30px 0 30px 0" }} >
                                                                <b>
                                                                    <i className="fa"> End Date </i>  :  {DispJob.start}
                                                                </b>
                                                                <br />
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <br />

                                                    <div className="container" >
                                                        <div className="row w-25 mx-auto " >
                                                            <div className="col text-white p-2 " style={{ backgroundColor: "#4e148c", borderRadius: "30px 0 30px 0" }} >
                                                                <b>
                                                                    <i className="fa"> Status </i>  :  {DispJob.status}
                                                                </b>
                                                                <br />

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="btn-groups" >
                                                <Link to={`/`} className="btn btn-primary  text-white w-50 mt-2"  >back</Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
};


export default ViewJob;