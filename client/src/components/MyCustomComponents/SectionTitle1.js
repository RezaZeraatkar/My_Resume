import styled from 'styled-components';
// import PropTypes from 'prop-types';

const SectionTitle1 = styled.div`
  color: #333;
  font-weight: bold;
  font-size: 18px;
  padding-left: 0px;
  padding-top: 10px;
  padding-bottom: 3px;
  margin-bottom: 15px;
  letter-spacing: -1px;
  box-sizing: border-box;
  vertical-align: center;
  line-height: 26px;
  border-bottom: ${props =>
    props.borderBottomColor
      ? `1px solid ${props.borderBottomColor}`
      : '1px solid #021533'};
  & > p {
    font-weight: 300;
    margin: 0;
    font-size: 12px;
    font-style: italic;
    letter-spacing: 0px;
    color: #555;
  }
`;

// Divider.prototype = {
//   url: PropTypes.string.isRequired,
// };

export default SectionTitle1;
