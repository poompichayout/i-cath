import React from 'react'

import styled from '@emotion/styled'
import PlainLink from 'src/Link'

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
`

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`

const Link = styled(PlainLink)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

export default function NavLinks() {
  return (
    <NavLinksContainer>
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
      </LinksWrapper>
    </NavLinksContainer>
  )
}
