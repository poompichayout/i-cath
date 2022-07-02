import { PropsWithChildren, useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DashboardSidebar from './DashboardSidebar'

const Layout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography>Today is the</Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
