import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'

import Layout from 'src/components/Layout'
import createEmotionCache from 'src/createEmotionCache'
import theme from 'src/theme'

const clientSideEmotionCache = createEmotionCache()

interface ApplicationProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: ApplicationProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
