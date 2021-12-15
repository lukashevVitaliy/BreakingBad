import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './page404.scss';

const Page404 = () => {
	return (
		<div className="page404">
			<Helmet>
				<meta
					name="description"
					content="Breaking Bad information portal - page 404"
				/>
				<title>Page 404</title>
			</Helmet>


			<div className="page404__box">
				<h2 className="page404__title">404 error</h2>
				<Link to='/' className="page404__link">It's not our way, go back.</Link>
			</div>
		</div>
	)
}

export default Page404;