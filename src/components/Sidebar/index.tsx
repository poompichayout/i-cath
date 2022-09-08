import styled from '@emotion/styled'
import { listItemIconClasses } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Link from 'src/Link'

const items = [
  {
    path: 'fick',
    text: 'Cardiac Output - Fick',
  },
  {
    path: 'fick',
    text: 'CardiacIndex (CI)',
  },
  {
    path: 'fick',
    text: 'Systemic vascularresistance (SVR)',
  },
  {
    path: 'fick',
    text: 'Pulmonary vascularresistance (PVR)',
  },
  {
    path: 'fick',
    text: 'Pulmonary artery pulsatility index (PAPi)',
  },
  {
    path: 'fick',
    text: 'The Gorlin equation - Valve area measurement',
  },
  {
    path: 'fick',
    text: 'TheHakki equation',
  },
]

const SidebarWrapper = styled(Box)`
  min-height: 100vh;
  background-color: white;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  z-index: 20;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <List>
        {items.map((e, index) => (
          <ListItem key={index}>
            <Link href={`/calculator/${e.path}`}>
              <ListItemText primary={e.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  )
}

export default Sidebar
