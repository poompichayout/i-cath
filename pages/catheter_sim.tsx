import type { NextPage } from 'next'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Heart from 'src/components/Heart'
import Meta from 'src/components/Meta'
import {
  Card,
  CardContent,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'

const CatheterSimPage: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <Meta title="Catheterization Simulator" />
      <Grid
        container
        spacing={2}
        pt={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={10} lg={8}>
          <Typography variant="h3">Cathetherize Simulator</Typography>
          <Divider sx={{ my: 3 }} />
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'start',
              }}
            >
              <Heart />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cathether site 3
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    Description
                  </Typography>
                  <List disablePadding sx={{ pl: 2 }}>
                    <ListItem disablePadding>
                      <Typography variant="body2" noWrap color="text.secondary">
                        <b>Location of cathether:</b>&nbsp;Right Ventricle
                      </Typography>
                    </ListItem>
                    <ListItem disablePadding>
                      <Typography variant="body2" noWrap color="text.secondary">
                        <b>Normal range of right ventricle pressure:</b>
                        <br />
                        Peak-systolic: 15-30 mmHg
                        <br />
                        End-diastolic: 1-7 mmHg
                      </Typography>
                    </ListItem>
                    <ListItem disablePadding>
                      <Typography variant="body2" noWrap color="text.secondary">
                        <b>Oxygen saturation:</b>&nbsp;75%
                      </Typography>
                    </ListItem>
                  </List>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Waveforms
                  </Typography>
                  <Image
                    src="/images/fallback.webp"
                    width={400}
                    height={300}
                    alt="fallback"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CatheterSimPage
