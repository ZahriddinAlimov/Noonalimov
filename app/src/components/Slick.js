import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Deliver from "../components/images/Deliver.svg";
import Phone from "../components/images/Phone.svg";
import Rek from "../components/images/rek.svg";
import Rekk from "../components/images/rek2.svg";
function Slick() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Slickk>
      <img src={Deliver} alt="" />
      <Sliderr>
        {" "}
        <Sliders>
          {" "}
          <Slider {...settings}>
            <div className="rek">
              <h3>
                <img src={Rek} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rekk} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rek} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rekk} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rek} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rekk} alt="" />
              </h3>
            </div>
            <div className="rek">
              <h3>
                <img src={Rek} alt="" />
              </h3>
            </div>
          </Slider>
        </Sliders>
        <img className="left" src={Phone} alt="rasm" />
      </Sliderr>
    </Slickk>
  );
}

export default Slick;
const Slickk = styled.div`
  padding: 0 38px 0px 36px;
`;
const Sliders = styled.div`
  width: 69.7%;
`;
const Sliderr = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;
