import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-end justify-content-end ">
          <div className="col-md-6 text">

          </div>
          <div className="col-md-6">
            <h1 className="title-1"><span className='text-color'>OUR</span> DREAMY<br /> With our <span className='text-color'>Agency</span>
            </h1>
            <ul className='line-style'>
              <li className='li'>
                <i class="fas fa-star"></i> SPECTACULAR THINGS TO DO BEST PLACES TO SEE
              </li>

              <li className='li'>
                <i class="fas fa-star"></i>  ALL INCLUSIVE FAMILY HOLIDAY FOR ALL SEASON
              </li>
              <li className='li'>
                <i class="fas fa-star"></i> LOCALS GULDE AVAILABLE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
