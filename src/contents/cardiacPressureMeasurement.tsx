import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

interface PreasureProps {
  id: string
  chamber: string | JSX.Element
  mean: string
  normalrange: string | JSX.Element
  o2content: string
}

export const cardiacPressureMeasurement: PreasureProps[] = [
  {
    id: 'c1',
    chamber: (
      <>
        <Box display="flex">
          <Typography width={125}>Aorta</Typography>
          <Typography>Systolic</Typography>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={125} />
          <Typography>Diastolic</Typography>
        </Box>
      </>
    ),
    mean: '70-100 mmHg',
    normalrange: (
      <>
        <Typography>{'< '}120 mmHg</Typography>
        <Divider />
        <Typography>{'< '}80 mmHg</Typography>
      </>
    ),
    o2content: '95-100%',
  },
  {
    id: 'c2',
    chamber: 'Pulmonary',
    mean: '15 mmHg',
    normalrange: '9-16 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c5',
    chamber: 'PCWP (Left atrium)',
    mean: '8 mmHg',
    normalrange: '2-12 mmHg',
    o2content: '95-100%',
  },
  {
    id: 'c6',
    chamber: 'Right atrium',
    mean: '3 mmHg',
    normalrange: '0-8 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c7',
    chamber: (
      <>
        <Box display="flex">
          <Typography noWrap width={125}>Left ventricle</Typography>
          <Typography>Systolic</Typography>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={125} />
          <Typography>Diastolic</Typography>
        </Box>
      </>
    ),
    mean: '-',
    normalrange: (
      <>
        <Typography>90-140 mmHg</Typography>
        <Divider />
        <Typography>5-12 mmHg</Typography>
      </>
    ),
    o2content: '95-100%',
  },
  {
    id: 'c8',
    chamber: (
      <>
        <Box display="flex">
          <Typography noWrap width={125}>
            Right ventricle
          </Typography>
          <Typography>Systolic</Typography>
        </Box>
        <Divider />
        <Box display="flex">
          <Box width={125} />
          <Typography>Diastolic</Typography>
        </Box>
      </>
    ),
    mean: '-',
    normalrange: (
      <>
        <Typography>15-25 mmHg</Typography>
        <Divider />
        <Typography>0-8 mmHg</Typography>
      </>
    ),
    o2content: '75-80%',
  },
]
