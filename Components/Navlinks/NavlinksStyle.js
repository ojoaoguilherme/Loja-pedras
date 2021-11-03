import styled from "styled-components";

const NavlinksStyle = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  height: 200px;
  ul {
    list-style: none;
    padding: 5px;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: black;
  }
  li {
    margin-bottom: 7px;
    border-bottom: 1px solid black;
  }
`;

export default NavlinksStyle;
