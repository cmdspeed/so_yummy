import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { fetchPreviewCategories } from "../../redux/previewCategory/operations";

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
  console.log(data);
  return (
    <div>
      <h1>Preview Categories</h1>
      <ul>
        {data.map((category) => (
          <li key={category.category}>
            <h2>{category.category}</h2>
            {/* karta/ty z przepisami tymczasowo jeden przepis */}
            {category.recipes.map((recipe) => {
              console.log("recipe: ", recipe);
              return (
                <img
                  width={343}
                  height={323}
                  key={recipe.image}
                  alt=""
                  src={recipe.image}
                />
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};
