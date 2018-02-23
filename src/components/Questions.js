import React from 'react';

const Questions = ({ question, onCheck }) => {
	let getOptions = () => {
		let options = [];
		options.push(question.correct_answer);
		question.incorrect_answers.forEach(answer => {
			options.push(answer);
		});
		return options.map((option, index) => {
			return (
				<div className="form-check" key={index}>
					<label className="form-check-label">
						<input
							type="radio"
							className="form-check-input"
							name={`options${question.id}`}
							id={`${question.id}`}
							onChange={onCheck}
							value={option}
						/>
						{option}
					</label>
				</div>
			);
		});
	};

	let getQuestion = () => {
		let tmp = document.createElement('DIV');
		tmp.innerHTML = question.question;
		let text = tmp.textContent || tmp.innerText || '';
		return <h4>{text}</h4>;
	};

	return (
		<div>
			<br />
			{getQuestion()}
			{getOptions()}

			<hr />
		</div>
	);
};

export default Questions;
