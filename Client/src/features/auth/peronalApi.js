const { default: apiSlice } = require("../api/apiSlice");

const personalAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postPersonalInfo: builder.mutation({
            query: (data) => ({
                url: '/personal',
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data,
            })
        }),
        getPersonalInfo: builder.query({
            query: (email) => ({
                url: `/personal/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            })
        }),
    })
});

export const { usePostPersonalInfoMutation, useGetPersonalInfoQuery } = personalAuth