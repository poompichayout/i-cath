import { Divider, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'

import FickForm from 'src/components/Form/Fick'
import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const CalculatorPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Calculator" />
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        spacing={2}
        pt={6}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h2">Cardiac Output- Fick</Typography>
          <Divider sx={{ mt: 3 }} />
          <FickForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default CalculatorPage
