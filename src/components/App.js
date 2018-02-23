import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import addPropsToRoute from './addPropsToRoute';
import Start from './Start';
import Trivia from './Trivia';
import Results from './Results';

import { fetchQuestions } from '../actions';

class App extends Component {
	state = { ready: false };
	componentWillMount() {
		this.props.fetchQuestions();
	}

	render() {
		const { questions, results } = this.props;
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Start} />

						<Route
							exact
							path="/trivia"
							component={addPropsToRoute(Trivia, { questions })}
						/>
						<Route
							exact
							path="/results"
							component={addPropsToRoute(Results, { results })}
						/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
const mapStateToProps = state => {
	const { questions, results } = state;
	return { questions, results };
};

export default connect(mapStateToProps, { fetchQuestions })(App);
