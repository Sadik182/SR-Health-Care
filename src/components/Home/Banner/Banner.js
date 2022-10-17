import React from "react";
import './Banner.css'
import { Carousel} from "react-bootstrap";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 " src={img3} alt="First slide" />
          <Carousel.Caption className='background'>
            <h3 className="text-white fw-bold fs-2">
              What Makes Us Better, Makes You Better 
            </h3>
            <p>Our first goal is to give you better services. We will be happy if you feel happy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img2} alt="Second slide" />

          <Carousel.Caption className='background'>
          <h3 className="text-white fw-bold">
              Trust Our Professional Doctors
            </h3>
            <p>You will find very professional doctors here for your tretment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img1} alt="Third slide" />

          <Carousel.Caption className='background'>
          <h3 className="text-white fw-bold">
              All Kind of Medical Services we Provide
            </h3>
            <p>
              Here our all the doctors are ready to help you for any kind of assistance
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
