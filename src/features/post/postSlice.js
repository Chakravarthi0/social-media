import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPostModal: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    openPostModal: (state) => {
      state.showPostModal = true;
    },
    closePostModal: (state) => {
      state.showPostModal = false;
    },
  },
});

export default postSlice.reducer;

export const { closePostModal, openPostModal } = postSlice.actions;
