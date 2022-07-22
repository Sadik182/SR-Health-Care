import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer bg-dark text-white">
      <div className="m-5 ">
        <h1>About SR-Health-Care</h1>
        <p>
          Our staff members are well trained <br />  professionals, We will fix the <br />
          requested records directly to the <br /> qualified doctors the day before or<br /> 
          the day of the appointment.
        </p>
      </div>
      <div className="department m-5">
        <h1>Department</h1>
        <ul>
          <li>Laboratory</li>
          <li>Dental Care</li>
          <li>Ophthalmology</li>
          <li>X-Ray and CT Scan</li>
          <li>Drug Store</li>
          <li>Neurology</li>
        </ul>
      </div>
      <div>
          <h1>Contact Details</h1>
          <p>Uttara Sector, 10 Dhaka</p>
          <p>Tell: 154878554</p>
          <p>Email: <a href="#">Srhealthcare@gmail.com</a> </p>
          <p>Website: <a href="#">HealthCare.Com</a> </p>
      </div>
    </div>
  );
};

export default Footer;
