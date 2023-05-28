import apiSlice from "../api/apiSlice";

const fileAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fileUpload: builder.mutation({
            query: (fileData) => ({
                url: '/file',
                method: 'PUT',
                body: fileData
            }),
            invalidatesTags: ["File"]
        }),
        getFile: builder.query({
            query: (email) => ({
                url: `/file/${email}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            providesTags: ["File"]
        }),
        deleteFile: builder.mutation({
            query: (id) => ({
                url: `/file/${id}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            }),
            invalidatesTags: ["File"]
        }),
    })
});

export const { useFileUploadMutation, useGetFileQuery, useDeleteFileMutation } = fileAuth