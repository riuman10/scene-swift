"use client";
import { useState, useEffect } from "react";
import MovieCard from "./components/global/MovieCard";

export default function Home() {
  const [discoverMovies, setDiscoverMovies] = useState([]);

  async function getDiscoverMovies() {
    const API = `3a892626a8d2f75bafc171baaa803033`;
    const response = await fetch(
      ` https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&primary_release_year=2023&api_key=${API}`
    );
    const movies = await response.json();
    setDiscoverMovies(movies.results);
  }

  useEffect(() => {
    getDiscoverMovies();
  }, []);

  return (
    <div className="h-[200vh]">
      <p>Discover</p>

      <div className="mx-auto container grid grid-cols-3 gap-4 items-center">
        {discoverMovies &&
          discoverMovies.map((item : any, index) => (
           <MovieCard 
           key = {index}
           id = {item.id}
           title = {item.title}
           image={item.poster_path}
           overview={item.overview}
           />
          ))}
      </div>
    </div>
  );
}
