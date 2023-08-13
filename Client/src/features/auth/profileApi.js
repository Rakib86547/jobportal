import apiSlice from "../api/apiSlice";

const profileAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/profile',
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data,
            }),
            invalidatesTags: ["Profile"]
        }),
        getUpdateUser: builder.query({
            query: (email) => ({
                url: `/profile/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            providesTags: ["Profile"]
        })
    })
});


export const { useUpdateProfileMutation, useGetUpdateUserQuery } = profileAuth;