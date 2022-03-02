import Image from 'next/image'
import React from 'react'
import { moviePosterEndpoint } from '../config'
import ReactStars from 'react-rating-stars-component';
import Link from 'next/link';

const Movie = ({movie}) => {
  return (
      <Link href= {`/movie/trending/${movie.id}`}>
          <div className='bg-neutral-300 shadow-md m-8 p-8 rounded-xl max-w-sm'>
            <span className='bg-neutral-700 rounded-full px-2 font-lobster text-orange-400'>TRENDING MOVIE</span>
            <Image
                src = {`${moviePosterEndpoint}${movie.poster_path}`}
                width = {700}
                height = {800}
                className = "rounded"
            />
            <div className='mt-4'>
                <h3 className='text-center font-bold text-xl'>
                    {movie.title || movie.original_title || movie.original_name} 
                </h3>
                <div className='text-center'>
                    <ReactStars
                        count={5}
                        value = {Math.round(movie.vote_average / 2)}
                        size={24}
                        activeColor="rgb(249 115 22)"
                        edit= {false}                   
                    />
                </div>
                <div className='relative pb-6'>
                    <p className='text-ellipsis overflow-hidden'>
                        {`${movie.overview.substr(0, 100)} ...`}
                    </p>
                    <button className='py-1 px-8 rounded-full bg-neutral-400 hover:bg-neutral-100 transition-all duration-300 font-extrabold text-xl absolute bottom-0 right-4'>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
      </Link>
  )
}

export default Movie