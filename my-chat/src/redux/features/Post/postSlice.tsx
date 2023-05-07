import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState{
  post:string;
}
const initialState: UserState={
    post:''
}
export const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:(state, action:PayloadAction<string>)=>{
            state.post=action.payload;
        },
    }
})

export const {addPost}=postSlice.actions;
export const postSelector=(state:UserState)=>state.post;
export default postSlice.reducer;