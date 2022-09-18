import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

import { getCO, NumberFormat } from 'src/utils'

type FormValues = {
  oxygenConsumption: number
  arterialOxygenSaturation: number
  venousOxygenSaturation: number
}

const FickForm = () => {
  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({
    oxygenConsumption,
    arterialOxygenSaturation,
    venousOxygenSaturation,
  }: FormValues) => {
    const co = getCO(
      oxygenConsumption,
      arterialOxygenSaturation,
      venousOxygenSaturation
    )
    if (!Number.isNaN(co)) {
      setResult(co)
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
                src="/images/form/fick/ArterialO2Sat.svg"
                width={200}
                height={50}
                alt="Arterial O2 Sat"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="oxygenConsumption"
                type="number"
                variant="outlined"
                label={
                  <Typography>
                    Arterial O<sub>2</sub> Sat
                  </Typography>
                }
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                {...register('oxygenConsumption')}
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
                id="arterialOxygenSaturation"
                type="number"
                variant="outlined"
                label={
                  <Typography>
                    Venous O<sub>2</sub> Sat
                  </Typography>
                }
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                {...register('arterialOxygenSaturation')}
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
                id="venousOxygenSaturation"
                type="number"
                variant="outlined"
                label={
                  <Typography>
                    O<sub>2</sub> Consumption
                  </Typography>
                }
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L/min</InputAdornment>
                  ),
                }}
                {...register('venousOxygenSaturation')}
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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
              <Typography>L/min</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FickForm
