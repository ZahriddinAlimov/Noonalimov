import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zeroo from "../components/images/zero.svg";
function Zero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Reklama>
      {" "}
      <Slider {...settings}>
        <div>
          <h3>
            <img src={Zeroo} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img src={Zeroo} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img src={Zeroo} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img src={Zeroo} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img src={Zeroo} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <img src={Zeroo} alt="" />
          </h3>
        </div>
      </Slider>
    </Reklama>
  );
}

export default Zero;
const Reklama = styled.div`
  padding: 10px 36px 0 36px;
`;
