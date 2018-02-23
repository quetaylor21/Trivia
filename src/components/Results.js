import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ results }) => {
	let { score, time } = results;

	const renderTime = () => {
		let seconds = time;
		let minutes = Math.floor(seconds / 60);
		let remainingSeconds = seconds % 60;
		if (remainingSeconds < 10) {
			remainingSeconds = '0' + remainingSeconds;
		}

		if (seconds < 60) {
			return (
				<div className="card-footer text-muted">
					The test took you {seconds} seconds
				</div>
			);
		} else {
			return (
				<div className="card-footer text-muted">
					The test took you {minutes}:{remainingSeconds}
				</div>
			);
		}
	};
	return (
		<div className="container">
			<div className="card text-center">
				<div className="card-header">Results</div>
				<div className="card-block" style={{ marginTop: '20px' }}>
					<h4 className="card-title">SCORE</h4>
					<p className="card-text">You scored a {score}</p>
					<Link
						to={'/'}
						className="btn btn-primary"
						style={{ marginBottom: '20px' }}
					>
						Retake Test
					</Link>
				</div>
				{renderTime()}
			</div>
		</div>
	);
};


export default Results;
