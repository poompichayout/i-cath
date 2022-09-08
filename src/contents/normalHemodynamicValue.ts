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
    abbreviation: 'Cardiac Output',
    parameter: 'CO',
    range: '4-8',
    unit: 'L/min',
  },
  {
    id: 'h2',
    abbreviation: 'Cardiac Index',
    parameter: 'CI',
    range: '2.5-4.0',
    unit: 'L/min/m2',
  },
  {
    id: 'h3',
    abbreviation: 'Systemic Vascular Resistance',
    parameter: 'SVR',
    range: '900-1440',
    unit: 'dyn/s/cm-5',
  },
  {
    id: 'h4',
    abbreviation: 'Pulmonary Vascular Resistance',
    parameter: 'PVR',
    range: '20-120',
    unit: 'dyn/s/cm2',
  },
  {
    id: 'h5',
    abbreviation: 'Mean Arterial Pressure',
    parameter: 'MAP',
    range: '60-100',
    unit: 'mmHg',
  },
  {
    id: 'h6',
    abbreviation: 'Central Venous Pressure',
    parameter: 'CVP',
    range: '2-6',
    unit: 'mmHg',
  },
  {
    id: 'h7',
    abbreviation: 'Mixed Venous Oxygen Saturation',
    parameter: 'SvO2',
    range: '65-75',
    unit: '%',
  },
]
