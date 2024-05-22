import { createContext } from "react";


export const CreateContext = createContext(
{
    removejob : (jobid) => {} ,
    Edit : async (JobId , Status) => {} ,

}
)