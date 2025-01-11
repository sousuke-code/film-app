"use client";

import { useState, useEffect } from "react";
import { GET } from "@/app/api/movies/upcoming/route";

import React from "react";

const UpComingMovies = () => {
  type Movie = {
    poster_path: string;
    // Add other properties if needed
  };

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getUpcomingMovies = async() => {
        try {
           const res = await GET();
           const data = await res.json();
           setMovies(data.data.results);
        } catch (error) {
           console.error('failed to catch data', error);
        }
    }
    getUpcomingMovies();
  }, [])

  return (
    <>
     {movies.map((movie) => {
        return (
            <div className="m-4 relative">
               <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
        )
     })}
    </>
  );
};

export default UpComingMovies;
