import React from 'react'
import Header from './Header'
import useNowPlayinMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayinMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
        <Header/>
        
        {showGptSearch ?(       
          <GPTSearch/> ):
          (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )}
    </div>
  );
};

export default Browse