import { Main } from "../../components/Main/Main";
import { BrandName, Description, Highlighted } from "./MainPage.styled";

const MainPage = () => {
  return (
    <>
      <div>
        <BrandName>
          <Highlighted>So</Highlighted>Yummy
        </BrandName>

        <Description>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Description>
      </div>
      <Main />
    </>
  );
};

export default MainPage;
