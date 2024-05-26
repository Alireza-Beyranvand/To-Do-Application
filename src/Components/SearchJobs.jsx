
// hooks ref for assets to serach input 
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllJobSelector } from "../reducers/jobSlice";
import { searchJobs } from "../reducers/jobSlice";
const SearchJobs = () => {

const All = useSelector(AllJobSelector)

const Dispatch = useDispatch()

// useRef for focus on SearchBox
  const refSearch = useRef()
const Focus = () => {
  refSearch.current.focus()
}

// const [query , setQuery] = useState({});

const QuerySearch = (event) => {
  Dispatch(searchJobs(event.target.value.toLowerCase()))
};


    return(
        <>
        

       <form className="d-flex " role="search">
       <input  class="form-control NavbarSearch" name="searched"  onChange={QuerySearch}
       style={ Location.pathname !== "/" ? {display: "none"} : {width:"15rem"}} type="search"
        placeholder="Search" aria-label="Search" />
      </form>
        </>
    )
};


export default SearchJobs;