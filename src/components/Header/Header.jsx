import React from 'react';
import './Header.scss';
import rocket from '../../img/rocket.svg';

function Header() {
	return (
		<div className="header">
			<img src={rocket} alt="" className="header__logo" />
			<h1 className="header__title">
				to
				<span>do</span>
			</h1>
		</div>
	);
}

export default Header;
