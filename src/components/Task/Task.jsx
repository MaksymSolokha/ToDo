import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import trash from '../../img/trash.svg';
import Checkbox from '../Checkbox/Checkbox';

import './Task.scss';

function Task({ items, deleteItem, toggle }) {
	return (

		<TransitionGroup className="tasks__all">
			{items.map(({ id, text, checked }) => (
				<CSSTransition
					key={id}
					timeout={500}
					classNames="task"
				>
					<div className="task">
						<Checkbox onClick={() => toggle(id)} id={id} checked={checked} />
						<div className={`task__text ${checked && 'checked'}`}>
							{text}
						</div>
						<button type="button" className="task__delete" onClick={() => deleteItem(id)}>
							<img src={trash} alt="" />
						</button>
					</div>
				</CSSTransition>

			))}
		</TransitionGroup>

	);
}

export default Task;
