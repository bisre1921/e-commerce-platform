import { USERS_URL } from "../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: USERS_URL/auth,
                method: "POST",
                body: data,
            }),
        }),
        
    })
})

export const { useLoginMutation} = usersApiSlice;