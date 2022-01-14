import { createSlice } from "@reduxjs/toolkit";

const initialState = { entities: [] };
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    set(state, action) {
      state.entities.push(action.payload);
    },
  },
});
const { actions, reducer: errorReducer } = errorSlice;
const { set } = actions;

export const setError = (message) => (dispatch) => {
  dispatch(set(message));
};

export const getError = () => (state) => state.errors.entities[0];

export default errorReducer;
