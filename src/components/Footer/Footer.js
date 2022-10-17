import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="row bg-dark text-white">
      <div className="col-lg-5 col-sm-12">
        <h1 className="text-center mt-3 fw-bold">About SR-Health-Care</h1>
        <p className="text-center p-3">
          Our staff members are well trained and professionals, We will fix the 
          requested records directly to the qualified doctors the day before or
          the day of the appointment.
        </p>
      </div>
      <div className="col-lg-3 col-sm-6">
        <h1 className="text-center mt-3 fw-bold">Department</h1>
        <ul className="text-center ">
          <li>Laboratory</li>
          <li>Dental Care</li>
          <li>Ophthalmology</li>
          <li>X-Ray and CT Scan</li>
          <li>Drug Store</li>
          <li>Neurology</li>
        </ul>
      </div>
      <div className="col-lg-4 col-sm-6">
          <h1 className=" mt-3 fw-bold">Contact Details</h1>
          <div className="">
          <p>Uttara Sector, 10 Dhaka</p>
          <p>Tell: 154878554</p>
          <p>Email: <a href="#">Srhealthcare@gmail.com</a> </p>
          <p>Website: <a href="#">HealthCare.Com</a> </p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
