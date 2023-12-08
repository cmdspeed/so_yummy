import icons from "../../../assets/icons.svg";

export const UserLogo = () => {
  return (
    <svg width="44" height="44">
      <use href={`${icons}#defaultUserAvatar`} />
    </svg>
  );
};
