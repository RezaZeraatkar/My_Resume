import styled from "styled-components";
import PropTypes from "prop-types";

const RoundedCircleImage = styled.img.attrs(props => ({
  src: props.url
}))`
  border: 6px solid #ddd;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: block;
  margin: 17px auto;
  position: relative;
  top: 0px;
`;

RoundedCircleImage.prototype = {
  url: PropTypes.string.isRequired
};

export default RoundedCircleImage;
