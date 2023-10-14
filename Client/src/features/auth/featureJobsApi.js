import apiSlice from "../api/apiSlice";

const featureJobsAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFeatureJobs: builder.query({
            query: () => ({
                url: '/feature-jobs',
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            })           
        }),
        getTotalJobs: builder.query({
            query: () => ({
                url: '/feature-jobs/total-jobs',
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
        }),
        getTodayJobs: builder.query({
            query: () => ({
                url: '/feature-jobs/today-jobs',
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
        }),       
    })   
});

export const { useGetFeatureJobsQuery, useGetTotalJobsQuery, useGetTodayJobsQuery } = featureJobsAuth