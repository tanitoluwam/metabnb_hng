import React from "react";
import linearImage from "../../assets/images/linear-logo.png";
import { Button } from "../button/Button";
import placeOne from "../../assets/images/place-1.png";
import placeTwo from "../../assets/images/place-2.png";
import placeThree from "../../assets/images/place-3.png";
import placeFour from "../../assets/images/place-4.png";
import placeFive from "../../assets/images/place-5.png";
import placeSix from "../../assets/images/place-6.png";
import placeSeven from "../../assets/images/place-7.png";
import placeEight from "../../assets/images/place-8.png";
import placeNine from "../../assets/images/place-9.png";
import placeTen from "../../assets/images/place-10.png";
import placeEleven from "../../assets/images/place-11.png";
import placeTwelve from "../../assets/images/place-12.png";
import imgOne from "../../assets/images/Frame-1.png";
import imgTwo from "../../assets/images/Frame-2.png";
import imgThree from "../../assets/images/Frame-3.png";
import imgFour from "../../assets/images/Frame-4.png";
import { Gallery } from "../gallery/Gallery";

const places = [
  "Restaurant",
  "cottage",
  "castle",
  "fantast city",
  "beach",
  "carbins",
  "off-grid",
  "Farm",
];
const images = [
  placeOne,
  placeTwo,
  placeThree,
  placeFour,
  placeFive,
  placeSix,
  placeSeven,
  placeEight,
  placeNine,
  placeTen,
  placeEleven,
  placeTwelve,
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
];
export const Places = () => {
  return (
    <div className="container">
      <ul className="d-none d-md-flex  justify-content-between align-items-center places_link mt-5 ps-0 ms-0">
        {places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
        <Button style="btn places_btn d-flex px-42 align-items-center">
          <span className="me-4">Location</span>
          <img src={linearImage} className="filter-image" alt="" />
        </Button>
      </ul>
      <div className="row mb-5 mt-2 g-5">
        <Gallery images={images} />
      </div>
    </div>
  );
};
