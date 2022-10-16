import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { name, description, img, price, sId } = service;
  const navigate = useNavigate();

  const ServiceDetails = (sId) => {
    navigate(`/service/${sId}`);
  }
  return (
    <div>
      <div className="service" id="service">
        <img className="rounded-3" src={img}></img>
        <h3>Name: {name}</h3>
        <h5>Price: {price}</h5>
        <p>{description}</p>
        <button onClick={() => ServiceDetails(sId)} className="details">Details</button>
      </div>
    </div>
  );
};

export default Service;
