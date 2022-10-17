import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { services } = useAuth();

  const matchedService = services.find(
    (service) => service.sId === Number(serviceId)
  );
  console.log(matchedService);
  const {name, price, description, img } = matchedService;

  return (
    <>
      <h2 className="text-center p-3">We carefully take care all the services we provided</h2>
      {matchedService?.sId ? (
        <Container>
            <div className="serviceDetails row">
          <div className="col-lg-5 col-sm-12">
            <img className="rounded-3" src={img} alt="service" />
          </div>
          <div className="col-lg-5 col-sm-12">
            <h3>Name: {name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
          <button className="details">Add To Cart</button>
          </div>
        </div>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">Service Not Found</h1>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
