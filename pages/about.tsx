import type { NextPage } from 'next'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import AboutList from 'src/components/AboutList'
import Meta from 'src/components/Meta'

const About: NextPage = () => {
  return (
    <>
      <Meta title="About us" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">About us</Typography>
          <Divider sx={{ my: 3 }} />
          <AboutList />
        </Grid>
      </Grid>
    </>
  )
}

export default About
