import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { styled } from '@mui/material/styles'

import { refs } from './constant'
import { useState } from 'react'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ReferenceCard = () => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div">
          Reference
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0 }}>
          {refs.map((ref, index) => (
            <Box key={index} mt={index === 0 ? undefined : 2}>
              <Typography variant="body1">
                {ref.text}
                {ref.link ? (
                  typeof ref.link === 'string' ? (
                    <Link
                      href={ref.link}
                      underline="hover"
                      target="_blank"
                      rel="noreferrer"
                      sx={{ wordWrap: 'break-word', textAlign: 'justify' }}
                    >
                      {ref.link}
                    </Link>
                  ) : (
                    ref.link.map((e, idx) => (
                      <Link
                        key={idx}
                        href={e}
                        underline="hover"
                        target="_blank"
                        rel="noreferrer"
                        sx={{ wordWrap: 'break-word', textAlign: 'justify' }}
                      >
                        {idx === ref.link.length - 1 ? e : `${e}, `}
                      </Link>
                    ))
                  )
                ) : null}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ReferenceCard
