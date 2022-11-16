import React from "react";
import image_6 from "../../assets/images/image 6.png";
import image_4 from "../../assets/images/image 4.png";
import image_3 from "../../assets/images/image 3.png";
import image_5 from "../../assets/images/image 5.png";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-center mb-4 mx-auto mt-5">
        <div className="col-12 col-md-7">
          <h4 className="hero_introduction">
            Rent a <span className="hero_span-text">Place</span> away from
            <span className="hero_span-text"> Home</span> in the
            <span className="hero_span-text"> Metaverse</span>
          </h4>
          <p className="hero_sub-text mt-5 w-75">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="container-fluid mt-5 mb-5">
            <div className="input-group w-75">
              <input
                type="text"
                className="form-control input_style w-75 py-3"
                placeholder="search for location"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span
                className="input-group-text span_input-style w-25 py-3"
                id="basic-addon1"
              >
                search
              </span>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-end">
          <div className="d-flex flex-column mt-5 pt-5 me-2">
            <img src={image_4} alt="" className="mb-2" />
            <img src={image_6} alt="" />
          </div>
          <div className="d-flex flex-column mb-5">
            <img src={image_3} alt="" className="mb-2" />
            <img src={image_5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

 