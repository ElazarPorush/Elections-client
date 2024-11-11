import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { candidatesState, DataStatus } from "../../types/redux";
import { ICandidate } from "../../types/candidate";

const initialState: candidatesState = {
    error: null,
    status: DataStatus.IDLE,
    candidates: []
}

export const fetchCandidates = createAsyncThunk('candidates/list',
    async (_, thunkApi) => {
        try {
            const res = await fetch("http://localhost:8200/api/candidates/", {
                headers:{
                    "authorization": JSON.parse(localStorage.getItem("authorization")!)
                }
            })
            if (!res.ok) {
                thunkApi.rejectWithValue("Can't get the list, please try again")
            }
            const data = await res.json()
            // thunkApi.fulfillWithValue(data)
            return data
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)

const candidatesSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<candidatesState>) => {
        builder.addCase(fetchCandidates.pending, (state) => {
            state.status = DataStatus.LOADING
            state.error = null
            state.candidates = []
        }).addCase(fetchCandidates.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS
            state.error = null
            state.candidates = action.payload as unknown as ICandidate[]
        }).addCase(fetchCandidates.rejected, (state, action) => {
            state.status = DataStatus.LOADING
            state.error = action.error as string
            state.candidates = null
        })
    }
})

export default candidatesSlice