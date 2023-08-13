import apiSlice from "../api/apiSlice";

const skillsAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postSkills: builder.mutation({
            query: (data) => ({
                url: '/skill',
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
                body: data
            }),
            invalidatesTags: ["Skills"]
        }),

        getSkills: builder.query({
            query: (email) => ({
                url: `/skill/${email}`,
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            providesTags: ["Skills"]
        }),
        deleteSkill: builder.mutation({
            query: (id) => ({
                url: `/skill/${id}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                },
            }),
            invalidatesTags: ["Skills"]
        })
    })
});

export const { usePostSkillsMutation, useGetSkillsQuery, useDeleteSkillMutation } = skillsAuth