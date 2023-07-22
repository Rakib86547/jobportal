import apiSlice from "../api/apiSlice";

const companyProfileAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postCompanyProfile: builder.mutation({
            query: (data) => ({
                url: '/company/edit-company-info',
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data,
            }),
            invalidatesTags: ["Company"]
        }),
        getCompanyProfileInfo: builder.query({
            query: (email) => ({
                url: `/company/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            })
        }),
        providesTags: ["Company"]
    })
});

export const { usePostCompanyProfileMutation, useGetCompanyProfileInfoQuery } = companyProfileAuth