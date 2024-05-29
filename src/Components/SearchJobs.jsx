
// hooks ref for assets to serach input 
import { useDispatch } from "react-redux";
import { searchJobs } from "../reducers/jobSlice";
import _ from "lodash";



const SearchJobs = () => {

// initialize useDispatch => Dispatch
const Dispatch = useDispatch()

// debounce & Dispatch search
const QuerySearch = _.debounce((event) => {
  Dispatch(searchJobs(event.target.value.toLowerCase()))
} , 400)

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