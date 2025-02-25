import { createSlice } from "@reduxjs/toolkit";

const FirstSlice=createSlice({
    name:"Doctor",
    initialState:{
        first:{}
    },
    reducers:{
        insert:(state,actions)=>{
            console.log("okk");
            console.log(actions.payload);
            state.first=actions.payload;
        },
        deleted:(state,actions)=>{
            console.log("delete")
        },
        show:(state,actions)=>{
            console.log("show");
        }       
    }
})

export default FirstSlice.reducer;
export const{insert,deleted,show}=FirstSlice.actions