import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSingInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background-img"
				/>
			</div>
			<form className=" flex flex-col rounded bg-opacity-75 p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0">
				<h1 className="font-bold text-3xl py-4 text-white">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input type="text" placeholder="Full Name" className="p-2 m-2" />
				)}
				<input type="email" placeholder="Email Adress" className="p-2 m-2" />
				<input type="password" placeholder="Password" className="p-2 m-2" />
				<button className="p-4 m-4 text-white bg-red-700 rounded">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p
					className="text-white font-semibold cursor-pointer"
					onClick={toggleSingInForm}
				>
					{isSignInForm
						? 'New to Netflix? Sign Up Now'
						: 'Already Registered? Sign In Now'}
				</p>
			</form>
		</div>
	);
};

export default Login;
