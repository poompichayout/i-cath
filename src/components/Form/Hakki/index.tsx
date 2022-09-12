import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

import { getAVA } from 'src/utils'

type FormValues = {
  cardiacOutput: number
  meanPressureGradient: number
}

const HakkiForm = () => {
  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({ cardiacOutput, meanPressureGradient }: FormValues) => {
    const ava = getAVA(cardiacOutput, meanPressureGradient)
    if (!Number.isNaN(ava)) {
      setResult(ava)
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
                src="/images/form/hakki/CO.svg"
                width={200}
                height={50}
                alt="Cardiac Output"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="cardiacOutput"
                type="number"
                label="Cardiac Output"
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
                src="/images/form/hakki/MeanPressureGradient.svg"
                width={250}
                height={50}
                alt="Mean pressure gradient"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="meanPressureGradient"
                type="number"
                label="Mean pressure gradient"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mmHg</InputAdornment>
                  ),
                }}
                {...register('meanPressureGradient')}
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
                src="/images/form/hakki/ValveArea.svg"
                width={100}
                height={50}
                alt="Valve Area"
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
              <Typography fontSize={20}>{result.toFixed(2)}</Typography>
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

export default HakkiForm
