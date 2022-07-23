import React from "react";
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
          <Carousel.Caption>
            <h3 className="text-dark fw-bold">
              What Makes Us Better, Makes You Better 3
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
          <h3 className="text-dark fw-bold">
              What Makes Us Better, Makes You Better 2
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={img1} alt="Third slide" />

          <Carousel.Caption>
          <h3 className="text-dark fw-bold">
              What Makes Us Better, Makes You Better 1
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
