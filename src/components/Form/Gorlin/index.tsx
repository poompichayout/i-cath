import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import { useMediaQuery, useTheme } from '@mui/material'

import { getGorlinArea, NumberFormat } from 'src/utils'

type FormValues = {
  flow: number
  orificeContraction: number
  velocityLossCoefficient: number
  pressureGradient: number
}

const GorlinForm = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({
    flow,
    orificeContraction,
    velocityLossCoefficient,
    pressureGradient,
  }: FormValues) => {
    const area = getGorlinArea(
      flow,
      orificeContraction,
      velocityLossCoefficient,
      pressureGradient
    )
    if (!Number.isNaN(area)) {
      setResult(area)
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
                src="/images/form/gorlin/F.svg"
                width={100}
                height={50}
                alt="Flow(F)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="flow"
                type="number"
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
                {...register('flow')}
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
                width={200}
                height={50}
                alt="Orifice contraction (Cc)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="orificeContraction"
                type="number"
                fullWidth
                variant="outlined"
                label={
                  <Typography>
                    Orifice contraction (C<sub>c</sub>)
                  </Typography>
                }
                {...register('orificeContraction')}
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
                width={225}
                height={50}
                alt="Velocity loss coefficient (Cv)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="velocityLossCoefficient"
                type="number"
                fullWidth
                variant="outlined"
                label={
                  <Typography>
                    Velocity loss coefficient (C<sub>v</sub>)
                  </Typography>
                }
                {...register('velocityLossCoefficient')}
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
                width={200}
                height={50}
                alt="Pressure gradient (h)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="pressureGradient"
                type="number"
                fullWidth
                label="Pressure gradient (h)"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('pressureGradient')}
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
                width={50}
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
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
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
