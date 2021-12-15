import { Helmet } from 'react-helmet';

import './mainPage.scss';
import mainPage from '../../../resources/img/main-page.jpg';


const MainPage = () => {
	return (
		<div className="main-page">
			<Helmet>
				<meta
					name="description"
					content="Breaking Bad information portal"
				/>
				<title>Breaking Bad</title>
			</Helmet>

			<img src={mainPage} alt="home screen" />
		</div>
	)
}

export default MainPage;
