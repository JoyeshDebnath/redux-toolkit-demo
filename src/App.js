import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	increaseAmt,
} from "./redux/slices/counterSlices";

function App() {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state?.counter);
	console.log(counter);
	return (
		<div className="App">
			<h1>Redux Tool kit Counter </h1>
			<h2>Counter: {counter.value}</h2>
			<button onClick={() => dispatch(increment())}>ADD</button>
			<button onClick={() => dispatch(decrement())}>MINUS</button>
			<button onClick={() => dispatch(increaseAmt(3))}>Inc By Amt</button>
		</div>
	);
}

export default App;
