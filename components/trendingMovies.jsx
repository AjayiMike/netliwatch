import React from 'react'
import Movie from './movie'

const TrendingMovies = ({movies}) => {
    console.log(movies)
  return (
    <div className='bg-orange-500 p-8 md:py-16 md:px-24'>
        <h2 className = 'text-neutral-900 font-extrabold text-2xl'>
            What's currently trending!
        </h2>
        <div className='grid grid-gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {movies.map((movie, index) => <Movie key = {index} movie = {movie} /> )}
        </div>
    </div>
  )
}

export default TrendingMovies