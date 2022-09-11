import { useState } from 'react'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import { useMediaQuery, useTheme } from '@mui/material'

const GorlinForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/form/gorlin/F.svg"
                width={125}
                height={50}
                alt="Flow(F)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Flow(F)"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      cm<sup>3</sup>/sec
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/form/gorlin/Cc.svg"
                width={300}
                height={50}
                alt="Orifice contraction (Cc)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Orifice contraction (Cc)"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/form/gorlin/Cv.svg"
                width={300}
                height={50}
                alt="Velocity loss coefficient (Cv)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Velocity loss coefficient (Cv)"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/form/gorlin/H.svg"
                width={300}
                height={50}
                alt="Pressure gradient (h)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Pressure gradient (h)"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/images/form/gorlin/Area.svg"
                width={70}
                height={50}
                alt="Area"
              />
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography fontSize={20}>{result}</Typography>
              <Typography>
                cm<sup>2</sup>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default GorlinForm
