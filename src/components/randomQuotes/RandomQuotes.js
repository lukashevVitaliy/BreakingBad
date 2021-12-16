import useBreakingBadService from '../../services/BreakingBadService';
import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';

import './randomQuotes.scss';

const RandomQuotes = () => {
	const [phrase, setPhrase] = useState({});

	const { clearError, process, setProcess, getQuote } = useBreakingBadService();

	useEffect(() => {
		updateQuote();

		// const timerId = setInterval(updateQuote, 61000);

		// return () => {
		// 	clearInterval(timerId);
		// }
	}, [])

	const updateQuote = () => {
		clearError();
		const quote_id = Math.floor(Math.random() * (31 - 1) + 1);
		getQuote(quote_id)
			.then(onQuoteLoaded)
			.then(() => setProcess('confirmed'))
	}

	const onQuoteLoaded = (phrase) => {
		setPhrase(phrase);
	}

	return (
		<div className="random-quotes">

			{setContent(process, View, phrase)}

			<button
				className="btn btn__rq"
				type="button"
				onClick={updateQuote}
			>Refresh</button>
		</div>
	)
}

const View = ({ data }) => {
	const { quote, author, series } = data;
	return (
		<div className="random-quotes__wrap">
			<h2 className="random-quotes__title">Character quotes:</h2>
			<p className="random-quotes__quote">"{quote}"</p>
			<p className="random-quotes__info"><span>{author},</span><br />
				series: {series}
			</p>
		</div>
	)
}

export default RandomQuotes;
