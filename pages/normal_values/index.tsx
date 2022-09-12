import { Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'

import Meta from 'src/components/Meta'
import CardiacPressureTable from 'src/components/Table/CardiacPressure'
import NormalHemodynamicTable from 'src/components/Table/NormalHemodynamic'

const NormalValuesPage: NextPage = () => {
  return (
    <>
      <Meta title="Normal Values" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">Cardiac Pressure Measurement</Typography>
          <Divider sx={{ mt: 3 }} />
          <CardiacPressureTable />
        </Grid>
        <Grid item xs={12} sm={10} lg={8} mt={3}>
          <Typography variant="h3">Normal Hemodynamic Value</Typography>
          <Divider sx={{ mt: 3 }} />
          <NormalHemodynamicTable />
        </Grid>
      </Grid>
    </>
  )
}

export default NormalValuesPage
