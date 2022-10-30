import type { NextPage } from 'next'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Meta from 'src/components/Meta'
import PageInfoCard from 'src/components/Card/PageInfoCard'

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">i-Cath</Typography>
          <Typography variant="body1" mt={2}>
            i-Cath an online educational tool for cardiac catheterization
            learning
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6">Contents</Typography>

          <Grid container mt={2} spacing={2}>
            <Grid item xs={12} sm={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageInfoCard variant="normal_values" />
            </Grid>
            <Grid item xs={12} sm={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageInfoCard variant="catheter_sim" />
            </Grid>
            <Grid item xs={12} sm={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <PageInfoCard variant="calculator" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
