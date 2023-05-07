import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../redux/features/User/userSlice';
import postReduser from '../redux/features/Post/postSlice';
export const store= configureStore({
  reducer: {
    user:userReducer,
   post:postReduser,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch