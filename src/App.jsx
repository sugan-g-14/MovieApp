import Banner from "./components/Banner";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {

  let [watchlist,setWatchList]=useState([])

  let handleAddtoWatchlist =(movieObj)=>{
    let newWatchList = [...watchlist,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
  }

  let handleRemoveFromWatchlist = (movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))
    setWatchList(filteredWatchlist)
  }

  useEffect(()=>
  {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> 
                <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList  watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
