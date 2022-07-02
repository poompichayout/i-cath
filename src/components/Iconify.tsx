import { Icon, IconifyIcon } from '@iconify/react'

import Box, { BoxProps } from '@mui/material/Box'

export type IconProps = {
  icon: string | IconifyIcon
} & BoxProps

export default function Iconify({ icon, sx, ...other }: IconProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
}
