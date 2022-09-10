import { Divider, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'

import FickForm from 'src/components/Form/Fick'
import Meta from 'src/components/Meta'

const FickPage: NextPage = () => {
  return (
    <>
      <Meta title="Calculator" />
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
            Cardiac Outputcan be calculated as follows:
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default FickPage
