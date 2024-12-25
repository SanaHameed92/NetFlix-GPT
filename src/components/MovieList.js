import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
    // if (!movies || movies.length === 0) {
    //     return <p>No movies available</p>;
    //   }
    
  return (
    <div >
      <h1 className="text-white text-3xl p-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar  px-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList