import Styled from 'styled-components';

// size: FontSize
// weight: FontWeight
// color: FontColor
const Font = Styled.span`
    font-size: ${props => props.fs}px;
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 700)};
    letter-spacing: ${props => (props.fontSpace ? props.fontSpace : '-2px')};
    color: ${props => (props.fontColor ? props.fontColor : '#021533')};
    text-transform: ${props =>
      props.textTransform ? props.textTransform : ''};
`;

export default Font;
