import type { NextPage } from 'next'
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Form from 'src/components/Form'
import Meta from 'src/components/Meta'
import ReferenceCard from 'src/components/Card/Reference'
import { refs } from 'src/components/Card/Reference/constants/calculator'

const PVRPage: NextPage = () => {
  return (
    <>
      <Meta title="PVR - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">
            Pulmonary vascular resistance (PVR)
          </Typography>
          <Divider sx={{ mt: 3 }} />
          <Form />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">
            Pulmonary vascular resistance equation
          </Typography>
          <Typography my={3} align="justify">
            Pulmonary vascular resistance (PVR) is similar to systemic vascular
            resistance (SVR). However the differences between them is that PVR
            is refer to the arteries that perfuse blood to the lung. Pulmonary
            vascular resistance (PVR) can be calculated by subtracting pulmonary
            capillary wedge pressure (PCWP) from the mean pulmonary arterial
            pressure (mPAP), divided by the cardiac output (CO) and multiplied
            by 80. The typical range is 20 to 120 dyn s/cm<sup>5</sup>.
          </Typography>

          <Typography variant="h6">
            PVR can be calculated as follows:
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
              src="/images/equation/PVR.svg"
              width={400}
              height={100}
              alt="PVR"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>PVR = Pulmonary vascular resistance</Typography>
            <Typography>mPAP = Mean pulmonary arterial pressure</Typography>
            <Typography>PCWP = Pulmonary capillary wedge pressure</Typography>
            <Typography>CO = Cardiac output</Typography>
          </Grid>

          <Grid item mt={5}>
            <ReferenceCard refs={[refs['pvr']]} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PVRPage
