import React from 'react';
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
	return (
		<div className="pt-[10%] flex justify-center">
			<form className="bg-black w-1/2 grid grid-cols-12 ">
				<input
					type="text"
					placeholder={lang.hin.gptSearchPlaceholder}
					className="p-4 m-4 col-span-9"
				/>
				<button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
					{lang.hin.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
