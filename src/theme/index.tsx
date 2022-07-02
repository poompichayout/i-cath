import { useMemo, PropsWithChildren } from 'react'
// material
import { CssBaseline, ThemeOptions } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'
//
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const themeOptions = useMemo(
    () =>
      ({
        palette,
        typography,
        customShadows,
        shadows,
        shape: { borderRadius: 8 },
      } as ThemeOptions),
    []
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
