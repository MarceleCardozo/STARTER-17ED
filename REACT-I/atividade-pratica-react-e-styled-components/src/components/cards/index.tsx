import { ReactNode } from "react";
import { Container } from "./styles";
import { Title } from "../title/Index";
import { Paragraph } from "../paragraph/index";

interface CardsProps {
  title: string;
  paragraph: string;
  children?: ReactNode;
}

export function Cards(props: CardsProps) {
  return (
    <Container>
      {props.children}

      <Title fontSize="16px">{props.title}</Title>
      <Paragraph fontSize="14px">{props.paragraph}</Paragraph>
    </Container>
  );
}
