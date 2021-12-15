import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import useBreakingBadService from '../../services/BreakingBadService';
import ErrorMessage from '../errorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
	const [char, setChar] = useState(null);
	const { loading, error, clearError, getCharacterByName } = useBreakingBadService();

	const updateChar = (name) => {
		console.log(char);
		clearError();
		getCharacterByName(name)
			.then(onCharLoaded)
	}

	const onCharLoaded = (char) => {
		setChar(char)
	}

	const errorMessage = error ? <ErrorMessage /> : null;

	const results = !char ? null : char.length > 0 ?
		<div className="char__search-inner">
			<p className="char__search-success">Сharacter found.</p>
			<Link to={`/characters/${char[0].char_id}`} className="btn btn__sv">View</Link>
		</div > :
		<div className="char__search-error">
			The character was not found. Check the name and try again
		</div>;

	return (
		<div className="char__search-form">
			<Formik
				initialValues={{
					charName: ''
				}}
				validationSchema={Yup.object({
					charName: Yup.string().required('This field is required')
				})}
				onSubmit={({ charName }) => {
					updateChar(charName);
				}} >
				<Form>
					<label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
					<div className="char__search-wrap">
						<Field
							id="charName"
							name="charName"
							type="text"
							placeholder="Enter name"

						/>
						<button
							type="submit"
							className="btn btn__csn"
							disabled={loading}
						>Search</button>
					</div>
					<FormikErrorMessage component='div' className='char__search-error' name='charName' />
				</Form>
			</Formik>
			{results}
			{errorMessage}
		</div>
	)
}

export default CharSearchForm;