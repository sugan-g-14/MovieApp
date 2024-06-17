import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  movie_name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <div
        className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl ml-5 hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveFromWatchlist(movieObj)}
            className="m-4 flex jsutify-center h-8 w-8 items-center rounded-lg"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(movieObj)}
            className="m-4 flex jsutify-center h-8 w-8 items-center rounded-lg"
          >
            &#128525;
          </div>
        )}
        <div className="text-white  text-xl w-full p-2  text-center bg-gray-900/60 ">
          {movie_name}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
