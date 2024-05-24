
// hooks ref for assets to serach input 
import { useRef } from "react";




const SearchJobs = ({searchjob , Querysearch }) => {




// useRef for focus on SearchBox
  const refSearch = useRef()
const Focus = () => {
  refSearch.current.focus()
}

 


    return(
        <>
        
{/* input for SearchJobs */}
       <form className="d-flex " role="search">
        <input ref={refSearch} onMouseOver={Focus} onChange={searchjob} value={Querysearch.text}  className="form-control me-2 h-25 w-75 mx-auto bg" type="text" placeholder="Search" aria-label="Search"/>
      </form>
        </>
    )
};


export default SearchJobs;