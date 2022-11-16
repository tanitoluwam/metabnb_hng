import React from "react";
import footerGroup from "../../assets/images/footer-group.png";
import facebookIcon from "../../assets/images/facebook-263-721950.png";
import instagramIcon from "../../assets/images/instagram-216-721958.png";
import twitterIcon from "../../assets/images/twitter-241-721979.png";

export const Footer = () => {
  return (
    <div className="footer_bg py-5 px-5 row text-center text-md-start">
      <div className="col-md-3 pt-3">
        <div className="mb-5">
          <img src={footerGroup} alt="" />
        </div>
        <div className="flex justify-content-between py-3 mb-2">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      <div className="col-md-3 pt-3">
        <h3>Community</h3>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div className="col-md-3 pt-3">
        <h3>Places</h3>
        <p>Castle</p>
        <p> Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
      <div className="col-md-3 pt-3">
        <h3>About us</h3>
        <p>Castle</p>
        <p> Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
    </div>
  );
};
