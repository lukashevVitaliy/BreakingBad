import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';
import logo from '../../resources/img/logo.png';

const AppHeader = () => {
	return (
		<header className="app__header">
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
					<li>
						<NavLink style={({ isActive }) => ({ color: isActive ? '#ffb841' : null })} to='characters'>Characters</NavLink>
					</li>
					<li>
						<NavLink style={({ isActive }) => ({ color: isActive ? '#ffb841' : null })} to='episodes'>Episodes</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;
