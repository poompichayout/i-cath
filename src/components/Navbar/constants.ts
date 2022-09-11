export const SUB_CALCULATOR_NAV = [
  {
    path: '/calculator/fick',
    text: 'Cardiac Output - Fick',
  },
  {
    path: '/calculator/ci',
    text: 'Cardiac Index (CI)',
  },
  {
    path: '/calculator/svr',
    text: 'Systemic vascular resistance (SVR)',
  },
  {
    path: '/calculator/pvr',
    text: 'Pulmonary vascular resistance (PVR)',
  },
  {
    path: '/calculator/papi',
    text: 'Pulmonary artery pulsatility index (PAPi)',
  },
  {
    path: '/calculator/gorlin',
    text: 'The Gorlin equation - Valve area measurement',
  },
  {
    path: '/calculator/hakki',
    text: 'The Hakki equation',
  },
]

export const SUB_NORMAL_VALUES_NAV = [
  { path: '/normal_values/cardiac_pressure', text: 'Cardiac Pressure' },
  { path: '/normal_values/hemodynamic', text: 'Normal Hemodynamic' },
]

export const NAVBAR = [
  {
    path: '/normal_values',
    text: 'Normal values',
    sub: SUB_NORMAL_VALUES_NAV,
  },
  {
    path: '/catheter_sim',
    text: 'Catheterization simulator',
  },
  {
    path: '/calculator',
    text: 'Calculator',
    sub: SUB_CALCULATOR_NAV,
  },
  {
    path: '/about',
    text: 'About us',
  },
]
