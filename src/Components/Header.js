import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate('/error');
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					}),
				);
				navigate('/browse');
			} else {
				dispatch(removeUser());
				navigate('/');
			}
		});

		// unsubscribe while unmounting
		return () => unsubscribe();
	}, []);

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img className="w-48" src={LOGO} alt="logo" />
			{user && (
				<div className="flex">
					<img
						className="w-12 h-12 rounded-full mt-4 p-2"
						src={user.photoURL}
						alt="user-logo"
					/>
					<button onClick={handleSignOut} className="text-red-700 font-bold">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
