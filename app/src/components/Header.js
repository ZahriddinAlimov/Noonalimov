import React from "react";
import styled from "styled-components";
import Noon from "../components/images/noon.svg";
import IconP from "../components/images/iconP.svg";
import IconC from "../components/images/icomC.svg";
import Dubai from "../components/images/dubaif.svg";
function Header() {
  return (
    <Navbar>
      <Title>
        <img src={Noon} alt="404" className="noonf" />
      </Title>
      <Img>
        {" "}
        <label htmlFor="flag">
          {" "}
          <img src={Dubai} alt="" />
        </label>
        <select className="select">
          <option value="">Dubai</option>
          <option value="">Uzbekistan</option>
          <option value="">Russia</option>
          <option value="">English</option>
        </select>
      </Img>
      <Input>
        <input
          className="input"
          type="text"
          placeholder="What are you look for?"
        />
      </Input>
      <Uzb>Uzb</Uzb>
      <Sign>
        <a className="sign" href="/">
          Sign in
        </a>{" "}
        <img className="iconp" src={IconP} alt="" />
      </Sign>
      <Cart>
        <a className="sign" href="/">
          {" "}
          Cart
        </a>{" "}
        <img className="iconc" src={IconC} alt="" />
      </Cart>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: yellow;
  padding: 14px 15px;
`;

const Title = styled.div``;
const Input = styled.div`
  background-color: yellow;
`;
const Sign = styled.div`
  display: flex;
  align-items: center;
  background-color: yellow;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  background-color: yellow;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
`;
const Uzb = styled.div`
  background-color: yellow;
`;
