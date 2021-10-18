import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import cardImg from "../../assets/images/img.jpg"
import { useLocation } from 'react-router';

const Detail = () => {

  const location = useLocation();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(async () => {

    if (location.state) {
      const url = `https://www.omdbapi.com/?apikey=1c747e85&i=${location.state}`
      let { data } = await axios.get(url);
      if (data.Response === "True") {
        setMovieDetail(data)
      }
    }

  }, [])


  return (
    <Layout>
      <section className="movie-details">
        <div className="container my-5">
          {movieDetail ?
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={movieDetail.Poster} className="w-100" />
              </div>
              <div className="col-12 col-md-8">
                <div className="row">
                  <div className="col-12 col-md-5">
                    <h5 className="title">{movieDetail.Title}</h5>
                  </div>
                  <div className="col-12 col-md-7 text-md-right text-center">
                    <span className="">
                      <i className="fa fa-star text-warning mr-1"></i>
                      <i className="fa fa-star text-warning mr-1"></i>
                      <i className="fa fa-star text-warning mr-1"></i>
                      <i className="fa fa-star text-warning mr-1"></i>
                      <i className="fa fa-star mr-1"></i>
                    </span>
                  </div>
                </div>
                <p>{movieDetail.Year} | {movieDetail.Runtime} | {movieDetail.Director}</p>
                <p>Cast : <span>{movieDetail.Actors}</span></p>
                <p >Movie Discription : {movieDetail.Plot}</p>
              </div>
            </div>
            : null}
        </div>
      </section>
    </Layout>
  )
}

export default Detail