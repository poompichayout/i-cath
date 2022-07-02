import { useState } from 'react'
import { useRouter } from 'next/router'

import { alpha, useTheme, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton'

import Iconify from 'src/components/Iconify'
import Link from 'src/Link'

import { NavConfigProps } from './Layout/NavConfig'

const ListItemStyle = styled((props: ListItemButtonProps) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}))

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface NavItemProps {
  item: NavConfigProps
  active: (path: string) => boolean
}

function NavItem({ item, active }: NavItemProps) {
  const theme = useTheme()

  const isActiveRoot = active(item.path)

  const { title, path, icon, info, children } = item

  const [open, setOpen] = useState<boolean>(isActiveRoot)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  }

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  }

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={
              open
                ? 'eva:arrow-ios-downward-fill'
                : 'eva:arrow-ios-forward-fill'
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item
              const isActiveSub = active(path)

              return (
                <Link key={title} href={path}>
                  <ListItemStyle
                    sx={{
                      ...(isActiveSub && activeSubStyle),
                    }}
                  >
                    <ListItemIconStyle>
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          display: 'flex',
                          borderRadius: '50%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'text.disabled',
                          transition: (theme) =>
                            theme.transitions.create('transform'),
                          ...(isActiveSub && {
                            transform: 'scale(2)',
                            bgcolor: 'primary.main',
                          }),
                        }}
                      />
                    </ListItemIconStyle>
                    <ListItemText disableTypography primary={title} />
                  </ListItemStyle>
                </Link>
              )
            })}
          </List>
        </Collapse>
      </>
    )
  }

  return (
    <Link href={path}>
      <ListItemStyle
        sx={{
          ...(isActiveRoot && activeRootStyle),
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        <ListItemText disableTypography primary={title} />
        {info && info}
      </ListItemStyle>
    </Link>
  )
}

export interface NavSectionProps {
  navConfig: NavConfigProps[]
}

export default function NavSection({ navConfig, ...other }: NavSectionProps) {
  const { pathname } = useRouter()

  const match = (path: string) => (path ? pathname === path : false)

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  )
}
