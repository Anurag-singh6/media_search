import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collections")) || [],
};
export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alredyExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!alredyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collections", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collections", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collections");
    },
    addToast: () => {
      toast.success("Added to Collection ✅", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("❌ Removed from Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
    clearToast: () => {
      toast.error("❗All Collections Cleared", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addToast,
  removeToast,
  clearToast
} = collectionSlice.actions;

export default collectionSlice.reducer;
