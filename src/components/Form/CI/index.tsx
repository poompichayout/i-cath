import { useState } from 'react'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

const CIForm = () => {
  const [result, setResult] = useState(0)
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
                src="/images/form/CI_yes/CO.svg"
                width={200}
                height={50}
                alt="Cardiac Output"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="Cardiac Output"
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
                src="/images/form/ci_yes/BSA.svg"
                width={200}
                height={50}
                alt="Body surface area (BSA)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="Body surface area"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      m<sup>2</sup>
                    </InputAdornment>
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
                src="/images/form/ci_yes/CI.svg"
                width={200}
                height={50}
                alt="Cardiac Index"
              />
            </Grid>
            <Grid
              item
              xs={7}
              sm={5}
              md={6}
              lg={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography fontSize={20}>{result}</Typography>
              <Typography>
                L/min/m<sup>2</sup>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CIForm
