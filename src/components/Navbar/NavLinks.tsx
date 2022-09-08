import React from 'react'

import styled from '@emotion/styled'
import PlainLink from 'src/Link'
import { useRouter } from 'next/router'

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
`

type LinkItemProps = {
  active: boolean
}

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

  border-top: ${(props: LinkItemProps) =>
    props.active ? '2px solid #2ecc71' : 'none'};
`

const Link = styled(PlainLink)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

export default function NavLinks() {
  const router = useRouter()
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {NAVBAR.map((e) => (
          <LinkItem key={e.path} active={router.pathname === e.path}>
            <Link href={e.path}>{e.text}</Link>
          </LinkItem>
        ))}
      </LinksWrapper>
    </NavLinksContainer>
  )
}
