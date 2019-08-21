import Styled from "styled-components";

const ListGroupItem = Styled.li`
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    position: relative;
    list-style: none;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    transition: background-color 0.3s ease-in;
    background-color: ${props => (props.toRoute ? "#021533" : "#08aeac")};
    & > a {
        display: block;
        padding: 6px 10px;
        color: #fff;
        font-size: 1em;
        text-decoration: none;
    }
    :hover {
        transform: scale(0.99);
        background-color: #021533;
    }
`;

export default ListGroupItem;
