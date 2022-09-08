import { Divider, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'

import Meta from 'src/components/Meta'
import CardiacPressureTable from 'src/components/CardiacPressureTable'
import NormalHemodynamicTable from 'src/components/NormalHemodynamicTable'

import styles from '../styles/Home.module.css'

const NormalValuesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Normal Values" />
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        spacing={2}
        pt={6}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h2">Cardiac Pressure Measurement</Typography>
          <Divider sx={{ mt: 3 }} />
          <CardiacPressureTable />
        </Grid>
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h2">Normal Hemodynamic Value</Typography>
          <Divider sx={{ mt: 3 }} />
          <NormalHemodynamicTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default NormalValuesPage
