import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import { useMediaQuery, useTheme } from '@mui/material'

import { getPVR } from 'src/utils'

type FormValues = {
  meanPulmonaryArterialPressure: number
  pulmonaryCapillaryWedgePressure: number
  cardiacOutput: number
}

const PVRForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({
    meanPulmonaryArterialPressure,
    pulmonaryCapillaryWedgePressure,
    cardiacOutput,
  }: FormValues) => {
    const pvr = getPVR(
      meanPulmonaryArterialPressure,
      pulmonaryCapillaryWedgePressure,
      cardiacOutput
    )
    if (!Number.isNaN(pvr)) {
      setResult(pvr)
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
                src="/images/form/pvr/mPAP.svg"
                width={300}
                height={50}
                alt="Mean pulmonary arterial pressure (mPAP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="meanPulmonaryArterialPressure"
                type="number"
                fullWidth
                label={
                  isMobile ? 'mPAP' : 'Mean pulmonary arterial pressure (mPAP)'
                }
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('meanPulmonaryArterialPressure')}
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
                src="/images/form/pvr/PCWP.svg"
                width={300}
                height={50}
                alt="Pulmonary capillary wedge pressure (PCWP)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="pulmonaryCapillaryWedgePressure"
                type="number"
                fullWidth
                label={
                  isMobile
                    ? 'PCWP'
                    : 'Pulmonary capillary wedge pressure (PCWP)'
                }
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('pulmonaryCapillaryWedgePressure')}
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
                src="/images/form/pvr/CO.svg"
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
                src="/images/form/pvr/PVR.svg"
                width={300}
                height={50}
                alt="Pulmonary vascular resistance (PVR)"
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
              <Typography fontSize={20}>{result.toFixed(2)}</Typography>
              <Typography>
                dyn&#12539;s/cm<sup>-5</sup>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default PVRForm
