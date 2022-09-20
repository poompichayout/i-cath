import React, { useState } from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import Image from 'next/image'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { useTheme } from '@mui/material'

interface BSAProps<T extends { bodySurfaceArea: number }> {
  register: UseFormRegister<T>
}

type FormValues = {
  weight: number
  height: number
}

interface BSAProps2 {
  register: any
  setValue: any
}

const BSAForm = ({ register, setValue }: BSAProps2) => {
  const theme = useTheme()
  const [isOpen, setOpen] = useState<boolean>(false)

  const { register: subRegister, handleSubmit, reset } = useForm<FormValues>()

  const onBSASubmit = ({ weight, height }: FormValues) => {
    const bsa = 0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425)
    setValue('bodySurfaceArea', bsa)
  }

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Grid container spacing={2} mt={2}>
      <Grid
        item
        xs={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          flexDirection: 'column',
        }}
      >
        <Image
          src="/images/form/ci_no/BSA.svg"
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
		  fullWidth
          InputLabelProps={{ shrink: true }}
          disabled={isOpen}
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
      <Grid item xs={12}>
        <Button
          variant="text"
          sx={{ px: 0 }}
          endIcon={<ArrowDropDownIcon />}
          onClick={toggle}
        >
          <Typography fontSize={12}>
            <u>
              Calculate <b>Body surface area (BSA)</b>
            </u>
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Collapse
          in={isOpen}
          timeout="auto"
          unmountOnExit
          sx={{ width: '100%' }}
        >
          <Container
            sx={{ backgroundColor: theme.palette.grey[200], pb: 2, borderRadius: '10px' }}
            component="form"
            onChange={handleSubmit(onBSASubmit)}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Grid
                item
                xs={5}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography>Weight</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="weight"
                  type="number"
                  label="Weight"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                  }}
                  {...subRegister('weight')}
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              mt={1}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Grid
                item
                xs={5}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography>Height</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="height"
                  type="number"
                  label="Height"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">cm</InputAdornment>
                    ),
                  }}
                  {...subRegister('height')}
                />
              </Grid>
            </Grid>
          </Container>
        </Collapse>
      </Grid>
    </Grid>
  )
}

export default BSAForm
