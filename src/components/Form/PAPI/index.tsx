import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import { useMediaQuery, useTheme } from '@mui/material'

import { getPAPi, NumberFormat } from 'src/utils'

type FormValues = {
  pulmonaryArterySystolicPressure: number
  pulmonaryArteryDiastolicPressure: number
  rightAtrialPressure: number
}

const PAPiForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({
    pulmonaryArterySystolicPressure,
    pulmonaryArteryDiastolicPressure,
    rightAtrialPressure,
  }: FormValues) => {
    const papi = getPAPi(
      pulmonaryArterySystolicPressure,
      pulmonaryArteryDiastolicPressure,
      rightAtrialPressure
    )
    if (!Number.isNaN(papi)) {
      setResult(papi)
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
                src="/images/form/papi/PASP.svg"
                width={300}
                height={50}
                alt="Pulmonary artery systolic pressure (PASP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="pulmonaryArterySystolicPressure"
                type="number"
                fullWidth
                label={
                  isMobile
                    ? 'PASP'
                    : 'Pulmonary artery systolic pressure (PASP)'
                }
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('pulmonaryArterySystolicPressure')}
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
                src="/images/form/papi/PADP.svg"
                width={300}
                height={50}
                alt="Pulmonary artery diastolic pressure (PADP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="pulmonaryArteryDiastolicPressure"
                type="number"
                fullWidth
                label={
                  isMobile
                    ? 'PADP'
                    : 'Pulmonary artery diastolic pressure (PADP)'
                }
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('pulmonaryArteryDiastolicPressure')}
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
                src="/images/form/papi/RAP.svg"
                width={300}
                height={50}
                alt="Right atrial pressure (RAP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="rightAtrialPressure"
                type="number"
                fullWidth
                label={isMobile ? 'RAP' : 'Right atrial pressure (RAP)'}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('rightAtrialPressure')}
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
                src="/images/form/papi/PAPi.svg"
                width={300}
                height={50}
                alt="Pulmonary artery pulsatility index (PAPi)"
              />
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'left',
              }}
            >
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default PAPiForm
