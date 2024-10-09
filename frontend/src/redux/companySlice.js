import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "Company",
    initialState:{
        singleCompany:null,
    },
    reducers:{
        //action
        setSingleCompany:(state,action)=>
            state.singleCompany = action.payload
    }
});

export const{setSingleCompany} = companySlice.actions;
export default companySlice.reducer;