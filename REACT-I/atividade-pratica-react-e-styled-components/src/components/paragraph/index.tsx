import { Container, ParagraphStyledProps } from "./styles";
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

export function Paragraph(props: ParagraphProps & ParagraphStyledProps) {
  return (
    <Container fontSize={props.fontSize} color={props.color}>
      {props.children}
    </Container>
  );
}
