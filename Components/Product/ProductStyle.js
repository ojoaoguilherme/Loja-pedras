import styled from "styled-components";

const ProductStyle = styled.div`
  .image-container {
    margin: 25px;
    img {
      border-radius: 10px;
    }
  }

  .text-content {
    margin: 10px auto;
    width: 90%;
    h3 {
      margin: 10px;
      text-align: center;
      font-size: 25px;
    }
    ol {
      padding-left: 30px;
    }
    ul {
      padding-left: 30px;
    }
    blockquote {
      margin: 3px;
      margin-left: 30px;
      border-left: 4px solid black;
      p {
        padding: 7px;
      }
      color: gray;
    }

    div.product-unavailable {
      background-color: #d12a2a;
      text-align: center;
      color: #f3f3f3;
      font-size: 20px;
      text-decoration: solid;
      letter-spacing: 0.7px;
      padding: 10px 10px;
      border-radius: 5px;
      box-shadow: 0px 2px 2px 2px gray;
      width: 45%;
      margin: 10px auto;
    }
  }
`;

export default ProductStyle;
