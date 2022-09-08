import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'

import Layout from 'src/components/Layout'
import createEmotionCache from 'src/createEmotionCache'
import ThemeProvider from 'src/theme'

const clientSideEmotionCache = createEmotionCache()

interface ApplicationProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: ApplicationProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
