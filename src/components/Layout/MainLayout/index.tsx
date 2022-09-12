import React, { PropsWithChildren, useState } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'
import { DRAWER_WIDTH } from 'src/components/contants'

const MainLayout = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div style={{ marginLeft: isMobile ? undefined : `${DRAWER_WIDTH}px` }}>
      <Navbar toggleDrawer={() => setOpenDrawer((prev) => !prev)} />
      <Sidebar
        open={isMobile ? openDrawer : true}
        onClose={() => setOpenDrawer(false)}
      />
      <Container maxWidth={false}>
        <Toolbar />
        {children}
        <Box pb={15} />
      </Container>
    </div>
  )
}

export default MainLayout
