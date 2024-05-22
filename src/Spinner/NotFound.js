import notfound from "../assets/404-page-not-found.svg"



const NotFound = () => {
    return(
        <>
        <div className="container">
            <img src={notfound} alt="" />
        </div>
        <h2  className="text-center text-dark mt-4" >
                Nothing Job !
            </h2>
        </>
    )
};

export default NotFound;