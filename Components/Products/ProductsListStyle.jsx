import styled from "styled-components";

const ProductsListStyle = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  text-align: center;
  margin: 15px auto;

  .container {
    width: 90%;
    background-color: #ffffff;
    margin-bottom: 30px;

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
      max-width: 175px;
      margin: 10px auto;
    }
  }

  @media (max-width: 920px){
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    .container {
      div.product-unavailable {
        min-width: 30%;
      }
      width: 95%;
    }
  }

  @media (max-width: 426px) {
    grid-template-columns: auto;
    width: 90%;
    margin: 35px auto;
    .container {
      width: 90%;
      margin: 0 auto;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-radius: 10px;

      div.product-unavailable {
        min-width: 40%;
      }
    }
  }

  
`;

export default ProductsListStyle;
