import styled from "@emotion/styled";

export const Button = styled.button(({ theme, selectedIndex, index }) => {
  return {
    padding: `${theme.spaces[4]} ${theme.spaces[8]}`,
    borderRadius: "4px",
    border: `1px solid ${theme.appTheme.primaryColor}`,
    fontSize: theme.fontSizes.base,
    fontWeight: 500,
    color:
      selectedIndex === index
        ? theme.colors.white
        : theme.appTheme.primaryColor,
    backgroundColor:
      selectedIndex === index
        ? theme.appTheme.primaryColor
        : theme.appTheme.primaryColorLighten,
    cursor: "pointer"
  };
});
