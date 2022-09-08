import { Grid } from '@mui/material'

import { PropsWithChildren } from 'react'

import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'

const CalculatorLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <Grid container style={{ marginTop: '60px', display: 'flex' }}>
        <Grid item sm={0} sx={{ position: 'fixed', left: 0, width: 350 }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default CalculatorLayout
