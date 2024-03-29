import { Theme } from '@mui/material'

import Appbar from './Appbar'
import Card from './Card'
import Paper from './Paper'
import Input from './Input'
import Button from './Button'
import Tooltip from './Tooltip'
import Typography from './Typography'
import CssBaseline from './CssBaseline'
import Autocomplete from './Autocomplete'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Appbar(theme),
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Typography(theme),
    CssBaseline(theme),
    Autocomplete(theme)
  )
}
