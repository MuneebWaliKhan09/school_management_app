import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_USER_URL, user_End_Points} from '../../strings/Strings';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: API_USER_URL}),
  tagTypes: ['User'],
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: data => ({
        url: user_End_Points.login,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    // registerUser:builder.query({
    //     query:()=> user_End_Points.register
    // }),
    logoutUser: builder.mutation({
      query: data => ({
        url: user_End_Points.logout,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    userDetails: builder.query({
      query: () => user_End_Points.getUserDetails,
      providesTags: ['User'],
      keepUnusedDataFor: 0,
    }),

    changePasswordUser: builder.mutation({
      query: data => ({
        url: user_End_Points.changePassword,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    updateProfile: builder.mutation({
      query: data => ({
        url: user_End_Points.updateProfile,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),

    // updateUserAvatar:builder.query({
    //     query:()=> user_End_Points.updateUserAvatar
    // })
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useUserDetailsQuery,
  useUpdateProfileMutation,
  useChangePasswordUserMutation
} = userApi;
