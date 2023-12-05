//setup store
import { configureStore } from "@reduxjs/toolkit";
// import { counterSlices } from "../slices/counterSlices";
// import counterReducer from "../slices/counterSlices_improved";
import postReducer from "../slices/counterSlices";

const store = configureStore({
	reducer: {
		post: postReducer,
	},
});

export default store;
