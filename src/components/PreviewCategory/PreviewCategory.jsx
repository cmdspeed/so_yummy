import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { fetchPreviewCategories } from "../../redux/previewCategory/operations";
import { SingielRecipe } from "../SingielRecipe/SingielRecipe";

export const PreviewCategory = () => {
  const dispatch = useDispatch();

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
    <div>
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
                      <button>See all</button>
                    </>
                  );
                })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
