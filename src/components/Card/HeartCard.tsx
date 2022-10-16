import React from 'react'
import Image from 'next/image'

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
} from '@mui/material'
import Typography from '@mui/material/Typography'

import { useCaththerizeContext } from 'src/contexts/CathetherizeContext'

import { data } from './constant'

const HeartCard = () => {
  const { pageId } = useCaththerizeContext()
  const information = data[pageId - 1]
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Cathether site {pageId}
        </Typography>
        <Divider variant="middle" sx={{ my: 2 }} />
        <Typography gutterBottom variant="body2" color="text.secondary">
          Descriptions
        </Typography>
        <List disablePadding sx={{ display: 'list-item' }}>
          <ListItem sx={{ gridGap: 8 }}>
            <Chip
              label={
                <Typography variant="caption" color="text.secondary">
                  Location of cathether
                </Typography>
              }
            />
            <Typography variant="body2" noWrap color="text.secondary">
              {information.title}
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'block' }}>
            <Chip
              label={
                <Typography variant="caption" color="text.secondary">
                  Normal range of {information.subtitle} pressure
                </Typography>
              }
            />

            <List sx={{ pl: 2, display: 'list-item' }}>
              {information.description.map((e) => (
                <ListItem key={e} disablePadding sx={{ gridGap: 8 }}>
                  <Typography variant="body2" color="text.secondary">
                    {e}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </ListItem>
          <ListItem sx={{ gridGap: 8 }}>
            <Chip
              label={
                <Typography variant="caption" noWrap color="text.secondary">
                  Oxygen saturation
                </Typography>
              }
            />
            <Typography variant="body2" noWrap color="text.secondary">
              {information.saturation}
            </Typography>
          </ListItem>
        </List>

        <Divider variant="middle" sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Waveforms
        </Typography>
        <Box mt={1} display="flex" alignItems="center" flexDirection="column" gap={2}>
          <Image
            src={`/images/heartrate/base${pageId}.gif`}
            width={480}
            height={136}
            alt="fallback"
          />
          <Image
            src={`/images/heartrate/${pageId}.gif`}
            width={480}
            height={136}
            alt="fallback"
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default HeartCard
