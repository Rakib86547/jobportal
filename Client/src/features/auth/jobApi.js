import apiSlice from "../api/apiSlice";

const jobAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        apply: builder.mutation({
            query: ({ id, ...applyData }) => ({
                url: `/jobs/apply/${id}`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
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
        }),
        questions: builder.mutation({
            query: (questionData) => ({
                url: '/jobs/questions',
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: questionData
            }),
            invalidatesTags: ["Question"]
        }),
        ripley: builder.mutation({
            query: (ripleyData) => ({
                url: '/jobs/ripley',
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: ripleyData
            }),
            invalidatesTags: ["Ripley"]
        }),
        getQuestions: builder.query({
            query: (id) => ({
                url: `/jobs/questions/${id}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            providesTags: ["Question"]
        }),
        getRipley: builder.query({
            query: (id) => ({
                url: `/jobs/ripley/${id}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            providesTags: ["Ripley"]
        })
    })
});

export const { useApplyMutation, useGetAppliedJobsQuery, useQuestionsMutation, useGetRipleyQuery, useGetQuestionsQuery, useRipleyMutation } = jobAuth;