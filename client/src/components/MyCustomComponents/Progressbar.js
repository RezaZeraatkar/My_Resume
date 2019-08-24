import styled from "styled-components";

const Progressbar = styled.div`
  position: absolute;
  background-color: ${props => (props.backColor ? props.backColor : "#08aeac")};
  width: ${props => (props.width ? props.width : 100)}%;
  height: 100%;
  float: left;
`;

export default Progressbar;
