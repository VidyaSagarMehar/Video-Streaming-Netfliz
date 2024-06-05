import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
	// fetching the nowPlayingMovie and polularMovies and updating the store
	useNowPlayingMovies();
	usePopularMovies();

	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
			{/* 
			MainContainer
				- video container
				- video title
			Secondary container
				-moviList * n
				-cards * n
			 */}
		</div>
	);
};

export default Browse;
