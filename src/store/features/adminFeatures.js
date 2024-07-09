import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_ADMIN_URL, admin_End_Points} from '../../strings/Strings';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({baseUrl: API_ADMIN_URL}),
  tagTypes: ['Students'],
  endpoints: builder => ({
    allStudentsAdmin: builder.query({
      query: () => admin_End_Points.student_routes.allStudents,
      providesTags: ['Students'],
    }),
    singleStudentDetails: builder.query({
      query: id => `${admin_End_Points.student_routes.getStudentById}${id}`,
      providesTags: ['Students'],
    }),
    EditStudentDetails: builder.mutation({
      query: ({id, data}) => ({
        url: `${admin_End_Points.student_routes.updateStudent}${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
    DeleteStudent: builder.mutation({
      query: id => ({
        url: `${admin_End_Points.student_routes.deleteStudent}${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'],
    }),
    AddStudent: builder.mutation({
      query: data => ({
        url: `${admin_End_Points.student_routes.addStudent}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
    EditStudentAvatar: builder.mutation({
      query: ({id, formData}) => ({
        url: `${admin_End_Points.student_routes.updateAvatarStudent}${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Students'],
    }),
    AddAcademicRecord: builder.mutation({
      query: ({id, data}) => ({
        url: `${admin_End_Points.student_routes.addStudentAcademicRecord}${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
    DeleteAcademicRecord: builder.mutation({
      query: ({id, data}) => ({
        url: `${admin_End_Points.student_routes.deleteStudentAcademicRecord}${id}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
    EditAcademicRecord: builder.mutation({
      query: ({id, data}) => ({
        url: `${admin_End_Points.student_routes.updateStudentAcademicRecord}${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useAllStudentsAdminQuery,
  useSingleStudentDetailsQuery,
  useEditStudentDetailsMutation,
  useDeleteStudentMutation,
  useAddStudentMutation,
  useEditStudentAvatarMutation,
  useAddAcademicRecordMutation,
  useEditAcademicRecordMutation
} = adminApi;
