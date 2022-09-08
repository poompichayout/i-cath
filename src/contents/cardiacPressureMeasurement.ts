interface PreasureProps {
  id: number
  chamber: string
  format: string
  mean: string
  normalrange: string
  o2content: string
}

export const cardiacPressureMeasurement: PreasureProps[] = [
  {
    id: 1,
    chamber: 'Aorta',
    format: 'Sys/Dias (mean)',
    mean: '-',
    normalrange: '120/80 mmHg',
    o2content: '95-100%',
  },
  {
    id: 2,
    chamber: 'Pulmonary',
    format: 'mean',
    mean: '15 mmHg',
    normalrange: '22/10 mmHg',
    o2content: '75-80%',
  },
  {
    id: 3,
    chamber: 'Systolic PAP',
    format: 'Sys',
    mean: '19 mmHg',
    normalrange: '13-26 mmHg',
    o2content: '75-80%',
  },
  {
    id: 4,
    chamber: 'Diastolic PAP',
    format: 'Dias',
    mean: '10 mmHg',
    normalrange: '6-16 mmHg',
    o2content: '75-80%',
  },
  {
    id: 5,
    chamber: 'PCWP (Left atrium)',
    format: 'a-wave\nv-wave\nmean',
    mean: '9 mmHg',
    normalrange: '4-12 mmHg',
    o2content: '95-100%',
  },
  {
    id: 6,
    chamber: 'Right atrium',
    format: 'a-wave\nv-wave\nmean',
    mean: '3 mmHg',
    normalrange: '1-8 mmHg',
    o2content: '75-80%',
  },
  {
    id: 7,
    chamber: 'Left ventricle',
    format: 'Sys/Dias\nEnd-dias (EDP)',
    mean: '-',
    normalrange: '10',
    o2content: '95-100%',
  },
  {
    id: 8,
    chamber: 'Right ventricle',
    format: 'Sys/Dias\nEnd-dias (EDP)',
    mean: '-',
    normalrange: '5',
    o2content: '75-80%',
  },
]
