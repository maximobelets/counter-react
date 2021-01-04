import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inc, dec } from '../src/redux/actions/actions';

const App = () => {
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();

	return (
		<>
			<h3>{count}</h3>
			<button onClick={() => dispatch(inc())}>+</button>
			<button onClick={() => dispatch(dec())}>-</button>
		</>
	);
};

export default App;
