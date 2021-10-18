import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import cardImg from "../../assets/images/img.jpg"
import { useHistory } from 'react-router';

const Home = () => {

  const history = useHistory();

  const [moviesData, setMoviesData] = useState([]);

  const renderCardItem = () => {

    return (
      moviesData.map((item, index) => {
        return (<div className="col-md-4">
          <div onClick={() => {
            history.push({
              pathname: '/detail',
              state: item.imdbID
            })
          }} className="card">
            <img src={item.Poster} className="w-100 h-100" alt="..." />
          </div>
        </div>)
      })
    )
  }

  return (
    <Layout setMoviesData={setMoviesData}>
      {/* <section className="home-slider">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <div className=" owl-header">
                <h3 className="bbb_viewed_title">Gener 1</h3>
                <div className="arrows">
                  <div className="viewed_nav bbb_viewed_prev"><i className="fas fa-chevron-left"></i></div>
                  <div className="viewed_nav bbb_viewed_next"><i className="fas fa-chevron-right"></i></div>
                </div>
              </div>
              <div className="viewed_slider">
                <div className="owl-carousel owl-theme bbb_viewed_slider1">

                  {renderItem()}

                </div>
              </div>

            </div>
          </div>

        </div> */}





      <div className="container mx-auto mt-4">
        <div className="row">
          {renderCardItem()}
        </div>
      </div>


      {/* </section> */}
    </Layout>
  )
}

export default Home