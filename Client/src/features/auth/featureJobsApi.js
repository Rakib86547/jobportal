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

        // getAllFeatureJobs: builder.query({
        //     query: () => ({
        //         url: '/feature-jobs/all-jobs',
        //         method: 'GET',
        //         headers: {
        //             'content-type': 'application/json',
        //             authorization: `Bearer ${localStorage.getItem('userToken')}`
        //         }
        //     })
        // }),
        getAllFeatureJobs: builder.query({
            query: ({page, limit}) => ({
                url: `/feature-jobs/all-jobs/${page}/${limit}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            providesTags: ["Job"]
        }),
    })   
});

export const { useGetFeatureJobsQuery, useGetAllFeatureJobsQuery } = featureJobsAuth