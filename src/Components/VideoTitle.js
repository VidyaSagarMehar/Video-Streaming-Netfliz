import React from 'react';

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video h-screen pt-[15%] px-12 absolute text-white bg-gradient-to-tr from-black ">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview.slice(0, 100)}</p>
			<div className="">
				<button className="bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg ">
					▶️Play
				</button>
				<button className=" ml-1 bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg ">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
