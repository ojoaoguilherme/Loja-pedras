import styled from "styled-components";

const ProductsListStyle = styled.div`
  display: grid;
  text-align: center;
  width: 80%;
  margin: 15px auto;

  .container {
    background-color: #ffffff;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    .valor {
      font-size: 32px;
    }
    img {
      padding: 25px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 26px;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 5px 7px 6px 3px #b5b5b5;
    }

    div.product-unavailable {
      background-color: #d12a2a;
      color: #f3f3f3;
      letter-spacing: 0.7px;
      padding: 7px 5px;
      border-radius: 5px;
      box-shadow: 0px 2px 2px 2px gray;
      width: 45%;
      margin: 10px auto;
    }
  }

  @media (max-width: 460px) {
    width: 360px;
    grid-template-columns: auto;
  }
`;

export default ProductsListStyle;
