import { Divider, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'

import FickForm from 'src/components/Form/Fick'
import Meta from 'src/components/Meta'

const FickPage: NextPage = () => {
  return (
    <>
      <Meta title="Fick - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">Cardiac Output - Fick</Typography>
          <Divider sx={{ mt: 3 }} />
          <FickForm />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">The Fick principle</Typography>
          <Typography my={3} align="justify">
            Fick principle statesthat blood flow is proportional to the
            difference in concentration of a substance in the blood as it enters
            and leaves an organ and which is used to determine cardiac output
            from the difference in oxygen concentration in blood before it
            enters and after it leavesthe lungs and from the rate atwhich oxygen
            isconsumed.
          </Typography>

          <Typography variant="h6">
            Cardiac Output can be calculated as follows:
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
              src="/images/equation/VO2.svg"
              width={400}
              height={100}
              alt="VO2"
            />
            <Image
              src="/images/equation/CO.svg"
              width={400}
              height={75}
              alt="VO2"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>
              VO
              <sub>2</sub> = Oxygen consumption
            </Typography>

            <Typography>
              C<sub>a</sub> = Arterial oxygen saturation
            </Typography>
            <Typography>
              C<sub>v</sub> = Venous oxygen saturation
            </Typography>
            <Typography>CO = Cardiac output</Typography>

            <Typography sx={{ mt: 2 }}>Note: </Typography>
            <Typography>
              (C<sub>a</sub> - C<sub>v</sub>) = arteriovenous oxygen difference
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default FickPage
