import { Main } from "../../components/Main/Main";
import {
  BrandName,
  Description,
  Highlighted,
  StyledBackground,
  StyledImagePasta,
  StyledImagePasta2,
} from "./MainPage.styled";

import kisspngPasta from "../../assets/img/mainPage/kisspng-pasta.webp";
import kisspngPasta2 from "../../assets/img/mainPage/kisspng-pasta2.webp";
import kisspngPastaBg from "../../assets/img/mainPage/kisspng-pasta-bg.webp";

const MainPage = () => {
  return (
    <>
      <StyledImagePasta src={`${kisspngPasta}`} alt="kisspngPasta" />
      <StyledImagePasta2 src={`${kisspngPasta2}`} alt="kisspngPasta" />
      <StyledBackground src={`${kisspngPastaBg}`} alt="kisspngPasta" />

      <BrandName>
        <Highlighted>So</Highlighted>Yummy
      </BrandName>
      <Description>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </Description>

      <Main />
    </>
  );
};

export default MainPage;
