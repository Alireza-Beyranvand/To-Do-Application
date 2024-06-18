import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ViewJob from "../Components/ViewJob";
import CreateJob from "../Components/CreateJob";
import NotFound from "../Spinner/NotFound";

const router = createBrowserRouter([
{
    path : "/" ,
  element : <App/>  ,
  errorElement :<div className="text-center"> <NotFound message={"Not Found"} /> </div>,
  children : [
    {
        path : "/createjob" ,
        element : <CreateJob/>
    } ,
    {
   path : "/viewjob/:jobId" ,
   element : <ViewJob/>
    }
  ]
},
], {
  basename:"/"
});
export default router;
