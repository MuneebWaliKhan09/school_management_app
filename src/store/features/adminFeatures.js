import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { API_ADMIN_URL, admin_End_Points } from "../../strings/Strings";




export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({baseUrl: API_ADMIN_URL}),
    endpoints: (builder) => ({
        allStudentsAdmin: builder.query({
            query: () => admin_End_Points.student_routes.allStudents,
        }),
    }),
});


export const {useAllStudentsAdminQuery} = adminApi