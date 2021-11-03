import styled from "styled-components";

const ProductStyle = styled.div`

  .image-container{
    margin: 25px;
    img{
      border-radius: 10px;
    }

  }

  .text-content {
    margin-left: 10px;
    h3 {
      margin: 7px;
      text-align: center;
      font-size: 25px;
    }
    ol {
      padding-left: 25px;
    }
    ul {
      padding-left: 25px;
    }
    blockquote {
      margin: 3px;
      margin-left: 25px;
      border-left: 4px solid black;
      p {
        padding: 7px;
      }
      color: gray;
    }
  }
`;

export default ProductStyle;
