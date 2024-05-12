import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import WatchList from "./WatchList";

function Movies({handleAddtoWatchlist,handleRemoveFromWatchlist,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo,setPageNo]=useState(1);

  const handlePrev = ()=>{
    if(pageNo==1)
      {
        setPageNo(1);
      }
     else
      setPageNo(pageNo-1);
  }
  const handleNext =()=>{
    setPageNo(pageNo+1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d1b700fcacea8264d93047da45c5ec02&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      }, [pageNo]);
  });

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center  m-5 ">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8 ">
        {movies.map((movieObj) => {
          return (
            <MovieCard key={movieObj.id}
            movieObj={movieObj}
              poster_path={movieObj.poster_path}
              movie_name={movieObj.title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;
