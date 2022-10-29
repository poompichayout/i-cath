import React from 'react'
import Image from 'next/image'

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Link,
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
          {information.header}
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
        <Typography variant="body2" color="text.secondary" mt={2}>
          Waveforms
        </Typography>
        <Box
          mt={1}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={2}
        >
          <Image
            src={`/images/heartrate/${pageId}.gif`}
            priority
            objectFit="cover"
            width={500}
            height={200}
            alt="waveforms"
          />
        </Box>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Reference:
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          MSD Manuals. (n.d.). Table: Normal Pressures in the Heart and Great
          Vessels. MSD Manual Professional Edition. Retrieved October 26, 2022,
          from
          <Link
            href="https://www.msdmanuals.com/professional/multimedia/table/normal-pressures-in-the-heart-and-great-vessels"
            underline="hover"
            target="_blank"
            rel="noreferrer"
            sx={{ wordWrap: 'break-word', textAlign: 'justify' }}
          >
            {' '}
            https://www.msdmanuals.com/professional/multimedia/table/normal-pressures-in-the-heart-and-great-vessels
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HeartCard
