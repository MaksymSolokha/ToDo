import React from 'react';
import plus from '../../img/plus.svg';
import './Newtask.scss';

function Newtask({ onChange, onClick, value }) {
	const handleChange = (e) => { onChange(e.target.value); };

	return (
		<div className="newtask">
			<input onChange={handleChange} value={value} type="text" className="newtask__input" placeholder="New task" />
			<button className="newtask__button" type="button" onClick={onClick}>
				Add
				{' '}
				<img src={plus} alt="" />
			</button>
		</div>
	);
}

export default Newtask;
