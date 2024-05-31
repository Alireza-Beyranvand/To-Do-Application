import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateJob, getAllJobs, createJob, DeleteJob } from "../services/services";



export const fetchJobs = createAsyncThunk("/jobs/fetchJobs", async () => {
    const respons = await getAllJobs();
    return respons.data;
})

export const createJobs = createAsyncThunk("/jobs/createJobs", async initialJob => {
    const respons = await createJob(initialJob);
    return respons.data;
})

export const EditJob = createAsyncThunk("/jobs/EditJob", async initialUpdate => {
    const respons = await UpdateJob(initialUpdate.id, initialUpdate);
    return respons.data;
})


export const DeleteJobs = createAsyncThunk("/jobs/DeleteJobs", async initialDelete => {
    await DeleteJob(initialDelete);
    return initialDelete;
})



const initialState = {
    jobs: [],
    status: "none",
    error: null
}



const jobSlice = createSlice({
    name: "jobs",
    initialState: initialState,
    reducers: {

        // for searchbox
        searchJobs: (state, action) => {
            const query = action.payload;
               if(query){
                state.jobs = state.jobs.filter((job) =>
                    job.name.toLowerCase().startsWith(query))
               }
               else if(!query){
                state.status = "none"
               }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchJobs.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = "completed";
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createJobs.fulfilled, (state, action) => {
                state.status = "none";
                state.jobs = action.payload;
            })
            .addCase(EditJob.fulfilled, (state, action) => {
                const id = action.payload.id;
                const updated = state.jobs.findIndex(
                    (job) => job.id === id
                );
                state.jobs[updated] = action.payload;
            })
            .addCase(DeleteJobs.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter((job) =>
                    job.id !== action.payload);
            })
    }
});


export const { searchJobs } = jobSlice.actions;




export const AllJobSelector = state => state.jobs.jobs;
export const LoadingSelector = state => state.jobs.status;



export default jobSlice.reducer;