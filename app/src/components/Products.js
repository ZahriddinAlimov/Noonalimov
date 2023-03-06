import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from "../components/images/star.svg";
import Phones from "../components/images/phones.svg";
import Phon from "../components/images/phon.svg";

function Products() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
  };

  return (
    <Slides>
      {" "}
      <Satr>
        <b>Recomendet for you</b>
      </Satr>
      <Slider {...settings}>
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phon} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phon} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phon} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>

                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phon} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>
                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>{" "}
        <div className="phones">
          <div className="phone">
            {" "}
            <h3>
              <img src={Phones} alt="" />
              <h6>OnePlus Nord N20 SE 4G Dual sim Blue Oasis 4GB RA..</h6>
              <div className="flexs">
                <span>ACD</span>
                <h5>459.08</h5>
              </div>
              <div className="star">
                {" "}
                <p>express</p>
                <div className="stars">
                  <h6>
                    4.5 <img src={Star} alt="" />
                  </h6>
                  <p>(7.8 k)</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </Slider>
    </Slides>
  );
}

export default Products;
const Slides = styled.div`
  padding: 0 42px 0 36px;
`;
const Satr = styled.div`
  font-size: 22px;
  color: #000;
`;
