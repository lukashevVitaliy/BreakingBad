import { Link } from 'react-router-dom';
import './burgerMenu.scss';

const BurgerMenu = () => {

	return (
		<>
			<div className="burger-menu">
				<div className="burger-menu__block">
					<div className="burger-menu__close">&times;</div>
					<nav>
						<ul className="burger-menu__list">
							<li className="burger-menu__link">
								<Link to="/">Main</Link>
							</li>
							<li className="burger-menu__link">
								<Link to="characters">Characters</Link>
							</li>
							<li className="burger-menu__link">
								<Link to="episodes">Episodes</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="burger-menu__overlay"></div>
			</div>

			<div className="hamburger">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default BurgerMenu;