import { styled } from "styled-components";

export interface ParagraphStyledProps {
  fontSize?: string;
  color?: string;
}

export const Container = styled.p<ParagraphStyledProps>`
  font-size: ${(props) => props.fontSize ?? "1rem"};
  color: ${(props) => props.color ?? "#000"};
  font-family: roboto, sans-serif;
  font-weight: 400;
`;
