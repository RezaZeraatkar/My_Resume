import Styled from "styled-components";

// size: FontSize
// weight: FontWeight
// color: FontColor
const Font = Styled.div`
    font-size: ${props => props.fs}px;
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 700)};
    letter-spacing: ${props => (props.fontSpace ? props.fontSpace : "-2px")};
    color: ${props => (props.fontColor ? props.fontColor : "#021533")};
`;

export default Font;
