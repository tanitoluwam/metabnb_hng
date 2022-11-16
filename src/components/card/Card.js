import React from "react";
import stars from "../../assets/images/stars.png"

export const Card = ({picture}) => {
  return (
    <div className="card card-size d-flex flex-column mx-auto py-3 px-2 mt-4 mb-3">
      <img src={picture} class="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-text d-flex justify-content-between">
            <p className="card_text">Desert king</p>
            <p className="card_text-bold">1MBT per night</p> 
        </div>
        <div className="card_text d-flex justify-content-between">
            <p >2345km away</p>
            <p>available for 2weeks stay</p> 
        </div>
        <img src={stars} alt="" />
      </div>
    </div>
  );
};
