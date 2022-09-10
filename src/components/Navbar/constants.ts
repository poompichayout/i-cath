export const SUB_CALCULATOR_NAV = [
  {
    path: '/calculator/fick',
    text: 'Cardiac Output - Fick',
  },
  {
    path: '/calculator/fick',
    text: 'CardiacIndex (CI)',
  },
  {
    path: '/calculator/fick',
    text: 'Systemic vascularresistance (SVR)',
  },
  {
    path: '/calculator/fick',
    text: 'Pulmonary vascularresistance (PVR)',
  },
  {
    path: '/calculator/fick',
    text: 'Pulmonary artery pulsatility index (PAPi)',
  },
  {
    path: '/calculator/fick',
    text: 'The Gorlin equation - Valve area measurement',
  },
  {
    path: '/calculator/fick',
    text: 'The Hakki equation',
  },
]

export const SUB_NORMAL_VALUES_NAV = [
  { path: '/normal_values#cardiac_pressure', text: 'Cardiac Pressure' },
  { path: '/normal_values#hemodynamic', text: 'Normal Hemodynamic' },
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
    path: '/calculator/fick',
    text: 'Calculator',
    sub: SUB_CALCULATOR_NAV,
  },
  {
    path: '/about',
    text: 'About us',
  },
]
