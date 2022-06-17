import { ThemeProvider } from "@emotion/react";
import { useContext, useEffect } from "react";
import AppThemeProvider, {
  AppThemeContext
} from "../context/AppThemeContext/AppThemeContext";
import "../styles/globals.css";
import { theme } from "../theme/theme";
import { appThemeDark, appThemeLight } from "../theme/appTheme";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </AppThemeProvider>
  );
}

function App({ children }) {
  const { isDarkMode } = useContext(AppThemeContext);

  useEffect(() => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html.style.backgroundColor = appThemeDark.backgroundColor;
      html.style.color = appThemeDark.bodyTextColor;
    } else {
      html.style.backgroundColor = appThemeLight.backgroundColor;
      html.style.color = appThemeLight.bodyTextColor;
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider
      theme={
        isDarkMode
          ? { ...theme, appTheme: { ...appThemeDark } }
          : { ...theme, appTheme: { ...appThemeLight } }
      }
    >
      {children}
    </ThemeProvider>
  );
}

export default MyApp;
