import React from 'react'

import { useMediaQuery, useTheme } from '@mui/material'

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'

import { DRAWER_WIDTH } from '../contants'
import Logo from '../Logo'
import { NAVBAR } from '../Navbar/constants'

import MenuListItem from './MenuListItem'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Drawer
      anchor="left"
      open={!isMobile || open}
      variant={isMobile ? 'temporary' : 'permanent'}
      onClose={onClose}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: `0px calc(${theme.mixins.toolbar.minHeight}px + 8px) 4px rgba(0, 0, 0, 0.08)`,
        },
      }}
    >
      <Toolbar disableGutters>
        <Logo />
      </Toolbar>
      <Divider />
      <List disablePadding>
        {NAVBAR.map((e, index) => (
          <MenuListItem route={e} key={index} onClose={onClose} />
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
