import icons from "../../assets/icons.svg";
import { useNavigate } from "react-router-dom";
import {
  BgPhoto,
  Container,
  Description,
  Highlighted,
  SeeRecipesBtn,
} from "./СhooseYourBreakfast.styled";

export const СhooseYourBreakfast = () => {
  const navigate = useNavigate();

  const handleSeeRecipesClick = () => {
    navigate("/categories/breakfast");
  };
  return (
    <BgPhoto>
      <Container>
        <Description>
          <Highlighted>Delicious and healthy</Highlighted> way to enjoy a
          variety of fresh ingredients in one satisfying meal
        </Description>
        <SeeRecipesBtn onClick={handleSeeRecipesClick}>
          See recipes
          <svg width="19" height="18">
            <use href={`${icons}#arrow-right`}></use>
          </svg>
        </SeeRecipesBtn>
      </Container>
    </BgPhoto>
  );
};
