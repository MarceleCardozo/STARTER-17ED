interface TitleProps {
  firstWord: string;
  secondWord: string;
}

export function Title(props: TitleProps) {
  return (
    <h1>
      {props.firstWord} {props.secondWord}
    </h1>
  );
}
