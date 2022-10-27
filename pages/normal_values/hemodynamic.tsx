import type { NextPage } from 'next'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Meta from 'src/components/Meta'
import NormalHemodynamicTable from 'src/components/Table/NormalHemodynamic'
import ReferenceCard from 'src/components/Card/Reference'

const CardiacPressurePage: NextPage = () => {
  return (
    <>
      <Meta title="Normal Hemodynamic Value" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">Normal Hemodynamic Value</Typography>
          <Divider sx={{ mt: 3 }} />
          <NormalHemodynamicTable />
        </Grid>
        <Grid item xs={12} sm={10} lg={8} mt={3}>
          <ReferenceCard />
        </Grid>
      </Grid>
    </>
  )
}

export default CardiacPressurePage
