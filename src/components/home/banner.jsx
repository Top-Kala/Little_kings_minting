import React from "react";
import mainImg from "../../image/homeImg.png";

const Banner = () => {
  return (
    <>
      <section className="homeBannerSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>
                To Be a King is to Feel <span>Free, Accepted & Powerful</span>
              </h1>
              <div className="mainImgSection">
                <img className="mainImg" src={mainImg} alt="mainImg" />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
