import Styled from 'styled-components';

const ProgressPercentage = Styled.span`
    position: absolute;
    right: 0px;
    font-weight: 800;
    font-size: 14px;
    padding: 0.2em 7px;
    color: ${props => (props.color ? props.color : '#fff')};
    // padding: 3px 10px 2px;

`;

export default ProgressPercentage;
