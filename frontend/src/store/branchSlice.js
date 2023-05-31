import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tüm Branchları getirmek için
export const fetchAllBranches = createAsyncThunk(
    'branches/fetchAllBranches',
    async () => {
        console.log("deneme")
        const response = await axios.get('/api/branches');
        return response.data;
    }
);

// Branch oluşturmak için
export const createBranch = createAsyncThunk(
    'branches/createBranch',
    async (branchData) => {
        const response = await axios.post('/api/branches', branchData);
        return response.data;
    }
);

// Slice oluşturduk
const branchesSlice = createSlice({
    name: 'branches',
    initialState: {
        branches: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBranches.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllBranches.fulfilled, (state, action) => {
                state.loading = false;
                state.branches = action.payload;
            })
            .addCase(fetchAllBranches.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createBranch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBranch.fulfilled, (state, action) => {
                state.loading = false;
                state.branches.push(action.payload);
            })
            .addCase(createBranch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default branchesSlice.reducer;
