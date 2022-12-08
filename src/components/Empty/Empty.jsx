import React from 'react';
import empty from '../../img/empty.svg';
import './Empty.scss';

function Empty() {
	return (
		<div className="empty">
			<img src={empty} alt="" />
			<div className="empty__text">
				<span>
					{`You don't have any registered tasks yet.
					Create tasks and organize your affairs`}
				</span>
			</div>
		</div>
	);
}

export default Empty;
