import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {useAppDispatch} from "./hooks";

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        id: '',
        transactionId: '',
        description: '',
        amount: 0,
        currency: '',

    },
    reducers: {

    }
})