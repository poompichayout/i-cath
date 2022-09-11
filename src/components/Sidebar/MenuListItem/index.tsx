import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useTheme } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { NAVBAR } from 'src/components/Navbar/constants'

import { StyledLink } from './styled'

interface MenuListItemProps {
  route: typeof NAVBAR[0]
  onClose: () => void
}

const MenuListItem = ({ route, onClose }: MenuListItemProps) => {
  const theme = useTheme()
  const router = useRouter()
  const [isSubNavOpen, setSubNavOpen] = useState<boolean>(false)

  useEffect(() => {
    setSubNavOpen(router.pathname.startsWith(route.path))
  }, [router.pathname, route.path])

  const handleListItemCollapse = () => {
    setSubNavOpen((prev) => !prev)
  }

  return (
    <>
      <ListItem
        disableRipple
        component={StyledLink}
        button
        href={route.sub ? router.pathname : route.path}
        onClick={handleListItemCollapse}
      >
        <ListItemText
          secondary={route.text}
          secondaryTypographyProps={{
            color:
              router.pathname === route.path
                ? '#2ecc71'
                : theme.palette.grey[700],
          }}
        />
        {route.sub ? (
          isSubNavOpen ? (
            <ExpandLess sx={{ color: theme.palette.grey[700] }} />
          ) : (
            <ExpandMore sx={{ color: theme.palette.grey[700] }} />
          )
        ) : null}
      </ListItem>
      <Collapse in={isSubNavOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {(route.sub || []).map((x) => (
            <ListItem
              disableRipple
              button
              component={StyledLink}
              href={x.path}
              key={x.path}
              sx={{ pl: 5 }}
              onClick={onClose}
            >
              <ListItemText
                secondary={x.text}
                secondaryTypographyProps={{
                  color:
                    router.pathname === x.path
                      ? '#2ecc71'
                      : theme.palette.grey[700],
                }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default MenuListItem
