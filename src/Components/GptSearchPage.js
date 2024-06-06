import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { bgImage } from '../utils/constant';

const GptSearchPage = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img src={bgImage} alt="background-img" />
			</div>
			<GptSearchBar />
			<GptMovieSuggestions />
		</div>
	);
};

export default GptSearchPage;
