import "@/styles/globals.css";
import { rootTheme } from "@/utils/themes";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

export interface PortfolioAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: PortfolioAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={rootTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
