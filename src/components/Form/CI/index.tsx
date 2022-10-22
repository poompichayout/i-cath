import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

import { getCIKnownCO, NumberFormat } from 'src/utils'
import { useMediaQuery, useTheme } from '@mui/material'

export type FormValues = {
  cardiacOutput: number
  bodySurfaceArea: number
  weight: number
  height: number
  strokeVolume: number
  hearthRate: number
}

interface FormProps {
  knownCO: boolean
  knownBSA: boolean
}

const GRID_TEXT_FIELD_PROPS = { xs: 12, md: 10, lg: 6, xl: 6 }

const CIForm = ({ knownCO, knownBSA }: FormProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  useEffect(() => {
    setResult(0)
  }, [knownCO, knownBSA])

  const onSubmit = (values: FormValues) => {
    const {
      cardiacOutput,
      bodySurfaceArea,
      weight,
      height,
      strokeVolume,
      hearthRate,
    } = values

    const bsaFromWeight =
      0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425)

    const ci = getCIKnownCO(
      knownCO ? cardiacOutput : strokeVolume * hearthRate,
      knownBSA ? bodySurfaceArea : bsaFromWeight
    )

    setResult(Number.isNaN(ci) ? 0 : ci)
  }

  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Box component="form" onChange={handleSubmit(onSubmit)}>
          {knownCO ? (
            <Grid container spacing={2}>
              <Grid item {...GRID_TEXT_FIELD_PROPS}>
                <TextField
                  id="cardiacOutput"
                  type="number"
                  label="Cardiac Output"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">L/min</InputAdornment>
                    ),
                  }}
                  {...register('cardiacOutput')}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item {...GRID_TEXT_FIELD_PROPS}>
                <TextField
                  id="strokeVolume"
                  type="number"
                  label="Stroke Volume"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">mL/beat</InputAdornment>
                    ),
                  }}
                  {...register('strokeVolume')}
                />
              </Grid>

              <Grid
                item
                {...GRID_TEXT_FIELD_PROPS}
                sx={isMobile ? { mt: 2 } : undefined}
              >
                <TextField
                  id="hearthRate"
                  type="number"
                  label="Heart Rate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">beats/min</InputAdornment>
                    ),
                  }}
                  {...register('hearthRate')}
                />
              </Grid>
            </Grid>
          )}

          {knownBSA ? (
            <Grid container spacing={2} mt={2}>
              <Grid item {...GRID_TEXT_FIELD_PROPS}>
                <TextField
                  id="bodySurfaceArea"
                  type="number"
                  label="Body surface area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        m<sup>2</sup>
                      </InputAdornment>
                    ),
                  }}
                  {...register('bodySurfaceArea')}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2} mt={2}>
              <Grid item {...GRID_TEXT_FIELD_PROPS}>
                <TextField
                  id="weight"
                  type="number"
                  label="Weight"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                  {...register('weight')}
                />
              </Grid>

              <Grid
                item
                {...GRID_TEXT_FIELD_PROPS}
                sx={isMobile ? { mt: 2 } : undefined}
              >
                <TextField
                  id="height"
                  type="number"
                  label="Height"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">cm</InputAdornment>
                    ),
                  }}
                  {...register('height')}
                />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2} mt={2}>
            <Grid
              item
              {...GRID_TEXT_FIELD_PROPS}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>Cardiac Index</Typography>
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
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
