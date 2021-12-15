import RandomChar from '../../randomChar';
import CharList from '../../charList';
import RandomQuotes from '../../randomQuotes';
import CharSearchForm from '../../CharSearchForm';
import ErrorBoundaries from '../../errorBoundaries';
import { Helmet } from 'react-helmet';

import './charactersPage.scss';

const CharactersPage = () => {
	return (
		<div className="characters">
			<Helmet>
				<meta
					name="description"
					content="Breaking Bad information portal"
				/>
				<title>Characters page</title>
			</Helmet>


			<ErrorBoundaries>
				<RandomChar />
			</ErrorBoundaries>
			<div className="characters__wrapper">
				<ErrorBoundaries>
					<CharList />
				</ErrorBoundaries>
				<div>
					<ErrorBoundaries>
						<CharSearchForm />
					</ErrorBoundaries>
					<ErrorBoundaries>
						<RandomQuotes />
					</ErrorBoundaries>
				</div>
			</div>
		</div>
	)
}

export default CharactersPage;