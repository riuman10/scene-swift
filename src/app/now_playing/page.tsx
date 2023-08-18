"use client"
import { useState , useEffect } from "react"
import RightBar from "../components/global/RightBar";

type movieObject = { 
  id : string,
  title : String,
}

export default function NowPlaying() {
  const [data , setData] = useState<any>()
  async function getPlayingMovies() {
    const API = `3a892626a8d2f75bafc171baaa803033`
    const response = await fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${API}`)
    const movies = await response.json();
    setData(movies.results);
  }
  useEffect(() => {
    getPlayingMovies();
  },[])
  return (
   <div className='h-[200vh] flex '>
    <p>MMMM</p>
    <div>
      {
        data && data.map((item : movieObject) => (
          <div key = {item.id}>
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
    <RightBar 
    />
   </div>
  )
}
