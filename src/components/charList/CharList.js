import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useBreakingBadService from '../../services/BreakingBadService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './charList.scss';


const setContent = (process, Component, newItemLoading) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
			break;
		case 'loading':
			return newItemLoading ? <Component /> : <Spinner />;
			break;
		case 'confirmed':
			return <Component />;
			break;
		case 'error': return <ErrorMessage />;
			break;
		default:
			throw new Error('Unexpected prosess state')
	}
}


const CharList = () => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [charEnded, setCharEnded] = useState(false);

	const { process, setProcess, getAllCharacters } = useBreakingBadService();

	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'))
	}

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList < 8) {
			ended = true;
		}

		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 8);
		setCharEnded(ended);
	}

	const itemRefs = useRef([]);

	const focusOnItem = (id) => {
		itemRefs.current.forEach(item => item.classList.remove('char-list__item-active'));
		itemRefs.current[id].classList.add('char-list__item-active');
		itemRefs.current[id].focus();
	}

	function renderItems(arr) {
		const items = arr.map((item, i) => {
			return (
				<li
					className="char-list__item"
					key={item.char_id}
					tabIndex={0}
					ref={el => itemRefs.current[i] = el}
					onClick={() => focusOnItem(i)}
					onKeyPress={(e) => {
						if (e.key === ' ' || e.key === "Enter") {
							focusOnItem(i);
						}
					}}
				>
					<Link to={`/characters/${item.char_id}`} className="char-list__item-link">
						<img className="char-list__item-image" src={item.img} alt={item.name} />
						<div className="char-list__item-name">{item.name}</div>
					</Link>
				</li>
			)
		})
		return (
			<ul className="char-list__list">
				{items}
			</ul>
		)
	}

	return (
		<div className="char-list">

			{setContent(process, () => renderItems(charList), newItemLoading)}

			<button
				className="btn btn__cl"
				disabled={newItemLoading}
				style={{ 'display': charEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}
			>Loading</button>
		</div>
	)
}

export default CharList;