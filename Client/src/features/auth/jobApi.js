import apiSlice from "../api/apiSlice";

const jobAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        apply: builder.mutation({
            query: ({ id, ...applyData }) => ({
                url: `/jobs/apply/${id}`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                },
                body: applyData
            })
        }),
        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/jobs/my-jobs/${email}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            })
        })
    })
});

export const { useApplyMutation, useGetAppliedJobsQuery } = jobAuth;