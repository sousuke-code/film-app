import React from 'react'

import PopularMovies from '@/components/movies/PopularMovies';
import UpComingMovies from '@/components/movies/UpComingMovies';

const Home = () => {
  return (
    <>
    <div className='flex justify-center items-center m-10 mb-0'>
        <h1 className='text-black  font-semibold text-2xl'>今注目の映画</h1>
    </div>
    <span className='flex justify-center items-center text-3xl font bold'>---</span>

    <div className=' grid grid-cols-3  lg:grid-cols-5 mb-10'>
        <PopularMovies />
    </div >

    <div className='mt-10'>
        <h1 className='text-black flex justify-center font-semibold text-2xl'>公開予定の映画</h1>
    </div>

    <span className='flex justify-center items-center text-3xl font bold'>---</span>

    <div className='mt-10 grid grid-cols-3 lg:grid-cols-5'>
        <UpComingMovies />
    </div>
  </>
  )
}

export default Home;


