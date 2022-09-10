import { Theme } from '@mui/material'

export default function Appbar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'white',
        },
      },
    },
  }
}
