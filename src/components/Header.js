// import icons
import React, { useState } from "react"
import axios from "axios";

const Header = (props) => {
  
  const { setMoviesData } = props;

  const searchMovie = async (searchItem) => {
    const url = `https://www.omdbapi.com/?apikey=1c747e85&s=${searchItem}`
    let { data } = await axios.get(url);
    if(data.Response === "True"){
      setMoviesData(data.Search)
    }
  }

  return (
    <header className="border-bottom">
      <div className="container">
        <div className="navbar d-flex justify-content-between align-items-end">
          <div className="brand-logo">
            <h3>WOOKIE <br /> MOVIES</h3>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn bg-transparent my-2 my-sm-0" type="submit">
              <i className="fa fa-search fa-lg"></i>
            </button>
            <input className="form-control mr-sm-2" type="search" aria-label="Search" 
            onChange={(item) => searchMovie(item)} />
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header;