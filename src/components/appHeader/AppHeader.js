import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenu from '../burgerMenu';

import './appHeader.scss';
import logo from '../../resources/img/logo.png';

const AppHeader = () => {
	const [menuActive, setMenuActive] = useState(false);


	const items = [
		{ value: 'Characters', to: 'characters' },
		{ value: 'Episodes', to: 'episodes' }
	]

	return (
		<header className="app__header">
			<BurgerMenu
				items={items}
				menuActive={menuActive}
				setMenuActive={setMenuActive}
			/>
			<div className="app__header-logo">
				<Link to='/'>
					<div className="app__header-image">
						<img src={logo} alt="logo" />
					</div>
					<h1 className="app__header-title"><span>Breaking Bad</span> <br />
						infomation API</h1>
				</Link>
			</div>
			<nav className="app__menu">
				<ul>
					{
						items.map((item, i) =>
							<li key={i}>
								<NavLink style={({ isActive }) => ({ color: isActive ? '#ffb841' : null })} to={item.to}>{item.value}</NavLink>
							</li>
						)
					}
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
