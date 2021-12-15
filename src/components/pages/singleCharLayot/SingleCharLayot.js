import useBreakingBadService from '../../../services/BreakingBadService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import setContent from '../../../utils/setContent';

import './singleCharLayot.scss';

const SingleCharLayot = () => {
	const { charId } = useParams();
	const [char, setChar] = useState({});

	const { clearError, process, setProcess, getCharacter } = useBreakingBadService();

	useEffect(() => {
		updateChar();
	}, [charId])

	const updateChar = () => {
		clearError();
		getCharacter(charId)
			.then(onCharLoaded)
			.then(() => setProcess('confirmed'))
	}

	const onCharLoaded = (char) => {
		setChar(char);
	}

	return (
		<div className="single-char">
			<Helmet>
				<meta
					name="description"
					content={`${char.name} character `}
				/>
				<title>{char.name}</title>
			</Helmet>

			{setContent(process, View, char)}
		</div>
	)
}

const View = ({ data }) => {
	const { img, name, birtday, occupation, status, nickname, appearance, portrayed, category, better_call_saul_appearance } = data;

	return (
		<>
			<div className="single-char__image">
				<img className="single-char__image-img" src={img} alt={name} />
			</div>
			<div className="single-char__desc">
				<h2 className="single-char__desc-title">Detailed information about the character</h2>
				<p className="single-char__desc-name">name: <span>{name}</span></p>
				<p className="single-char__desc-birtday">birthday: <span>{birtday}</span></p>
				<p className="single-char__desc-occupation">occupation: <span>{occupation}</span></p>
				<p className="single-char__desc-status">status: <span>{status}</span></p>
				<p className="single-char__desc-nickname">nickname: <span>{nickname}</span></p>
				<p className="single-char__desc-appearance">appearance: <span>{appearance}</span></p>
				<p className="single-char__desc-portrayed">portrayed: <span>{portrayed}</span></p>
				<p className="single-char__desc-category">category: <span>{category}</span></p>
				<p className="single-char__desc-better">better call saul appearance: <span>{better_call_saul_appearance}</span></p>
			</div>
		</>
	)
}

export default SingleCharLayot;