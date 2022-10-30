import { useState } from 'react'

import { Theme } from '@mui/material'
import ButtonBase from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import data, { Variant, Info } from './constants'
import { useRouter } from 'next/router'

interface PageInfoCardProps {
  variant: Variant
}

const PageInfoCard = ({ variant }: PageInfoCardProps) => {
  const [displayData] = useState<Info>(data[variant])
  const router = useRouter()

  const onCardClick = () => {
    router.push(displayData.linkTo)
  }
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 1,
        boxShadow: (theme: Theme) => theme.shadows[1],
      }}
    >
      <ButtonBase sx={{ flexDirection: 'column'}} onClick={onCardClick}>
        <CardMedia
          component="img"
          height="200"
          image={displayData.imageSrc}
          alt="green iguana"
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {displayData.title}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  )
}

export default PageInfoCard
