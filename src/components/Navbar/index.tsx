import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styled from '@emotion/styled'

import { DeviceSize } from 'src/responsive'

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
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  )
}
