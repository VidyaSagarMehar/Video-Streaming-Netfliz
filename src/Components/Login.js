import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleButtonClick = () => {
		// validate the form data
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);

		if (message) return;

		// sign in/ sign up logic

		if (!isSignInForm) {
			// Sign Up Logic

			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					const user = userCredential.user;
					//once signed up, updating the user profile
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: 'https://avatars.githubusercontent.com/u/92782806?v=4',
					})
						.then(() => {
							// Profile updated!
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								}),
							);
							console.log(user);
						})
						.catch((error) => {
							// An error occurred
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		} else {
			// Sign in Logic

			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value,
			)
				.then((userCredential) => {
					const user = userCredential.user;
					// console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + '-' + errorMessage);
				});
		}
	};

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
			<form
				onSubmit={(e) => e.preventDefault()}
				className=" flex flex-col rounded bg-opacity-75 p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0"
			>
				<h1 className="font-bold text-3xl py-4 text-white">
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-2 m-2"
					/>
				)}
				<input
					ref={email}
					type="email"
					placeholder="Email Adress"
					className="p-2 m-2"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-2 m-2"
				/>
				<p className="text-red-500 font-semibold text-lg p-2">{errorMessage}</p>
				<button
					className="p-4 m-4 text-white bg-red-700 rounded"
					onClick={handleButtonClick}
				>
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
