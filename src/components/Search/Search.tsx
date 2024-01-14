import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoundButton } from "../Buttons/RoundButton/RoundButton";
import { ContainerButton, SearchInput, Wrapper } from "./Search.styled";

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      navigate(`search?query=${searchValue}`);
    } else {
      alert("Enter the name of the recipe to search for");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <SearchInput
        placeholder="Beef"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <ContainerButton>
        <RoundButton onClick={handleSearch}>Search</RoundButton>
      </ContainerButton>
    </Wrapper>
  );
};
