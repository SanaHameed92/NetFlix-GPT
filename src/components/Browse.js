import React from 'react'
import Header from './Header'
import useNowPlayinMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {


  useNowPlayinMovies();

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