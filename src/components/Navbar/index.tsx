import React from 'react'

import styled from '@emotion/styled'
import { useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'

import Breadcrumb from '../Breadcrumb'
import { DRAWER_WIDTH } from '../contants'

import NavLinks from './NavLinks'

const MiddleSection = styled(Box)`
  display: flex;
  flex: 2;
  height: 100%;
`

interface NavBarProps {
  toggleDrawer: () => void
}

export default function Navbar({ toggleDrawer }: NavBarProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: `${DRAWER_WIDTH}px`,
      }}
      style={{ width: '100%' }}
    >
      <Toolbar>
        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: '#2ecc71' }} />
            </IconButton>
            <Breadcrumb />
          </>
        )}
        {!isMobile && (
          <MiddleSection
            sx={{
              width: `calc(100% - ${DRAWER_WIDTH}px)`,
              ml: `${DRAWER_WIDTH}px`,
            }}
          >
            <Breadcrumb />
          </MiddleSection>
        )}
      </Toolbar>
    </AppBar>
  )
}
