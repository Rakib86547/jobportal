import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategoriesJobs: builder.query({
            query: () => ({                       
                url: '/categories-job',      
            })
        }),
        getJobs: builder.query({
            query: (id) => ({                       
                url: `/jobs/${id}`,      
            })
        }),
        getJobDetails: builder.query({
            query: (id) => ({                       
                url: `/job-details/${id}`,      
            })
        })
    })
})
export const { useGetCategoriesJobsQuery, useGetJobsQuery, useGetJobDetailsQuery } = authApi;