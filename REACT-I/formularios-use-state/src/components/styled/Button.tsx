import styled from "styled-components";

interface ButtonProps {
  width: string;
  padding: string;
  backgroundColor: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-weight: 600;
  border-radius: 40px;
  border: 2px solid black;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
`;
