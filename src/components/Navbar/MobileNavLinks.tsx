import React, { useState } from 'react'

import styled from '@emotion/styled'

import Accessibility from './Accessibility'
import MenuToggle from './MenuToggle'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

const Marginer = styled.div`
  height: 2em;
`

export default function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false)

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/normal_values">Normal values</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/catheter_sim">Catheter sim</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/calculator">Calculator</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/about">About us</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}
