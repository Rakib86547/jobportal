import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategoriesJobs: builder.query({
            query: () => ({                       
                url: '/categories-job',      
            })
        })
    })
})
export const { useGetCategoriesJobsQuery } = authApi;