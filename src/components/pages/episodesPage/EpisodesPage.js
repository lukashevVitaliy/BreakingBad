import { useState, useEffect } from 'react';
import useBreakingBadService from '../../../services/BreakingBadService';
import { Helmet } from 'react-helmet';
import setContent from '../../../utils/setContent';

import './episodesPage.scss';


const EpisodesPage = () => {
	const [episList, setEpisList] = useState([]);

	const { process, setProcess, getAllEpisodes } = useBreakingBadService();

	useEffect(() => {
		getAllEpisodes()
			.then(onEpisListLoaded)
			.then(() => setProcess('confirmed'))
	}, [])

	const onEpisListLoaded = (episList) => {
		setEpisList(episList);
	}

	function itemRender(arr) {
		const items = arr.map((item) => {
			return (
				<li
					className="episodes__item"
					key={item.episode_id}
					tabIndex={0}
				>
					<p className="episodes__item-title">title:
						<span> {item.title}</span>
					</p>
					<p className="episodes__item-season">season:
						<span> {item.season}</span>
					</p>
					<p className="episodes__item-data">air data:
						<span> {item.air_date}</span>
					</p>
					<p className="episodes__item-characters">characters:
						<span> {item.characters}</span>
					</p>
					<p className="episodes__item-episode">episode:
						<span> {item.episode}</span>
					</p>
					<p className="episodes__item-series">series:
						<span> {item.series}</span>
					</p>
				</li>
			)
		})
		return (
			<>
				<Helmet>
					<meta
						name="description"
						content="Episodes Breaking Bad information portal"
					/>
					<title>Episodes page</title>
				</Helmet>

				<ul className="episodes__wrap">
					{items}
				</ul>
			</>
		)
	}

	return (
		<div className="episodes">
			<h2 className="episodes__title">Episodes list</h2>

			{setContent(process, () => itemRender(episList))}

		</div>
	)
}

export default EpisodesPage;