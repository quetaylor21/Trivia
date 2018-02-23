import React, { Component } from 'react';
import Questions from './Questions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getScore } from '../actions';

class Trivia extends Component {
	state = { answers: {}, elapsed: 0, start: new Date(), error: '' };
	static contextTypes = {};
	componentDidMount() {
		console.log('context', this.context);
		this.timer = setInterval(this.tick, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick = () => {
		this.setState({
			elapsed: Math.round((new Date() - this.state.start) / 100) / 10
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const questionAmount = this.props.questions.length;
		const answered = Object.keys(this.state.answers).length;
		if (questionAmount === answered) {
			this.props.getScore(this.props.questions, this.state, () => {
				this.props.history.push("/results");
			});
		} else {
			this.setState({ error: 'You must answer all the questions' });
		}
	};

	getQuestions = () => {
		return this.props.questions.map(question => {
			return (
				<Questions
					key={question.id}
					question={question}
					onCheck={this.onCheck}
				/>
			);
		});
	};

	onCheck = e => {
		const { id, value } = e.target;
		this.setState({
			answers: { ...this.state.answers, [id]: value },
			error: ''
		});
	};

	renderTime = () => {
		let seconds = this.state.elapsed;
		let minutes = Math.floor(seconds / 60);
		let remainingSeconds = seconds % 60;
		if (remainingSeconds < 10) {
			remainingSeconds = '0' + remainingSeconds;
		}

		if (seconds < 60) {
			return <div>{seconds} seconds have passed</div>;
		} else {
			return (
				<div>
					{minutes}:{remainingSeconds} has passed
				</div>
			);
		}
	};

	render() {
		if (!this.props.questions) {
			return <div> ...Loading</div>;
		}
		return (
			<div>
				<div className="container">
					<div className="page-header text-center">
						<h1>Trivia</h1>
						{this.renderTime()}
					</div>
				</div>
				<div
					className="container"
					style={{ marginTop: ' 30px', border: '2px solid #f3f3f3' }}
				>
					<div className="row">
						<div className="col-md-12">
							<form onSubmit={this.handleSubmit}>
								{this.getQuestions()}
								<div className="text-center" style={{ paddingBottom: '15px' }}>
									<button type="submit" className="btn btn-primary">
										Submit
									</button>
									<div style={{ color: 'red', fontSize: '15px' }}>
										{this.state.error}
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { getScore })(withRouter(Trivia));
