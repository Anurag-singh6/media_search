import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../redux/features/searchSlice.js";
import collectionReducer from "../redux/features/collectionSlice.js";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});
