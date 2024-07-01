import {configureStore} from '@reduxjs/toolkit';
import {userApi} from './features/userFeatures';
import { teacherApi } from './features/teacherFeatures';
import { studentApi } from './features/studentFeatures';
import themeReducer from "./Theme/ThemeAdmin"
import themeReducerStudent from "./Theme/ThemeStudent"
import themeReducerTeacher from "./Theme/ThemeTeacher"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    themeAdmin: themeReducer,
    themeStudent: themeReducerStudent,
    themeTeacher: themeReducerTeacher,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([userApi.middleware,teacherApi.middleware,studentApi.middleware]),
});
