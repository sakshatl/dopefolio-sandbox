import styled from "@emotion/styled";

export const HeroDescription = styled.p(({ theme }) => {
  return {
    fontSize: theme.fontSizes.xl,
    lineHeight: "42px",
    marginTop: theme.spaces[8]
  };
});
