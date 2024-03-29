import React, { PropsWithChildren, useState } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'

import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'

const CalculatorLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <React.Fragment>
      <Navbar toggleDrawer={() => setOpenDrawer((prev) => !prev)} />
      <Sidebar
        open={isMobile ? openDrawer : true}
        onClose={() => setOpenDrawer(false)}
      />
      <Grid container style={{ marginTop: '60px', display: 'flex' }}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default CalculatorLayout
