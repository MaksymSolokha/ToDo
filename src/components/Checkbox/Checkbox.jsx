import React from 'react';
import check from '../../img/check.svg';
import './Checkbox.scss';

function Checkbox({ id, checked, onClick }) {
	return (
		<div className="checkbox">
			<label className={`checkbox__label ${checked && 'checked'}`} htmlFor={`checked_${id}`}>
				<input onChange={onClick} id={`checked_${id}`} type="checkbox" checked={checked} className="checkbox__label__input" />
				<img src={check} alt="" className={`checkbox__label__img ${checked && 'checked'}`} />
			</label>
		</div>
	);
}

export default Checkbox;
