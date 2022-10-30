import type { NextPage } from 'next'
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Form from 'src/components/Form'
import Meta from 'src/components/Meta'
import ReferenceCard from 'src/components/Card/Reference'
import { refs } from 'src/components/Card/Reference/constants/calculator'

const HakkiPage: NextPage = () => {
  return (
    <>
      <Meta title="Hakki - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">The Hakki equation</Typography>
          <Divider sx={{ mt: 3 }} />
          <Form />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">Hakki equation</Typography>
          <Typography my={3} align="justify">
            The stenosed cardiac valve areas could be calculated using the
            Hakki&apos;s formula (simplified Gorlin formula) during
            cardiaccatheterization, and the formula can also be applied to
            magnetic resonance imaging (MRI) to measure the stenosed cardiac
            valve areas. Transthoracic echocardiography and MRI planimetry were
            used to compare the accuracy of this method to the continuity
            equation in assessing the degree of aorticstenosis.
          </Typography>

          <Typography variant="h6">
            Hakki equation can be calculated as follows:
          </Typography>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src="/images/equation/AVA.svg"
              width={400}
              height={100}
              alt="AVA"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid
            item
            sx={{
              ml: 5,
              lineHeight: 1.5,
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Typography>CO = Cardiac Output</Typography>
            <Typography>AVA = Aortic valve area</Typography>
          </Grid>
          <Typography sx={{ mt: 2 }}>Note: </Typography>
          <Image
            src="/images/equation/MPG.svg"
            width={800}
            height={100}
            alt="Mean pressure Gradient"
          />

          <Grid item>
            <ReferenceCard refs={[refs['hakki']]} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default HakkiPage
