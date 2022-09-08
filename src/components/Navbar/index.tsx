import React from 'react'

import styled from '@emotion/styled'
import { useMediaQuery, useTheme } from '@mui/material'

import Logo from '../Logo'

import Accessibility from './Accessibility'
import NavLinks from './NavLinks'
import MobileNavLinks from './MobileNavLinks'

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  position: fixed;
  background-color: white;
  top: 0;
`

const LeftSection = styled.div`
  display: flex;
`

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`

const RightSection = styled.div`
  display: flex;
`

export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile ? <Accessibility /> : <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  )
}
