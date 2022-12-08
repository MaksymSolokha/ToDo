import React from 'react';
import trash from '../../img/trash.svg';
import Checkbox from '../Checkbox/Checkbox';

import './Task.scss';

function Task({ items, deleteItem, toggle }) {
	return (
		<div className="tasks__all">
			{items.map(({ id, text, checked }) => (
				<div key={id} className="task">
					<Checkbox onClick={() => toggle(id)} id={id} checked={checked} />
					<div className={`task__text ${checked && 'checked'}`}>
						{text}
					</div>
					<button type="button" className="task__delete" onClick={() => deleteItem(id)}>
						<img src={trash} alt="" />
					</button>
				</div>
			))}
		</div>

	);
}

export default Task;
