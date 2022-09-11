import { Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'

import Meta from 'src/components/Meta'
import NormalHemodynamicTable from 'src/components/NormalHemodynamicTable'

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
      </Grid>
    </>
  )
}

export default CardiacPressurePage
