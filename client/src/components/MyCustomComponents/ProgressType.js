import Styled from 'styled-components';

const ProgressType = Styled.span`
    position: absolute;
    left: 0px;
    font-weight: 800;
    font-size: 14px;
    padding: 0.2em 7px;
    color: ${props => (props.color ? props.color : '#fff')};
`;

export default ProgressType;
