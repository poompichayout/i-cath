import React from 'react'
import { useRouter } from 'next/router'

import { useTheme } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

import { NAVBAR } from '../Navbar/constants'

const Breadcrumb = () => {
  const theme = useTheme()
  const router = useRouter()

  const findListOfPath = () => {
    const items: { text: string; path: string }[] = []
    // find parent
    const parentIndex = NAVBAR.findIndex((nav) =>
      router.pathname.startsWith(nav.path)
    )
    // find sub nav
    if (parentIndex >= 0) {
      items.push({
        text: NAVBAR[parentIndex].text,
        path: NAVBAR[parentIndex].path,
      })
      const subNav = NAVBAR[parentIndex].sub
      if (subNav) {
        const subIndex = subNav.findIndex((nav) =>
          router.pathname.startsWith(nav.path)
        )
        if (subIndex >= 0) {
          items.push({ ...subNav[subIndex] })
        }
      }
    }
    return items
  }
  const items = findListOfPath()

  return (
    // @ts-ignore
    <Breadcrumbs seperator=">">
      {items.map(({ text }, index) => (
        <Typography
          noWrap
          key={index}
          fontSize={14}
          sx={{ color: theme.palette.grey[600] }}
        >
          {text}
        </Typography>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
