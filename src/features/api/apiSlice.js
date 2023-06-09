import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            console.log('token', token)
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    },
    endpoints: (builder) => ({})
})
export default apiSlice;