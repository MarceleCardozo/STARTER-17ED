import styled from "styled-components";
import bannerImg from "../../assets/banner.jpg";

export const Banner = styled.div`
  background-image: url(${bannerImg});
  width: 100%;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
