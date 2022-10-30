import { useState } from 'react'

import { Theme } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import data, { Variant, Info } from './constants'

interface PageInfoCardProps {
  variant: Variant
}

const PageInfoCard = ({ variant }: PageInfoCardProps) => {
  const [displayData] = useState<Info>(data[variant])
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 1,
        boxShadow: (theme: Theme) => theme.shadows[1],
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="/images/ogimage.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {displayData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth size="small">
          Goto
        </Button>
      </CardActions>
    </Card>
  )
}

export default PageInfoCard
