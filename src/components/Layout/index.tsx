import { PropsWithChildren } from 'react'

import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography>Today is the</Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <div>
          <Typography variant="h5">iCath</Typography>
        </div>
      </Drawer>
      <main>{children}</main>
    </div>
  )
}

export default Layout
