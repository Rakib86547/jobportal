import apiSlice from "../api/apiSlice";

const educationAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postEducation: builder.mutation({
            query: (data) => ({
                url: '/education',
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data
            }),
            invalidatesTags: ["Education"]
        }),
        getEducation: builder.query({
            query: (email) => ({
                url: `/education/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            providesTags: ["Education"]
        }),
        updateEducation: builder.mutation({
            query: (data) => ({
                url: '/education',
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data
            }),
            invalidatesTags: ["Education"]
        }),
        deleteEducation: builder.mutation({
            query: (id) => ({
                url: `/education/${id}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            invalidatesTags: ["Education"]
        }),
    })
});

export const { usePostEducationMutation, useGetEducationQuery, useUpdateEducationMutation, useDeleteEducationMutation } = educationAuth