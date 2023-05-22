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
        // updateProfile: builder.mutation({
        //     query: (email, updateInfo) => ({
        //         url: `/profile/${email}`,
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json',
        //             authorization: `Bearer ${localStorage.getItem('userToken')}`
        //         },
        //         body: JSON.stringify(updateInfo)
        //     })
        // })
    })
})

export const { useGetCategoriesJobsQuery, useGetJobsQuery, useGetJobDetailsQuery } = authApi;