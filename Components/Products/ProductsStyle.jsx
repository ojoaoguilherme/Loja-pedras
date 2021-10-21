import styled from "styled-components";

const ProductsStyle = styled.div`
  display: grid;
  text-align: center;
  width: 80%;
  margin: 15px auto;

  .container {
    background-color: #ffffff;
    margin-bottom: 30px;
    border-radius: 10px;
    .valor{
        font-size: 32px;
    }
    img{
        padding: 25px;
    }
    h3 {
      font-size: 30px;
    }
    p{
        font-size: 26px;
    }
  }

  @media (max-width: 460px) {
    width: 360px;
    grid-template-columns: auto;
  }
`;

export default ProductsStyle;
