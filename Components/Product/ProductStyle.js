import styled from "styled-components";

const ProductStyle = styled.div`
  display: flex;
  /* justify-content: ; */
  width: 86%;
  margin: 35px auto;

  .image-container {
    margin: 25px 55px 0px 0px;
    img {
      border-radius: 10px;
    }
  }

  .text-content {
    width: 90%;
    margin: 10px auto;
    display: flex;

    h3 {
      text-align: center;
      margin: 10px 0;
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
      p {
        padding: 7px;
      }
      color: gray;
    }

    div.product-unavailable {
      width: auto;
      height: 45px;
      background-color: #d12a2a;
      text-align: center;
      color: #f3f3f3;
      font-size: 20px;
      text-decoration: solid;
      letter-spacing: 0.7px;
      padding: 10px 10px;
      border-radius: 5px;
      box-shadow: 0px 2px 2px 2px gray;
      margin: 10px auto;
    }

    div.payButton {
      width: 25%;
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 45px auto;

    div.image-container {
      width: 85%;
      margin: 0 auto;
    }
    div.text-content {
      flex-direction: column;

      margin: 35px auto;
      width: 90%;
      h3 {
        text-align: center;
      }
    }

    div.detailed-text {
      margin: 20px auto;
    }

    div.payButton {
      width: 45%;
    }
  }
  @media (max-width: 426px) {
    margin: 35px auto;
    div.text-content {
      flex-direction: column;
      padding: 0;
      width: 100%;
    }
    div.detailed-text {
      h3 {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }

    div.product-unavailable {
      width: 55%;
      margin: 10px auto;
    }

    div.payButton {
      width: 95%;
    }
  }
`;

export default ProductStyle;
