import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-evenly;
  background-color: red;
  width: 40vw;
  margin: auto;
  padding: 10px;
  border-radius: 10px;

  input {
    background-color: #f6f6f6f0;
  }
  button {
    background-color: #881a06bf;
    color: ghostwhite;
    font-weight: 700;
  }
  button:hover {
    background-color: #da2626fc;
    color: ghostwhite;
    font-weight: 700;
  }
`;
