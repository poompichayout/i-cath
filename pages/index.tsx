import type { NextPage } from 'next'
import Image from 'next/image'

import Grid from '@mui/material/Grid'

import Meta from 'src/components/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" />
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item>
          <Image
            src="/images/ogimage.png"
            width={719.5}
            height={500}
            alt="icath"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
