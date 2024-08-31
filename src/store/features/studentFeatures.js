import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_STUDENT_URL, student_End_Points} from '../../strings/Strings';

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({baseUrl: API_STUDENT_URL}),
  tagTypes: ['Student'],
  endpoints: builder => ({
    studentDetails: builder.query({
      query: () => student_End_Points.studentProfile,
      providesTags: ['Student'],
    }),
  }),
});

export const {useStudentDetailsQuery} = studentApi;
