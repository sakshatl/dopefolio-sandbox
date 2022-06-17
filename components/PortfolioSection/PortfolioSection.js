import styles from "../../styles/portfolioSection.module.css";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

const PortfolioSection = ({ selectedIndex }) => {
  const theme = useTheme();

  return (
    <div className={styles.portfolioSection}>
      {selectedIndex === 0 ? (
        <h3
          className={css({
            fontSize: theme.fontSizes.heading3,
            color: theme.appTheme.headingColor
          })}
        >
          Projects
        </h3>
      ) : (
        <h3
          className={css({
            fontSize: theme.fontSizes.heading3,
            color: theme.appTheme.headingColor
          })}
        >
          Articles
        </h3>
      )}
    </div>
  );
};

export default PortfolioSection;
