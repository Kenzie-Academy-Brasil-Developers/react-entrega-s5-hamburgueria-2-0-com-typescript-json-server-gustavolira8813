import styled from "styled-components";

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid yellowgreen;
  width: 200px;
  margin: 4px;
  padding: 5px;
  img {
    width: 200px;
    height: 165px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: medium;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: x-large;
  }
  p {
    text-align: start;
  }
  .product-image {
    flex: 50%auto;
  }
  .product-details {
    flex: 40%;
    text-align: start;
  }
  .product-btn {
    flex: 10%auto;
    padding: 3px;
  }
`;
