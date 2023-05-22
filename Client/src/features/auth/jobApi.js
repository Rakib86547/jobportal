import apiSlice from "../api/apiSlice";

const jobAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        apply: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `jobs/apply/${id}`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data
            })
        })
    })
});

export const { useApplyMutation } = jobAuth;