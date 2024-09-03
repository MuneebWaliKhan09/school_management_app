import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {teacher_End_Points, API_TEACHER_URL} from '../../strings/Strings';

export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({baseUrl: API_TEACHER_URL}),
  tagTypes: ['Teacher', 'Student','Attendance'],
  endpoints: builder => ({
    teacherDetails: builder.query({
      query: () => teacher_End_Points.teacherProfile,
      providesTags: ['Teacher'],
    }),
    allStudentsClassTeacher: builder.query({
      query: () => teacher_End_Points.allStudentsOfClass,
      providesTags: ['Student'],
    }),
    studentDetailsClass: builder.query({
      query: id => `${teacher_End_Points.singleStudentDetail}${id}`,
      providesTags: ['Student'],
    }),
    UpdateStudentDetails: builder.mutation({
      query: ({id, data}) => ({
        url: `${teacher_End_Points.updateStudentClass}${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Student'],
    }),
    RemoveStudent: builder.mutation({
      query: id => ({
        url: `${teacher_End_Points.removeStudentClass}${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Student'],
    }),
    RegisterStudentToClass: builder.mutation({
      query: data => ({
        url: `${teacher_End_Points.classTeacherAddStudent}`,
        method: 'POST',
        body:data
      }),
      invalidatesTags: ['Student'],
    }),
    UpdateStudentAvatar: builder.mutation({
      query: ({id, formData}) => ({
        url: `${teacher_End_Points.updateStudentAvatar}${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Student'],
    }),
    takeAttendance: builder.mutation({
      query: (data) => ({
        url: teacher_End_Points.takeAttendanceClass,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Attendance'],
    }),
    getTodayAttendace: builder.query({
      query: () => teacher_End_Points.attendanceClassToday,
      providesTags: ['Attendance'],
    }),
    attendanceStudentMonthly: builder.query({
      query: id => `${teacher_End_Points.attendanceStudentMonthly}${id}`,
      providesTags: ['Attendance'],
    }),
  }),
});

export const {
  useTeacherDetailsQuery,
  useAllStudentsClassTeacherQuery,
  useStudentDetailsClassQuery,
  useUpdateStudentDetailsMutation,
  useRemoveStudentMutation,
  useRegisterStudentToClassMutation,
  useUpdateStudentAvatarMutation,
  useTakeAttendanceMutation,
  useGetTodayAttendaceQuery,
  useAttendanceStudentMonthlyQuery
} = teacherApi;
