import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

import { getCIKnownCO } from 'src/utils'

type FormValues = {
  cardiacOutput: number
  bodySurfaceArea: number
}

const CIForm = () => {
  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = ({ cardiacOutput, bodySurfaceArea }: FormValues) => {
    const ci = getCIKnownCO(cardiacOutput, bodySurfaceArea)
    if (!Number.isNaN(ci)) {
      setResult(ci)
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
                src="/images/form/ci_yes/CO.svg"
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
                src="/images/form/ci_yes/BSA.svg"
                width={200}
                height={50}
                alt="Body surface area (BSA)"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="bodySurfaceArea"
                type="number"
                label="Body surface area"
                variant="outlined"
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
              <Typography fontSize={20}>{result.toFixed(2)}</Typography>
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
