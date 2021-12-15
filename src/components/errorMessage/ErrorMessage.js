import './errorMessage.scss';
import error from './error.jpg';

const ErrorMessage = () => {
	return (
		<div className="error-mesage">
			<img className="error-mesage__img" src={error} alt="error" />
		</div>
	)
}

export default ErrorMessage;