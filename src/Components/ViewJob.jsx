
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AllJobSelector, LoadingSelector } from "../reducers/jobSlice";

// Module Css
import Style from './css/ViewJob.module.css';

// import SoinnerLoading
import SpinnerLoading from "../Spinner/SpinnerLoading";



const ViewJob = () => {

    // Download Id job from url Params
    const { jobId } = useParams();


// initialization for ShoweJobs & Setting SpinnerLoading
    const ShowJob = useSelector(AllJobSelector);
    const Loading = useSelector(LoadingSelector);


// loop for Jobs
    const DispJob = ShowJob.length > 0 ?
        ShowJob.find((job) => job.id === jobId) :
        (<h1>Not Found !</h1>)



    return (
        <>
            {!Loading ? (<SpinnerLoading />) : (
                <>

                    <header className={`text-center ${Style.headerViewJob}`} style={{ marginTop: "7.5rem" }}>
                        <h1 className="text-info" style={{ textTransform: "uppercase"}}>View Job</h1>
                    </header>
                    <section className={`container mt-5 containerViewJob ${Style.containerViewJob}`}>
                        <article className="container rounded-5 text-center" style={{ marginTop: "6rem" }} >

                            <article className=" w-50 mx-auto">
                                <div className={`text-center text-white my-5 text-center ${Style.ScrollAllTagViewJob}`}>
                                    <h1 className="h1" style={{ wordBreak:"break-word" }}><i className="p-2" >{DispJob.name}</i></h1>
                                </div>
                            </article>
                            <div className="row">
                                <div className={`col-sm text-white mx-1 my-1 rounded-5 ${Style.card}`} style={{ background: "linear-gradient(90deg, rgba(8,66,222,1) 0%, rgba(255,0,129,1) 100%)" }}>
                                    <i className="fas py-3 fa-info-circle" > Description :</i>
                                    <br />
                                    <h5 className="h6" style={{wordBreak:"break-word"}}>{DispJob.Description}</h5>
                                </div>
                                <div className={`col-sm text-white mx-1 my-1 rounded-5 ${Style.card}`} style={{ background: "linear-gradient(90deg, rgba(8,66,222,1) 0%, rgba(255,0,129,1) 100%)" }}>
                                    <i className="fa py-3" > start :</i>
                                    <br />
                                    <h5>{DispJob.start}</h5>
                                </div>
                                <div className={`col-sm text-white mx-1 my-1 rounded-5 ${Style.card}`} style={{ background: "linear-gradient(90deg, rgba(8,66,222,1) 0%, rgba(255,0,129,1) 100%)" }}>
                                    <i className="fa py-3" > end :</i>
                                    <br />
                                    <h5>{DispJob.end}</h5>
                                </div>
                                <div className={`col-sm text-white mx-1 my-1 rounded-5 ${Style.card}`} style={{ background: "linear-gradient(90deg, rgba(8,66,222,1) 0%, rgba(255,0,129,1) 100%)" }}>
                                    <i className="fa py-3" > status :</i>
                                    <br />
                                    <h5>{DispJob.status}</h5>
                                </div>
                            </div>
                            <Link to={"/"} className="btn text-white w-25 my-5 rounded-5" style={{ backgroundColor: "#0071c5" }} ><i className="fa fa-arrow-left"> back </i></Link>
                        </article>
                    </section>

                </>
            )}

        </>
    )
};


export default ViewJob;