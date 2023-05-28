import apiSlice from "../api/apiSlice";

const fileAuth = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fileUpload: builder.mutation({
            query: (fileData) => ({
                url: '/file',
                method: 'POST',
                body: fileData
            })
        })
    })
});

export const { useFileUploadMutation } = fileAuth