import React, { useEffect, useRef } from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);

	const handleGptSearchClick = async () => {
		console.log(searchText.current.value);

		// make an API call to GPT openai and get movie results
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: searchText.current.value }],
			model: 'gpt-3.5-turbo',
		});

		console.log(gptResults.choices);
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="bg-black w-1/2 grid grid-cols-12 "
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					placeholder={lang[langKey].gptSearchPlaceholder}
					className="p-4 m-4 col-span-9"
				/>
				<button
					className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
					onClick={handleGptSearchClick}
				>
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
