import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { refs } from './constant'

const ReferenceCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Reference
        </Typography>
        {refs.map((ref, index) => (
          <Box key={index} mt={2}>
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
    </Card>
  )
}

export default ReferenceCard
