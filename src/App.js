import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import {
// 	increment,
// 	decrement,
// 	increaseAmt,
// } from "./redux/slices/counterSlices";

// import {
// 	increment,
// 	decrement,
// 	increaseByAmt,
// } from "./redux/slices/counterSlices_improved";

import { fetchPost } from "./redux/slices/counterSlices";
import { useEffect } from "react";
function App() {
	// const dispatch = useDispatch();
	// const counter = useSelector((state) => state?.counter);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPost());
	}, []);

	//select store state
	const post = useSelector((state) => state?.post);
	const { postList, loading } = post;
	return (
		<div className="App">
			{/* <h1>Redux Tool kit Counter </h1>
			<h2>Counter: {counter.value}</h2>
			<button onClick={() => dispatch(increment())}>ADD</button>
			<button onClick={() => dispatch(decrement())}>MINUS</button>
			<button onClick={() => dispatch(increaseByAmt(3))}>Inc By Amt</button> */}
			<h1>Post App</h1>
			<hr />
			{loading ? (
				<h2>Loading .......</h2>
			) : (
				postList?.map((post) => {
					return (
						<>
							<div>
								<h3>TITLE : 🚀 {post.title}</h3>
								<p>
									<b>DESCRIPTION : ✅</b> {post.body}
								</p>
							</div>
							<hr />
						</>
					);
				})
			)}
		</div>
	);
}

export default App;
