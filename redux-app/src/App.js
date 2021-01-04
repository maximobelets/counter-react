import React from 'react';
import { connect } from 'react-redux';
import { inc, dec } from '../src/redux/actions/actions';

const App = (props) => {
	return (
		<React.Fragment>
			<h3>{props.count}</h3>
			<button onClick={props.inc}>+</button>
			<button onClick={props.dec}>-</button>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		inc: () => dispatch(inc()),
		dec: () => dispatch(dec()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
