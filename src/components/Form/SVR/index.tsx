import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import { useMediaQuery, useTheme } from '@mui/material'

import { getSVR, NumberFormat } from 'src/utils'

type FormValues = {
  meanArterialPressure: number
  rightArterialPressure: number
  cardiacOutput: number
}

const SVRForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({
    meanArterialPressure,
    rightArterialPressure,
    cardiacOutput,
  }: FormValues) => {
    const svr = getSVR(
      meanArterialPressure,
      rightArterialPressure,
      cardiacOutput
    )
    if (!Number.isNaN(svr)) {
      setResult(svr)
    } else {
      setResult(0)
    }
  }

  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Box component="form" onChange={handleSubmit(onSubmit)}>
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
                src="/images/form/svr/MAP.svg"
                width={300}
                height={50}
                alt="Mean Arterial Pressure (MAP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="meanArterialPressure"
                type="number"
                fullWidth
                label={isMobile ? 'MAP' : 'Mean Arterial Pressure (MAP)'}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('meanArterialPressure')}
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
                src="/images/form/svr/RAP.svg"
                width={300}
                height={50}
                alt="Right Arterial Pressure (RAP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="rightArterialPressure"
                type="number"
                fullWidth
                label={isMobile ? 'RAP' : 'Right Arterial Pressure (RAP)'}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('rightArterialPressure')}
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
                src="/images/form/svr/CO.svg"
                width={200}
                height={50}
                alt="Cardiac Output (CO)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="cardiacOutput"
                type="number"
                fullWidth
                label="Cardiac Output (CO)"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L/min</InputAdornment>
                  ),
                }}
                {...register('cardiacOutput')}
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
                src="/images/form/svr/SVR.svg"
                width={300}
                height={50}
                alt="Systemic vascular resistance (SVR)"
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
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
              <Typography>
                dyn/s/cm<sup>-5</sup>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SVRForm
