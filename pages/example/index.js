import Head from "next/head";
import { css } from "@emotion/css";
import { Button } from "../../components/styled/Button/Button.styled";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { AppThemeContext } from "../../context/AppThemeContext/AppThemeContext";

export default function Example() {
  const theme = useTheme();

  const { toogleThemeMode, isDarkMode } = useContext(AppThemeContext);

  return (
    <div
      className={css({
        padding: theme.spaces[10],
        backgroundColor: isDarkMode
          ? theme.colors.gray[900]
          : theme.colors.gray[50]
      })}
    >
      <Head>
        <title>Dopefolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1
          className={css({
            color: theme.colors.indigo[500],
            fontSize: theme.fontSizes.heading1,
            marginBottom: theme.spaces[4]
          })}
        >
          DOPEFOLIO
        </h1>
        <p
          className={css({
            fontSize: theme.fontSizes.large,
            lineHeight: theme.spaces[10],
            marginBottom: theme.spaces[8],
            color: isDarkMode ? theme.colors.white : theme.colors.black
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi possimus
          voluptate animi fuga iusto distinctio tempora eveniet delectus omnis!
          Magnam eveniet dolores quas facilis minus placeat. Laborum natus eius
          quisquam?
        </p>
        <Button onClick={() => toogleThemeMode()}>HELLO WORLD</Button>
      </div>
    </div>
  );
}
