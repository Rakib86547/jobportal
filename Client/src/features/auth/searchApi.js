import apiSlice from "../api/apiSlice";

const searchAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSearchJobs: builder.query({
            query: ({ title, location }) => ({
                url: `/search?keyword=${title}&location=${location}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            })
        })
    })
});

export const { useGetSearchJobsQuery } = searchAuth