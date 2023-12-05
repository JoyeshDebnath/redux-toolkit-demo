//setup store
import { configureStore } from "@reduxjs/toolkit";
// import { counterSlices } from "../slices/counterSlices";
import counterReducer from "../slices/counterSlices_improved";

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export default store;
