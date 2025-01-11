"use client";

import { useEffect, useState } from "react";
import { GET } from "@/app/api/movies/popular/route";

const PopularMovies = () => {
  type Movie = {
    poster_path: string;
    // Add other properties if needed
  }

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
      const getPopularMovies = async() => {
        try {
            const res = await GET();
            const data = await res.json();
            setMovies(data.data.results);      
        } catch (error) {
            console.error('failed to cath data', error);
        }
      }
     getPopularMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="m-4 relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          </div>
        );
      })}
    </>
  );
};

export default PopularMovies;
