import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_USER_URL, user_End_Points} from '../../strings/Strings';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: API_USER_URL}),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: data => ({
        url: user_End_Points.login,
        method: 'POST',
        body: data,
      }),
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
    }),
    // userDetails:builder.query({
    //     query:()=> user_End_Points.getUserDetails
    // }),
    // changePasswordUser:builder.query({
    //     query:()=> user_End_Points.changePassword
    // }),
    // updateProfile:builder.query({
    //     query:()=> user_End_Points.updateProfile
    // }),
    // updateUserAvatar:builder.query({
    //     query:()=> user_End_Points.updateUserAvatar
    // })
  }),
});

export const {useLoginUserMutation, useLogoutUserQuery} = userApi;
