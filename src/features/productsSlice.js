import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Staticdata from "../Staticdata.json";

const initialState = {
    items: [],
    status: null,
    error: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        return Staticdata.products;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload.products;
        });
        builder.addCase(productsFetch.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
    }
});

export default productsSlice.reducer;
