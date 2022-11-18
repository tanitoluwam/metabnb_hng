import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Banner } from "../../components/banner/Banner";
import { Gallery } from "../../components/gallery/Gallery";
import { NftsSection } from "../../components/nftsSection/NftsSection";
import imgOne from "../../assets/images/Frame-1.png";
import imgTwo from "../../assets/images/Frame-2.png";
import imgThree from "../../assets/images/Frame-3.png";
import imgFour from "../../assets/images/Frame-4.png";
import imgFive from "../../assets/images/Frame-5.png";
import imgSix from "../../assets/images/Frame-6.png";
import imgSeven from "../../assets/images/Frame -7.png";
import imgEight from "../../assets/images/Frame-8.png";

const images = [
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
  imgEight,
];

export const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <div className="container">
        <h1 className="gallery-header text-center pt-5 pb-4">
          Inspiration for your next adventure
        </h1>
        <Gallery images={images} />
      </div>
      <NftsSection />
    </div>
  );
};
