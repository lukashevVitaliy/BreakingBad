import { useHttp } from "../hooks/http.hooks";

const useBreakingBadService = () => {
	const { loading, request, error, clearError, process, setProcess } = useHttp();


	const _apiBase = 'https://www.breakingbadapi.com/api/';
	const _baseOffset = 0;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}characters?limit=8&offset=${offset}`);
		return res.map(_transformCharacter);
	}
	const getCharacter = async (char_id) => {
		const res = await request(`${_apiBase}characters/${char_id}`);
		return _transformCharacter(res[0]);
	}
	const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}`);
		return res.map(_transformCharacter);
	}

	const getQuote = async (quote_id) => {
		const res = await request(`${_apiBase}quotes/${quote_id}`);
		return _transformQuote(res[0]);
	}
	const getAllEpisodes = async () => {
		const res = await request(`${_apiBase}episodes`);
		return res.map(_transformEpisode);
	}


	const _transformCharacter = (char) => {
		return {
			char_id: char.char_id,
			name: char.name,
			birthday: char.birthday,
			occupation: char.occupation ? char.occupation.join(', ') : null,
			img: char.img,
			status: char.status,
			nickname: char.nickname,
			appearance: char.appearance ? char.appearance.join(', ') : null,
			portrayed: char.portrayed,
			category: char.category,
			better_call_saul_appearance: char.better_call_saul_appearance ? char.better_call_saul_appearance.join(', ') : null
		}
	}
	const _transformQuote = (phrase) => {
		return {
			quote_id: phrase.quote_id,
			quote: phrase.quote,
			author: phrase.author,
			series: phrase.series
		}
	}
	const _transformEpisode = (epis) => {
		return {
			episode_id: epis.episode_id,
			title: epis.title,
			season: epis.season,
			episode: epis.episode,
			air_date: epis.air_date,
			characters: epis.characters ? epis.characters.join(', ') : null,
			series: epis.series
		}
	}

	return {
		loading,
		error,
		clearError,
		process,
		setProcess,
		getAllCharacters,
		getCharacter,
		getQuote,
		getAllEpisodes,
		getCharacterByName
	}
}

export default useBreakingBadService;