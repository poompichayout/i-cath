import type { NextPage } from 'next'
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Form from 'src/components/Form'
import Meta from 'src/components/Meta'

const GorlinPage: NextPage = () => {
  return (
    <>
      <Meta title="Gorlin - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">
            The Gorlin equation - Valve area measurement
          </Typography>
          <Divider sx={{ mt: 3 }} />
          <Form />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">Gorlin equation</Typography>
          <Typography my={3} align="justify">
            The Gorlins published their algorithm for estimating valve area. It
            is used to calculate valve area during invasive hemodynamic
            assessment via cardiaccatheterization. The coefficient of orifice
            contraction accountsfor the fact that fluids flowing through an
            aperture tend to flow through its center, resulting in a
            physiological orifice that issmaller than the physical orifice. The
            velocity coefficient accounts for the fact that not all the pressure
            gradient is converted to flow due to friction within the valve.
            These coefficients were never discovered. Instead, the Gorlins
            employed an empiricalconstant to improve the alignment of their
            estimated mitral valve regions with real valve areas acquired at
            autopsy or surgery. There is
          </Typography>

          <Typography variant="h6">
            Gorlin equation can be calculated as follows:
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
              src="/images/equation/Area.svg"
              width={400}
              height={100}
              alt="Area"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>F = Flow</Typography>
            <Typography>
              C<sub>c</sub> = Osrifice contraction
            </Typography>
            <Typography>
              C<sub>v</sub> = Velocity loss coefficient
            </Typography>
            <Typography>g = Gravitational constant</Typography>
            <Typography>h = Pressure gradient</Typography>
          </Grid>
          <Typography sx={{ mt: 2 }}>Note: </Typography>
          <Typography>F = CO / SEP x HR</Typography>
          <Typography>g = 980 cm/s</Typography>
          <Typography>C<sub>c</sub> = 37.7</Typography>
          <Typography>C<sub>v</sub> = 44.5</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default GorlinPage
