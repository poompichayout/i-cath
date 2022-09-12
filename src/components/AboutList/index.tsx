import React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'

export default function AboutList() {
  return (
    <List disablePadding sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem disablePadding alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SARINNAPHAT T." src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SARINNAPHAT T."
          secondary={
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CallIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  (+66) 81-255-3032
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  sarinnaphat.tha@dome.tu.ac.th
                </Typography>
              </Box>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" sx={{ my: 2 }} />
      <ListItem disablePadding alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="KANTIDA T." src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="KANTIDA T."
          secondary={
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CallIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  (+66) 81-814-1543
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  kantida.tan@dome.tu.ac.th
                </Typography>
              </Box>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" sx={{ my: 2 }} />
      <ListItem disablePadding alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="JENNISA C." src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="JENNISA C."
          secondary={
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CallIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  (+66) 87-877-6245
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MailIcon fontSize="small" />
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  jennisa.cho@dome.tu.ac.th
                </Typography>
              </Box>
            </>
          }
        />
      </ListItem>
    </List>
  )
}
