import notfound from "../assets/404-page-not-found.svg"



const NotFound = ({message}) => {
    return(
        <>
        <div className="container mt-5 " style={ message === "Not Found" ? {marginTop : "12rem"} : null }>
            <img src={notfound} alt=""
             className="img-fluid mx-auto my-auto mt-2" 
             width={"75%"} /></div>
        <h2 className="text-center text-info mt-4 "  >
                  {message} !
            </h2>
        </>
    )
};

export default NotFound;