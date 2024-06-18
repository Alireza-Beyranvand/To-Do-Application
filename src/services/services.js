
import axios from "axios";

// server real


const Server = "http://localhost:9000";


// get all jobs

export const getAllJobs = async () => {
    const url = `${Server}/jobs`;
    return axios.get(url)
}

// get to job

export const getJobs = async (jobId) => {
    const url = `${Server}/jobs/${jobId}`;
    return axios.get(url);
};


// create job 

export const createJob = async (newJob) => {
    const url = `${Server}/jobs`;
    return axios.post(url, newJob);
}
// Update Job =>

export const UpdateJob = async (jobId, newJob) => {
    const url = `${Server}/jobs/${jobId}`;
    return axios.put(url, newJob)

};


// delete Job 

export const DeleteJob = async (jobId) => {
    const url = `${Server}/jobs/${jobId}`
    return axios.delete(url)
}

