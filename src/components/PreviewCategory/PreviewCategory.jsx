import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPreviewCategories } from "../../redux/previewCategory/operations";
import { SingielRecipe } from "../SingielRecipe/SingielRecipe";
import { SquareButton } from "../Buttons/SquareButton/SquareButton";
import {
  ButtonContainer,
  ButtonWrapper,
  StyledImagePasta3,
  Wrapper,
  WrapperButton,
} from "./PreviewCategory.styled";

import kisspngPasta3 from "../../assets/img/mainPage/kisspng-pasta3.webp";
import { RoundButton } from "../Buttons/RoundButton/RoundButton";

export const PreviewCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/categories/beef`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await dispatch(fetchPreviewCategories());
        const data = res.payload.categories;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getRecipes();
  }, [dispatch]);

  const calculateRecipesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      return 4; // PC
    } else if (screenWidth >= 768) {
      return 2; // Tablet
    } else {
      return 1; // Mobile
    }
  };

  return (
    <Wrapper>
      <ul>
        {data.map((category) => {
          return (
            <li key={category.category}>
              <h2>{category.category}</h2>

              {category.recipes
                .slice(0, calculateRecipesToShow())
                .map((recipe) => {
                  console.log("recipe: ", recipe);
                  return (
                    <>
                      <SingielRecipe key={recipe._id} recipe={recipe} />
                      <ButtonContainer>
                        <ButtonWrapper>
                          <SquareButton>See all</SquareButton>
                        </ButtonWrapper>
                      </ButtonContainer>
                    </>
                  );
                })}
            </li>
          );
        })}
      </ul>
      <WrapperButton>
        <RoundButton
          onClick={handleClick}
          bgColor="var(--font-white-color)"
          borderColor="var(--brand-color)"
          fontColor="var(--second-color)"
        >
          Other categories
        </RoundButton>
        <StyledImagePasta3 src={kisspngPasta3} alt="kisspngPasta3" />
      </WrapperButton>
    </Wrapper>
  );
};
