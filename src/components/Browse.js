import React from 'react'
import Header from './Header'
import useNowPlayinMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {


  useNowPlayinMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div className="relative w-full h-full">
        <Header/>
        <div>
        <MainContainer/>
        <SecondaryContainer/>
        </div>
    </div>
  );
};

export default Browse