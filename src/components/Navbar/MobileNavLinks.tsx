import React, { useState } from 'react'

import styled from '@emotion/styled'

import Accessibility from './Accessibility'
import MenuToggle from './MenuToggle'
import { NAVBAR } from './constants'

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
      <MenuToggle isOpen={isOpen} toggle={() => setOpen((prev) => !prev)} />
      {isOpen && (
        <LinksWrapper>
          {NAVBAR.map((e) => (
            <LinkItem key={e.path}>
              <Link href={e.path}>{e.text}</Link>
            </LinkItem>
          ))}
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}
