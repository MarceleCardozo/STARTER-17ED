import { Banner } from "../components/banner/Index";
import { Cards } from "../components/cards";
import AbcIcon from "@mui/icons-material/Abc";

export const Home = () => {
  return (
    <>
      <Banner />
      <Cards paragraph="testes test" title="Titulo">
        <AbcIcon />
      </Cards>
    </>
  );
};
