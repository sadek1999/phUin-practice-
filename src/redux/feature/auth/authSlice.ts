import { createSlice } from "@reduxjs/toolkit";


type TInitialState={
    user:null|object,
    token:null|string
}

const initialState:TInitialState={
    user:null,
    token:null
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{}
})