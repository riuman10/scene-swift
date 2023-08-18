/* eslint-disable react/no-children-prop */
"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import ImageSlider from "@/app/components/global/ImageSlider";
import Image from "next/image";
import Color from "color-thief-react";
import useDominantColor from "@/app/hooks/useDominantColor";
import { ReducerState, ArrayRGB } from "color-thief-react/lib/types";

interface MovieDetails {
  title: string;
  poster_path: string;
}

function MovieDetails({ params, searchParams }: any) {
  const [details, setDetails] = useState<MovieDetails | undefined>();
  const [posters, setPosters] = useState([]);
  const { dominantColor, canvasRef } = useDominantColor(`https://image.tmdb.org/t/p/w300/${details && details.poster_path}`);


  async function getMovieDetails() {
    const API = `3a892626a8d2f75bafc171baaa803033`;
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${params.id}?api_key=${API}`
    );
    const movie = await response.json();
    setDetails(movie);
  }

  async function getMovieImages() {
    const API = `3a892626a8d2f75bafc171baaa803033`;
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${API}`
    );
    const images = await response.json();
    console.log(images);
    setPosters(images.posters);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieImages();
  }, []);

  return (
    <div className="">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      ID: {params.id}

      {details && (
        <>
        <Color src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <p>lloooo</p>;
          return (
            <div>
              Predominant color: <strong className = "text-black">{data}</strong>
            </div>
          );
        }}
      </Color>
      <div 
      className="relative rounded-md  p-3 border-2"
      style = {{backgroundColor : dominantColor ? `${dominantColor}` : ""}}
      >
          <Image
            alt = {details.title}
            src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
            width="500"
            height="500"
            priority
            className="h-[480px] w-[400px] clippy"
          />
        </div>
        </>
      )}
      <div></div>
      <div className="container w-full columns-4 gap-3 mx-auto space-y-3">
        {/* {posters.map((item: any, index) => (
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
            key={index}
            className="break-inside-avoid rounded-xl"
          />
        ))} */}
      </div>
    </div>
  );
}

export default MovieDetails;
