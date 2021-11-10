import styled from "styled-components";

const ProductStyle = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-evenly;

  .image-container {
    margin: 0 55px 65px 0px;
    img {
      width: 50%;
      border-radius: 10px;
    }
  }

  .text-content {
    display: flex;
    /* width: 90%; */
    justify-content: space-between;
    margin: 0 auto;

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
      margin: 20px 0;
      li {
        margin-bottom: 7px;
      }
    }
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

  div.cointaner-buttons {
  }

  @media (max-width: 973px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 35px auto;

    div.image-container {
      width: 85%;
      margin: 0 auto;
    }
    div.text-content {
      width: 85%;
      flex-direction: column;

      div.detailed-text {
        margin: 20px auto;
        h2 {
          margin: 10px;
          text-align: center;
        }
        h3 {
        }
        h4 {
          text-align: center;
          margin: 7px 0;
          font-size: 1.1rem;
        }
        h5 {
          text-align: center;
          font-size: 1.1rem;
        }
        h5 + p {
          text-align: center;
          margin: 8px;
        }
      }
    }

    .payButton,
    .product-unavailable {
      width: 50%;
      margin: 0 auto;
    }
  }

  @media (max-width: 426px) {
    display: flex;
    margin: 35px auto;
    width: 95%;

    div.text-content {
      width: 100%;
      margin: 0 auto;
      flex-direction: column;
    }

    div.detailed-text {
      h2 {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 5px 0;
      }
      h3 {
        font-size: 1.2rem;
      }

      h4 {
        margin: 10px 0;
        text-align: center;
        font-size: 1.1rem;
      }
      h5 {
        margin-top: 10px;
        font-size: 1.1rem;
        text-align: center;
      }
      h5 + p,
      h4 + p {
        text-align: center;
        font-size: 1.1rem;
      }
      ul {
        margin: 20px 0;
        li {
          margin-bottom: 7px;
        }
      }

      p {
        font-size: 1rem;
      }
    }

    div.product-unavailable {
      width: 55%;
      margin: 10px auto;
    }

    div.payButton {
      width: 85%;
      margin: 0 auto;
    }
  }
`;

export default ProductStyle;
