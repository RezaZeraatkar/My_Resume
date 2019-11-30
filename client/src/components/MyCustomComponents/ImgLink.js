import Styled from 'styled-components';

const ImgLink = Styled.a.attrs(props => ({
  href: props.to,
  style: {
    background: `url(${props.backImg}) no-repeat`,
    backgroundSize: 'contain',
  },
}))`
    display: block;
    height: 300px;
`;

export default ImgLink;
