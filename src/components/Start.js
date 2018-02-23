import React from 'react';
import { Link } from 'react-router-dom';
const Start = () => {
	return (
		<div
			className="container align-middle"
			style={style.button}
		>
			<div className="row">
				<div className="col-md-12 text-center">
					<Link to={'/trivia'}>
						<button className="btn btn-primary">Start Quiz</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const style = {
	button: {
		position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-50px',
    width: '100px',
    height: '100px'
	}
}

export default Start;
