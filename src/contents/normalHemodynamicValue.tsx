interface HemodynamicProps {
  id: string
  parameter: string
  abbreviation: string
  range: string
  unit: string
}

export const data: HemodynamicProps[] = [
  {
    id: 'h1',
    parameter: 'Cardiac Output',
    abbreviation: 'CO',
    range: '4-8',
    unit: 'L/min',
  },
  {
    id: 'h2',
    parameter: 'Cardiac Index',
    abbreviation: 'CI',
    range: '2.5-4.0',
    unit: 'L/min/m2',
  },
  {
    id: 'h3',
    parameter: 'Systemic Vascular Resistance',
    abbreviation: 'SVR',
    range: '700-1500',
    unit: 'dynes|sec|cm-5',
  },
  {
    id: 'h4',
    parameter: 'Pulmonary Vascular Resistance',
    abbreviation: 'PVR',
    range: '35-250',
    unit: 'dynes|sec|cm5',
  },
  {
    id: 'h5',
    parameter: 'Mean Arterial Pressure',
    abbreviation: 'MAP',
    range: '70-100',
    unit: 'mmHg',
  },
  {
    id: 'h6',
    parameter: 'Central Venous Pressure',
    abbreviation: 'CVP',
    range: '2-6',
    unit: 'mmHg',
  },
  {
    id: 'h7',
    parameter: 'Mixed Venous Oxygen Saturation',
    abbreviation: 'SvO2',
    range: '60-80',
    unit: '%',
  },
]
