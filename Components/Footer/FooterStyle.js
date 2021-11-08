import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #fff;
  box-shadow: 0px -5px 12px 2px gray;

  div.content {
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      list-style: none;

      li {
        padding: 5px 7px;
      }
    }

    p {
      padding: 20px 0;
      text-align: center;
    }
  }
`;

export default FooterStyle;
