import React from "react";
import { Container, Image, Title, TitleWrapper } from "./SingielRecipe.styled";

interface Recipe {
  image: string;
  description: string;
  title: string;
}

interface SingielRecipeProps {
  recipe: Recipe;
}

export const SingielRecipe: React.FC<SingielRecipeProps> = ({ recipe }) => {
  console.log("recipe singiel: ", recipe);
  return (
    <Container>
      <Image alt={recipe.description} src={recipe.image} loading="lazy" />

      <TitleWrapper>
        <Title>{recipe.title}</Title>
      </TitleWrapper>
    </Container>
  );
};
