import styled from "styled-components";
// import PropTypes from 'prop-types';

const Div = styled.div`
  display: block;
  text-align: center;
  box-sizing: border-box;
`;

const Link = styled.a`
  color: #fff;
  display: inline-block;
  text-decoration: none;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #333;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  line-height: 29px;
  margin: 2px;
  :hover {
    color: #fff;
  }
  :hover {
    background-color: #40a8a6;
  }
`;

export { Div, Link };
