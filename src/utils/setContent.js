import Spinner from '../components/spinner';
import ErrorMessage from '../components/errorMessage';

const setContent = (process, Component, data) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
			break;
		case 'loading':
			return <Spinner />;
			break;
		case 'confirmed':
			return <Component data={data} />;
			break;
		case 'error': return <ErrorMessage />;
			break;
		default:
			throw new Error('Unexpected process state')
	}
}

export default setContent;