import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white  text-black px-12 p-4 text-xl rounded-md hover:bg-gray-200 '> ▶ PLAY</button>
            <button className='bg-gray-500  text-white px-12 p-4 text-xl bg-opacity-50 rounded-md mx-2'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;