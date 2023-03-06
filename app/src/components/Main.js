import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardg from "../components/images/Cardg.svg";
import Cardm from "../components/images/Cardsm.svg";
import Cards from "../components/images/Cards.svg";
function Main() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 17,
    slidesToShow: 11,
    arrows: false,
  };
  return (
    <Mains>
      <Slider {...settings}>
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>
        <div className="cards">
          <h3>
            <img src={Cardm} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardm} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cards} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardm} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cards} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cards} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardm} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cardg} alt="" />
          </h3>
        </div>{" "}
        <div className="cards">
          <h3>
            <img src={Cards} alt="" />
          </h3>
        </div>
      </Slider>
    </Mains>
  );
}

export default Main;
const Mains = styled.div`
  padding: 0 42px 0 37px;
`;
