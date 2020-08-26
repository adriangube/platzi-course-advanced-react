import styled from "styled-components";

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: white;
  display: block;
  width: 100%;
  height: 32px;
  text-align: center;
  
  &[disabled]{
  opacity: .3;
  }
`
