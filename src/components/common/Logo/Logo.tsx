import React from "react";

const Logo = ({ image, altText, coustomClass }) => {
  return <img src={image} alt={altText} className={coustomClass} />;
};

export default Logo;
