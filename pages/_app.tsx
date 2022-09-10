import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'

import PageLayout from 'src/components/Layout/MainLayout'
import createEmotionCache from 'src/createEmotionCache'
import ThemeProvider from 'src/theme'
import { useRouter } from 'next/router'

const clientSideEmotionCache = createEmotionCache()

interface ApplicationProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: ApplicationProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { pathname } = useRouter()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </CacheProvider>
  )
}
