import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {teacher_End_Points, API_TEACHER_URL} from '../../strings/Strings';

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({baseUrl: API_TEACHER_URL}),
  tagTypes: ['Teacher'],
  endpoints: builder => ({
    teacherDetails:builder.query({
        query:()=> teacher_End_Points.teacherProfile,
        providesTags:["Teacher"],
        keepUnusedDataFor: 0
    }),
  }),
});

export const {useTeacherDetailsQuery} = teacherApi;
