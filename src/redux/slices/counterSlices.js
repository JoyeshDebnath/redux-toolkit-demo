// import { createAction, createReducer } from "@reduxjs/toolkit";

// export const increment = createAction("increment/counter"); //increment action
// export const decrement = createAction("decrement/counter"); //decrement action
// export const increaseAmt = createAction("incByAmt/increment");
// //reducer
// //1. using Builder Notations
// const initialState = {
// 	value: 0,
// };

// export const counterSlices = createReducer(initialState, (builder) => {
// 	builder.addCase(increment, (state, action) => {
// 		state.value++;
// 	});

// 	builder.addCase(decrement, (state, action) => {
// 		state.value--;
// 	});

// 	builder.addCase(increaseAmt, (state, action) => {
// 		state.value += action.payload;
// 	});
// });

//create async thunk demo
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//step 1 : create actions
export const fetchPost = createAsyncThunk(
	"post/list",
	async (payload, { rejectedValue, getState, dispatch }) => {
		//handle all api calls here
		try {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			); //make a call to api endpoint
			//return response
			return data;
		} catch (error) {
			return error?.response;
		}
	}
);

//step 2 :slices
const postSlices = createSlice({
	name: "post",
	initialState: {},
	extraReducers: (builder) => {
		//handle pending state
		builder.addCase(fetchPost.pending, (state, action) => {
			state.loading = true;
		});
		//handle fulfilled
		builder.addCase(fetchPost.fulfilled, (state, action) => {
			state.loading = false;
			state.postList = action.payload; //whatever our acytiom is returning ... in my case it is the [data]
		});
		//handle rejection
		builder.addCase(fetchPost.rejected, (state, action) => {
			state.loading = false;
			state.postList = null;
			state.error = action.payload;
		});
	},
});

//export the reducer

export default postSlices.reducer;
