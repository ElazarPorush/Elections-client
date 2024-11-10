import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";
import { IUser } from "../../types/user";

const initialState: userState = {
    error: null,
    status: DataStatus.IDLE,
    user: null
}

const fetchLogin = createAsyncThunk('user/login',
    async (user : {username: string, password: string}, thunkApi) => {
        try {
            const res = await fetch("http://localhost:8200/api/users/login", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (!res.ok) {
                thunkApi.rejectWithValue("Can't login, please try again")
            }
            const data = await res.json()
            thunkApi.fulfillWithValue(data)
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)

const fetchRegister = createAsyncThunk('user/register',
    async (user : {username: string, password: string, isAdmin: boolean, }, thunkApi) => {
        try {
            const res = await fetch("http://localhost:8200/api/users/register", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (!res.ok) {
                thunkApi.rejectWithValue("Can't register, please try again")
            }
            const data = await res.json()
            thunkApi.fulfillWithValue(data)
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
        builder.addCase()
    }
})