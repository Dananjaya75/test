import React from "react";
import mainImage from "../Assets/mainimg.jpg"; // Adjust the path based on file structure

function BannerImage() {
  return (
    <div className="banner">
      <img src={mainImage} alt="banner" />
    </div>
  );
}

export default BannerImage;
