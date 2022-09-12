import type { NextPage } from 'next'
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import PAPiForm from 'src/components/Form/PAPI'
import Meta from 'src/components/Meta'

const PAPiPage: NextPage = () => {
  return (
    <>
      <Meta title="PAPi - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">
            Pulmonary artery pulsatility index (PAPi)
          </Typography>
          <Divider sx={{ mt: 3 }} />
          <PAPiForm />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">
            Pulmonary artery pulsatility index equation
          </Typography>
          <Typography my={3} align="justify">
            The ratio of the pulmonary artery pressure to the right atrial
            pressure is known asthe pulmonary artery pulsatility index, or PAPi.
            In acute inferior wall myocardial infarction, PAPi lessthan 0.9 has
            very high sensitivity and specificity in predicting right
            ventricular failure and in-hospital death. PAPi less than 1.85 is
            also used to predict whether patients may develop right ventricular
            failure and hence require right ventricular hemodynamic device
            assistance following the insertion of left ventricular assist
            devices. It is also used to predict poor outcomes in individuals
            suffering from chronicright heart failure.
          </Typography>

          <Typography variant="h6">
            PAPi can be calculated as follows:
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
              src="/images/equation/PAPi.svg"
              width={400}
              height={100}
              alt="PAPi"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>PAPi = Pulmonary artery pulsatility index</Typography>
            <Typography>PASP = Pulmonary artery systolic pressure</Typography>
            <Typography>PADP = Pulmonary artery diastolic pressure</Typography>
            <Typography>RAP = Right atrial pressure</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default PAPiPage
