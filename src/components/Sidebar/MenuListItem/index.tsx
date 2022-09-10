import React, { useState } from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { NAVBAR } from 'src/components/Navbar/constants'

import { StyledLink } from './styled'
import { useTheme } from '@mui/material'

interface MenuListItemProps {
  route: typeof NAVBAR[0]
  onClose: () => void
}

const MenuListItem = ({ route, onClose }: MenuListItemProps) => {
  const theme = useTheme()
  const [isSubNavOpen, setSubNavOpen] = useState<boolean>(false)

  const handleListItemCollapse = () => {
    setSubNavOpen((prev) => !prev)
  }

  return (
    <>
      <ListItem
        disableRipple
        component={StyledLink}
        button
        href={route.sub ? '' : route.path}
        onClick={handleListItemCollapse}
      >
        <ListItemText
          secondary={route.text}
          primaryTypographyProps={{
            color: theme.palette.grey[700],
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
                primaryTypographyProps={{
                  color: theme.palette.grey[700],
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
