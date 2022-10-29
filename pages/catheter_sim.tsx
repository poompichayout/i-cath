import type { NextPage } from 'next'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Heart from 'src/components/Heart'
import Meta from 'src/components/Meta'
import { CathetherizeContext } from 'src/contexts/CathetherizeContext'
import HeartCard from 'src/components/Card/HeartCard'
import { useState } from 'react'

const CatheterSimPage: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [pageId, setPageId] = useState<number>(1)
  return (
    <>
      <Meta title="Catheterization Simulator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={10}>
          <Typography variant="h3">
            Right heart catheterization simulator
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <CathetherizeContext.Provider value={{ pageId, setPageId }}>
              <Grid
                item
                xs={12}
                sm={5}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isMobile ? 'center' : 'left',
                  justifyContent: 'start',
                }}
              >
                <Heart />
                <Box display="flex" justifyContent="center">
                  <Typography variant="h5">Tap number to change catheter site</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={7}>
                <HeartCard />
              </Grid>
            </CathetherizeContext.Provider>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CatheterSimPage
