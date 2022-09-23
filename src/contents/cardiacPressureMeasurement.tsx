import Typography from '@mui/material/Typography'

interface PreasureProps {
  id: string
  chamber: string
  format: string | JSX.Element
  mean: string
  normalrange: string
  o2content: string
}

export const cardiacPressureMeasurement: PreasureProps[] = [
  {
    id: 'c1',
    chamber: 'Aorta',
    format: (
      <>
        <Typography color="red">Sys/Dias</Typography>
        <Typography>(mean)</Typography>
      </>
    ),
    mean: '-',
    normalrange: '120/80 mmHg',
    o2content: '95-100%',
  },
  {
    id: 'c2',
    chamber: 'Pulmonary',
    format: <Typography color="red">mean</Typography>,
    mean: '15 mmHg',
    normalrange: '22/10 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c3',
    chamber: 'Systolic PAP',
    format: <Typography color="red">Sys</Typography>,
    mean: '19 mmHg',
    normalrange: '13-26 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c4',
    chamber: 'Diastolic PAP',
    format: <Typography color="red">Dias</Typography>,
    mean: '10 mmHg',
    normalrange: '6-16 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c5',
    chamber: 'PCWP (Left atrium)',
    format: (
      <>
        <Typography>a-wave</Typography>
        <Typography>v-wave</Typography>
        <Typography color="red">(mean)</Typography>
      </>
    ),
    mean: '9 mmHg',
    normalrange: '4-12 mmHg',
    o2content: '95-100%',
  },
  {
    id: 'c6',
    chamber: 'Right atrium',
    format: (
      <>
        <Typography>a-wave</Typography>
        <Typography>v-wave</Typography>
        <Typography color="red">(mean)</Typography>
      </>
    ),
    mean: '3 mmHg',
    normalrange: '1-8 mmHg',
    o2content: '75-80%',
  },
  {
    id: 'c7',
    chamber: 'Left ventricle',
    format: (
      <>
        <Typography>Sys/Dias</Typography>
        <Typography color="red">End-dias</Typography>
        <Typography color="red">(EDP)</Typography>
      </>
    ),
    mean: '-',
    normalrange: '10',
    o2content: '95-100%',
  },
  {
    id: 'c8',
    chamber: 'Right ventricle',
    format: (
      <>
        <Typography>Sys/Dias</Typography>
        <Typography color="red">End-dias</Typography>
        <Typography color="red">(EDP)</Typography>
      </>
    ),
    mean: '-',
    normalrange: '5',
    o2content: '75-80%',
  },
]
