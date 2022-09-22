import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import Box from '@mui/material/Box'
import CheckBox from '@mui/material/CheckBox'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CIForm from 'src/components/Form/CI'
import Meta from 'src/components/Meta'

const CIPage: NextPage = () => {
  const [knownCO, setKnownCO] = useState<boolean>(true)
  const [knownBSA, setKnownBSA] = useState<boolean>(true)
  return (
    <>
      <Meta title="CI - Calculator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">Cardiac Index (CI)</Typography>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              maxWidth: 'fit-content',
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
            }}
          >
            <CheckBox
              checked={knownCO}
              onChange={(event) => setKnownCO(event.target.checked)}
            />
            <Typography>Known cardiac output</Typography>

            <CheckBox
              checked={knownBSA}
              onChange={(event) => setKnownBSA(event.target.checked)}
            />
            <Typography>Known BSA</Typography>
          </Box>
          <CIForm knownCO={knownCO} knownBSA={knownBSA} />
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4">Cardiac Index equation</Typography>
          <Typography my={3} align="justify">
            Multiplying the cardiac output by the body surface area yields the
            cardiac index. The normal cardiac output may vary with body size and
            mass. Adversely, a healthy cardiac index is greater than 2.5 liters
            per minute per square meter. However, if the pulmonary capillary
            wedge pressure which greater than 15 mm Hg and an index under 2.2
            liters per minute per metersquared are considered cardiogenicshock.
          </Typography>

          <Typography variant="h6">
            CardiacIndex can be calculated asfollows:
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
              src="/images/equation/CI.svg"
              width={400}
              height={100}
              alt="CI"
            />
          </Grid>
          <Typography fontWeight={700}>Where</Typography>
          <Grid item sx={{ ml: 5, lineHeight: 1.5 }}>
            <Typography>CI = Cardiac index</Typography>
            <Typography>CO = Cardiac Output</Typography>
            <Typography>SV = Stroke volume</Typography>
            <Typography>HR = Heart Rate</Typography>
            <Typography>BSA = Body surface area</Typography>

            <Typography sx={{ mt: 2 }}>Note: </Typography>
            <Image
              src="/images/equation/BSA.svg"
              width={400}
              height={100}
              alt="BSA"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CIPage
