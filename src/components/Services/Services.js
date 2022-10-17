import Service from "../Service/Service";
import "./Services.css";
import Slide from "react-reveal/Slide";
import useAuth from "../../hooks/useAuth";

const Services = () => {
  const {services} = useAuth();
  return (
    <>
      <div className="text-center p-3">
        <Slide left>
          <h1>Our All Services</h1>
        </Slide>
        <Slide right>
            <p>We are Providing <span className="text-warning fw-bold fs-5">6</span> Services at this moment</p>
        </Slide>
      </div>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.sId} service={service}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;
