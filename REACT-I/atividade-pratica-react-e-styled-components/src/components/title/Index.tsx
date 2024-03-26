import { ReactNode } from "react";
import * as S from "./Styles";

interface TitleFunctionProps {
  children: ReactNode;
}
export const Title = ({
  children,
  color,
  fontSize,
}: TitleFunctionProps & S.TitleStyledProps) => {
  return (
    <S.Title fontSize={fontSize} color={color}>
      {children}
    </S.Title>
  );
};
