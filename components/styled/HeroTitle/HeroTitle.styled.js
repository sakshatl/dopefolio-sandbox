import styled from "@emotion/styled";

export const HeroTitle = styled.h2(({ theme }) => {
  return {
    fontSize: "60px",
    background: theme.appTheme.heroTitleColor,
    backgroundClip: "text",
    textFillColor: "transparent",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  };
});
