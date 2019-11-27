import Styled from 'styled-components';

const Text = Styled.span`
    float: ${props => (props.floatLeft ? 'left' : 'right')};
    color: ${props => (props.color ? props.color : '#fff')};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
    font-size: 14px;
    padding: 0.2em 7px;
`;

export default Text;
