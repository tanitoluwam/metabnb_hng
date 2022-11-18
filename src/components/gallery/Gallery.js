import React from "react";
import { Card } from "../card/Card";


export const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-12 col-md-6 col-lg-3" key={index}>
          <Card picture={image} />
        </div>
      ))}
    </div>
  );
};
