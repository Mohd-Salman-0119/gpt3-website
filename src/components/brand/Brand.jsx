import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports.js";

const BrandImage = ({ brand,alt, className }) => {
  return (
    <div className={className}>
      <img src={brand} alt={alt} />
    </div>
  );
};

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      
      <BrandImage brand={google} alt="google" className="gpt3__brand-div"/>
      <BrandImage brand={slack} alt="slack" className="gpt3__brand-div"/>
      <BrandImage brand={atlassian} alt="atlassian" className="gpt3__brand-div"/>
      <BrandImage brand={dropbox} alt="dropbox" className="gpt3__brand-div"/>
      <BrandImage brand={shopify} alt="shopify" className="gpt3__brand-div"/>
    </div>
  );
};

export default Brand;
