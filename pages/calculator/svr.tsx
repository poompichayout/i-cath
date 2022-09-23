import type { NextPage } from 'next'
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Form from 'src/components/Form'
import Meta from 'src/components/Meta'

const SVRPage: NextPage = () => {
  return (
    <>
      <Meta title="SVR - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">
            Systemic vascular resistance (SVR)
          </Typography>
          <Divider sx={{ mt: 3 }} />
          <Form />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">
            Systemic vascular resistance equation
          </Typography>
          <Typography my={3} align="justify">
            Systemic vascular resistance is the resistance to blood flow , which
            is provided by the whole systemic vasculature, except the pulmonary
            vasculature. The systemic vascular resistance which can be called
            astotal peripheral resistance. Factors influencing vascular
            resistance in specialized vascular beds dictate SVR. Mechanisms that
            produce vasoconstriction will enhance the SVR, while those that
            cause vasodilatation will diminish the SVR. Although variations in
            blood vessel diameters are the primary determinants of SVR, changes
            in blood viscosity also have an impact on SVR. Normal SVR is between
            900 and 1440 dyn/s/cm<sup>-5</sup>.
          </Typography>

          <Typography variant="h6">
            SVR can be calculated as follows:
          </Typography>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src="/images/equation/SVR.svg"
              width={400}
              height={100}
              alt="SVR"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>SVR = Systemic vascular resistance</Typography>
            <Typography>MAP = Mean arterial pressure</Typography>
            <Typography>RAP = Right arterial pressure</Typography>
            <Typography>CO = Cardiac output</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default SVRPage
