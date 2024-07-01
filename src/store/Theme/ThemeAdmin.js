// themeSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialStateTheme = {
  background: '#0000',
};

const saveThemeToStorage = async theme => {
  try {
    await AsyncStorage.setItem('themeAdmin', JSON.stringify(theme));
  } catch (error) {
    console.error('Error saving theme to AsyncStorage:', error);
  }
};

export const loadTheme = createAsyncThunk('theme/loadThemeadmin', async () => {
  try {
    const theme = await AsyncStorage.getItem('themeAdmin');
    console.log("themAdmin", theme);
    return theme ? JSON.parse(theme) : initialStateTheme;
  } catch (error) {
    console.error('Error loading theme from AsyncStorage:', error);
    return initialStateTheme;
  }
});

const themeSlice = createSlice({
  name: 'themeAdmin',
  initialState: initialStateTheme,
  reducers: {
    changeTheme: (state, action) => {
      const {background} = action.payload;
      state.background = background;
      saveThemeToStorage({background});
    },
  },
  extraReducers: builder => {
    builder.addCase(loadTheme.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
