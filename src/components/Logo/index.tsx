import React from 'react'
import Image from 'next/image'

import styled from '@emotion/styled'
import { useTheme } from '@mui/material'

import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

import PlainLink from 'src/Link'

const LogoImg = styled(Box)`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`

const LogoText = styled(Typography)`
  margin: 0;
  margin-left: 4px;
  color: #222;
`

const Link = styled(PlainLink)`
  text-decoration: none;
  transition: 10ms;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1.2;
  }
`

export default function Logo() {
  const theme = useTheme()

  return (
    <ListItem
      component={Link}
      button
      href="/"
      sx={{ height: theme.mixins.toolbar }}
    >
      <LogoImg>
        <Image
          src="/images/logo.png"
          alt="icon logo"
          width={100}
          height={100}
        />
      </LogoImg>
      <LogoText variant="h6" fontSize={16} fontWeight={700}>
        &nbsp;&nbsp;iCath
      </LogoText>
    </ListItem>
  )
}
