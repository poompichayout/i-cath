import '../styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'

import MainLayout from 'src/components/Layout/MainLayout'
import CalculatorLayout from 'src/components/Layout/CalculatorLayout'
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

  const PageLayout = !pathname.startsWith('/calculator')
    ? MainLayout
    : CalculatorLayout

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
