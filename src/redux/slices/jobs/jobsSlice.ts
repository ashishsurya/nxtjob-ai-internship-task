import { store } from '@/redux/store';
import { Job } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface IJobsSLice {
  jobs: Job[];
}

const initialState: IJobsSLice = {
  jobs: [],
};

export const jobsSlice = createSlice({
  name: 'jobs-slice',
  initialState,
  reducers: {
    setJobsToRedux: (state, action: { payload: IJobsSLice }) => {
      state.jobs = action.payload.jobs;
    },

    changeStatusOfJob: (
      state,
      action: {
        payload: {
          intialStatus: string;
          changedStatus: string;
          jobId: string;
          status_arr: string[];
        };
      }
    ) => {
      const { intialStatus, changedStatus, jobId,status_arr } = action.payload;

      // not performing any action if there is no status corresponding to new status.
      if (status_arr.findIndex((status) => status === changedStatus) === -1) {
        return;
      }

      // no change in status
      if (intialStatus === changedStatus) {
        return;
      }
      const index = state.jobs.findIndex((job) => job.id === jobId);

      state.jobs[index].status = changedStatus;
    },

    deleteJob: (state, action: { payload: { jobId: string } }) => {
      const { jobId } = action.payload;
      const index = state.jobs.findIndex((job) => job.id === jobId);
      state.jobs.splice(index, 1);
    },
  },
});

export const { setJobsToRedux, changeStatusOfJob, deleteJob } =
  jobsSlice.actions;

export default jobsSlice.reducer;
