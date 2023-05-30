import apiSlice from "../api/apiSlice";

const workAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postWork: builder.mutation({
            query: (data) => ({
                url: '/work',
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data,
            }),
            invalidatesTags: ["Work"]
        }),
        getWork: builder.query({
            query: (email) => ({
                url: `/work/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            providesTags: ["Work"]
        }),
        updateWork: builder.mutation({
            query: (data) => ({
                url: '/work',
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data
            }),
            invalidatesTags: ["Work"]
        }),
        deleteWork: builder.mutation({
            query: (id) => ({
                url: `/work/${id}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            invalidatesTags: ["Work"]
        }),
    })
});
export const { usePostWorkMutation, useGetWorkQuery, useUpdateWorkMutation, useDeleteWorkMutation } = workAuth;