import icons from "../../assets/icons.svg";
import {
  Container,
  Description,
  Highlighted,
  SeeRecipesBtn,
} from "./СhooseYourBreakfast.styled";

export const СhooseYourBreakfast = () => {
  return (
    <Container>
      <Description>
        <Highlighted>Delicious and healthy</Highlighted> way to enjoy a variety
        of fresh ingredients in one satisfying meal
      </Description>
      <SeeRecipesBtn>
        See recipes
        <svg width="19" height="18">
          <use href={`${icons}#arrow-right`}></use>
        </svg>
      </SeeRecipesBtn>
    </Container>
  );
};
