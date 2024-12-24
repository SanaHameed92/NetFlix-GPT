import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="min-w-[200px] h-[300px]  mx-2 flex-shrink-0">
        <img className='w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out' alt="movie-card"
        src = {IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard