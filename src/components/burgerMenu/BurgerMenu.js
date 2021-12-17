import { Link } from 'react-router-dom';

import './burgerMenu.scss';


const BurgerMenu = ({ items, menuActive, setMenuActive }) => {


	return (
		<>
			<div
				className={menuActive ? "burger-menu active" : "burger-menu"}
				onClick={() => setMenuActive(false)}
			>
				<div
					className="burger-menu__block"
					onClick={e => e.stopPropagation()}
				>
					<div
						className="burger-menu__close"
						onClick={() => setMenuActive(false)}
					>&times;</div>
					<nav>
						<ul className="burger-menu__list">
							<li className="burger-menu__link">
								<Link to="/">Main</Link>
							</li>
							{
								items.map((item, i) =>
									<li key={i}
										className="burger-menu__link">
										<Link to={item.to}>{item.value}</Link>
									</li>
								)
							}
						</ul>
					</nav>
				</div>
				<div className="burger-menu__overlay"></div>
			</div>

			<div
				className="hamburger"
				onClick={() => setMenuActive(!menuActive)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default BurgerMenu;