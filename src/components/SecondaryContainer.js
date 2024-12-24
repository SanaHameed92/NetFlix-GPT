import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)
  return (
    movies && (
    <div className=' bg-black'>
     <div className='-mt-80 p-12 relative z-20'>
      <MovieList title = {"Now Playing"} movies = {movies.NowPlayingMovies}/>
      <MovieList title = {"Top Rated"} movies = {movies.TopRatedMovies}/>
      <MovieList title = {"Popular"} movies = {movies.PopularMovies}/>
      <MovieList title = {"Upcoming"} movies = {movies.UpcomingMovies}/>
    </div>
      
    </div>
    )
  )
}

export default SecondaryContainer