import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter"); //increment action
export const decrement = createAction("decrement/counter"); //decrement action
export const increaseAmt = createAction("incByAmt/increment");
//reducer
//1. using Builder Notations
const initialState = {
	value: 0,
};

export const counterSlices = createReducer(initialState, (builder) => {
	builder.addCase(increment, (state, action) => {
		state.value++;
	});

	builder.addCase(decrement, (state, action) => {
		state.value--;
	});

	builder.addCase(increaseAmt, (state, action) => {
		state.value += action.payload;
	});
});
