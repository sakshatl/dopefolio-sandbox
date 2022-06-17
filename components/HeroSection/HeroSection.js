import styles from "../../styles/heroSection.module.css";
import { Button } from "../styled/Button/Button.styled";
import { HeroDescription } from "../styled/HeroDescription/HeroDescription.styled";
import { HeroTitle } from "../styled/HeroTitle/HeroTitle.styled";

const HeroSection = ({
  image,
  title,
  description,
  selectedIndex,
  setSelectedIndex
}) => {
  return (
    <div className={styles.heroSection}>
      <HeroTitle>Hello, my name is Sakshat</HeroTitle>
      <HeroDescription>
        I am an experienced Product Designer based in New York with a passion
        for buidling digital products and stuff I want.
      </HeroDescription>
      <div className={styles.heroCtaContainer}>
        <div className={styles.heroSectionProjectsCta}>
          <Button
            onClick={() => setSelectedIndex(0)}
            index={0}
            selectedIndex={selectedIndex}
          >
            Projects
          </Button>
        </div>
        <div className={styles.heroSectionArticlesCta}>
          <Button
            onClick={() => setSelectedIndex(1)}
            index={1}
            selectedIndex={selectedIndex}
          >
            Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
