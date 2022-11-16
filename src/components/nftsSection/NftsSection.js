import React from "react";
import { Button } from "../button/Button";
import firstImage from "../../assets/images/image 9.png";
import secondImage from "../../assets/images/image 7.png";
import thirdImage from "../../assets/images/image 8.png";

export const NftsSection = () => {
  return (
    <div className="nft_section row py-5 mx-auto px-5">
      <div className="col-md-6 d-flex flex-column justify-content-center text-white opacity-100">
        <h1 className="nft_header">Metabnb NFTs</h1>
        <p className="nft_body w-75">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <Button style="btn details_btn bg-white w-25" > Learn more </Button>
      </div>
      <div className="col-6 w-50 parent-container d-none d-md-block">
        <img src={firstImage} alt=""  className="first_image"/>
        <img src={secondImage} alt="" className="second_image"/>
        <img src={thirdImage} alt=""  className="third_image"/>
      </div>
    </div>
  );
};
