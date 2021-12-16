import useBreakingBadService from '../../services/BreakingBadService';
import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';
import './randomChar.scss';

const RandomChar = () => {
	const [char, setChar] = useState({});

	const { clearError, process, setProcess, getCharacter } = useBreakingBadService();

	useEffect(() => {
		updateChar();
		// const timerId = setInterval(updateChar, 60000);

		// return () => {
		// 	clearInterval(timerId);
		// }
	}, [])

	const updateChar = () => {
		clearError();
		const char_id = Math.floor(Math.random() * (57 - 1) + 1);
		getCharacter(char_id)
			.then(onCharLoaded)
			.then(() => setProcess('confirmed'))
	}

	const onCharLoaded = (char) => {
		setChar(char);
	}

	return (
		<div className="random-char">

			{setContent(process, View, char)}

			<div className="random-char__choice">
				<div className="random-char__choice-desc">
					Random character for today! <br />
					Do you want to get to know him better?
					<p>Or choose another one</p>
				</div>
				<button
					className="btn btn__rch" type="button"
					onClick={updateChar}
				>Update</button>
			</div>
		</div>
	)
}

const View = ({ data }) => {
	const { name, birthday, occupation, img } = data;
	return (
		<div className="random-char__item">
			<div className="random-char__image">
				<img src={img} alt={name} />
			</div>
			<div className="random-char__desc">
				<p className="random-char__desc-info">Сharacters information:</p>
				<p className="random-char__desc-name">name:
					<span> <br />{name}</span></p>
				<p className="random-char__desc-birthday">birthday:
					<span> <br />{birthday}</span></p>
				<p className="random-char__desc-occupation">occupation:
					<span> <br />{occupation}</span>
				</p>
			</div>
		</div>
	)
}

export default RandomChar;