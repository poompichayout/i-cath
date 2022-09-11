import { useState } from 'react'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

const FickForm = () => {
  const [result, setResult] = useState(0)
  return (
    <Grid container mt={3}>
      <Grid item xs={12} spacing={2}>
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
                src="/images/form/fick/ArterialO2Sat.svg"
                width={200}
                height={50}
                alt="Arterial O2 Sat"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="Arterial O2 Sat"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                sx={{ borderBlockColor: 'red' }}
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
                src="/images/form/fick/VenousO2Sat.svg"
                width={200}
                height={50}
                alt="Venous O2 Sat"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="Venous O2 Sat"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                sx={{ borderBlockColor: 'red' }}
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
                src="/images/form/fick/O2Consumption.svg"
                width={200}
                height={50}
                alt="O2 Consumption"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="O2 Consumption"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L/min</InputAdornment>
                  ),
                }}
                sx={{ borderBlockColor: 'red' }}
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
                src="/images/form/fick/CO.svg"
                width={200}
                height={50}
                alt="O2 Consumption"
              />
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography fontSize={20}>{result} L/min</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FickForm
