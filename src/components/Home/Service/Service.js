import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div>
      <div className="service">
        <img className="rounded-3" src={img}></img>
        <h3>Name: {name}</h3>
        <h5>Price: {price}</h5>
        <p>{description}</p>
        <button className="details">Details</button>
      </div>
    </div>
  );
};

export default Service;
