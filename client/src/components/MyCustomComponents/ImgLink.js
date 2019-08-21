import Styled from "styled-components";

const ImgLink = Styled.a.attrs(props => ({
  href: props.to,
  style: {
    background: `url(${props.backImg}) no-repeat`,
    backgroundSize: "cover"
  }
}))`
    display: block;
    height: 300px;
`;

export default ImgLink;
