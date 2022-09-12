import type { NextPage } from 'next'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Meta from 'src/components/Meta'
import CardiacPressureTable from 'src/components/Table/CardiacPressure'

const CardiacPressurePage: NextPage = () => {
  return (
    <>
      <Meta title="Cardiac Pressure Measurement" />
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
      </Grid>
    </>
  )
}

export default CardiacPressurePage
