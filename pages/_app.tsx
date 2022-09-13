import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
    );
  }
}

export default MyApp;
