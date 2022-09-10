import React from 'react'
import { useRouter } from 'next/router'

import styled from '@emotion/styled'
import { List, ListItem, Box, Typography, useTheme } from '@mui/material'

import PlainLink from 'src/Link'

import { NAVBAR } from './constants'

const NavLinksContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 100%;
`

const LinksWrapper = styled(List)`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  height: 100%;
`

type LinkItemProps = {
  active: boolean
}

const LinkItem = styled(ListItem)<LinkItemProps>`
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

  border-top: ${({ active }) => (active ? '2px solid #2ecc71' : 'none')};
`

const Link = styled(PlainLink)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

export default function NavLinks() {
  const theme = useTheme()
  const router = useRouter()
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {NAVBAR.map((e) => (
          <LinkItem
            key={e.path}
            active={router.pathname === e.path}
            sx={{ height: theme.mixins.toolbar }}
          >
            <Link href={e.path}>
              <Typography noWrap fontWeight={500}>
                {e.text}
              </Typography>
            </Link>
          </LinkItem>
        ))}
      </LinksWrapper>
    </NavLinksContainer>
  )
}
