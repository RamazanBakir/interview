import { configureStore } from '@reduxjs/toolkit';
import branchesReducer from './branchSlice';

const store = configureStore({
    reducer: {
        branches: branchesReducer,
    },
});

export default store;
