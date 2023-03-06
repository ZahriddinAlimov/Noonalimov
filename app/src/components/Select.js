import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Noon from "../components/images/noong.gif";
function Select() {
  return (
    <Options>
      <Sect>
        {" "}
        <DropdownButton
          id="dropdown-basic-button"
          title="All collection"
          variant=" "
        >
          <Dropdown.Item href="#/action-1">Electronik & Mobiles</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Beauty & Fragrances</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shoping</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Fashion</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Baby & Kitchen</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Sports & Outdoor</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shoping</Dropdown.Item>
        </DropdownButton>
      </Sect>
      <Option>
        <a className="links" href="/">
          Electronik
        </a>
        <a className="links" href="/">
          Men
        </a>
        <a className="links" href="/">
          Women
        </a>
        <a className="links" href="/">
          Home
        </a>
        <a className="links" href="/">
          Beauty & Fragranse
        </a>
        <a className="links" href="/">
          Baby & toys
        </a>
        <a className="links" href="/">
          Sports
        </a>
        <a className="links" href="/">
          Bestsellers
        </a>
        <a className="links" href="/">
          Sell on NooN
        </a>

        <img src={Noon} alt="gif" className="noons" />
      </Option>
    </Options>
  );
}

export default Select;
const Options = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: #fff;
`;
const Sect = styled.div`
  padding-left: 30px;
  background-color: #fff;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;
