import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

import { FormValues, NumberFormat } from 'src/utils'

import calculator, { FORM } from './constants'

const last = (arr: any[]) => arr[arr.length - 1]

type CalculatorPage = keyof typeof calculator

const Form = () => {
  const { pathname } = useRouter()
  const subpath = useMemo(
    () => last(pathname.split('/')),
    [pathname]
  ) as CalculatorPage
  const form = useMemo(() => calculator[subpath], [subpath])

  const [result, setResult] = useState<number>(0)
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (values: FormValues) => {
    const co = form.calculate(values)
    setResult(Number.isNaN(co) ? 0 : co)
  }
  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Box component="form" onChange={handleSubmit(onSubmit)}>
          {form.elements.map((e, index) => (
            <Grid
              key={e.id}
              container
              spacing={2}
              {...(index !== 0 ? { mt: 2 } : undefined)}
            >
              <Grid item xs={12} md={10} xl={7}>
                <TextField
                  id={e.id}
                  type="number"
                  variant="outlined"
                  label={e.label}
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {e.endLabel}
                      </InputAdornment>
                    ),
                  }}
                  {...register(e.id as keyof typeof FORM)}
                />
              </Grid>
            </Grid>
          ))}

          <Grid container spacing={2} mt={2}>
            <Grid
              item
              xs={12}
              md={10}
              xl={7}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {form.resultStartLabel && (
                <Typography>{form.resultStartLabel}</Typography>
              )}
              <Typography fontSize={20}>
                {NumberFormat.format(result)}
              </Typography>
              {form.resultEndLabel && (
                <Typography>{form.resultEndLabel}</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Form
