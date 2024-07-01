import {configureStore} from '@reduxjs/toolkit';
import {userApi} from './features/userFeatures';
import { teacherApi } from './features/teacherFeatures';
import { studentApi } from './features/studentFeatures';
import themeReducer from "./Theme/ThemeSlice"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    theme: themeReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([userApi.middleware,teacherApi.middleware,studentApi.middleware]),
});
