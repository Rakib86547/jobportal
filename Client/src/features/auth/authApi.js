import apiSlice from "../api/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategoriesJobs: builder.query({
            query: () => ({
                url: '/category',
            })
        }),
        getJobs: builder.query({
            query: (category) => ({
                url: `/jobs/${category}`,
            })
        }),
        getJobDetails: builder.query({
            query: (id) => ({
                url: `/jobs/job-details/${id}`,
            })
        }),
    })
})

export const { useGetCategoriesJobsQuery, useGetJobsQuery, useGetJobDetailsQuery } = authApi;