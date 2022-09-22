import React from 'react'
import Image from 'next/image'

import { Card, CardContent, List, ListItem } from '@mui/material'
import Typography from '@mui/material/Typography'

import { useCaththerizeContext } from 'src/contexts/CathetherizeContext'

import { data } from './constant'

const HeartCard = () => {
  const { pageId } = useCaththerizeContext()
  const information = data[pageId - 1]
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cathether site {pageId}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          Descriptions
        </Typography>
        <List disablePadding sx={{ pl: 2, display: 'list-item' }}>
          <ListItem disablePadding>
            <Typography variant="body2" noWrap color="text.secondary">
              <b>Location of cathether:</b>&nbsp;{information.title}
            </Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Typography variant="body2" color="text.secondary">
              <b>Normal range of {information.subtitle} pressure:</b>
            </Typography>
            <List disablePadding sx={{ pl: 2, display: 'list-item' }}>
              {information.description.map((e) => (
                <ListItem key={e} disablePadding>
                  <Typography variant="body2" color="text.secondary">
                    {e}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </ListItem>
          <ListItem disablePadding>
            <Typography variant="body2" noWrap color="text.secondary">
              <b>Oxygen saturation:</b>&nbsp;{information.saturation}
            </Typography>
          </ListItem>
        </List>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Waveforms
        </Typography>
        <Image
          src="/images/fallback.webp"
          width={400}
          height={300}
          alt="fallback"
        />
      </CardContent>
    </Card>
  )
}

export default HeartCard
