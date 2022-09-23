import Typography from '@mui/material/Typography'

import * as utils from 'src/utils'

type ElementType = {
  id: string
  label: JSX.Element | string
  endLabel: JSX.Element | string
}

type FormType = {
  oxygenConsumption: ElementType
  arterialOxygenSaturation: ElementType
  venousOxygenSaturation: ElementType
  meanArterialPressure: ElementType
  rightArterialPressure: ElementType
  cardiacOutput: ElementType
  meanPulmonaryArterialPressure: ElementType
  pulmonaryCapillaryWedgePressure: ElementType
  pulmonaryArterySystolicPressure: ElementType
  pulmonaryArteryDiastolicPressure: ElementType
  rightAtrialPressure: ElementType
  flow: ElementType
  orificeContraction: ElementType
  velocityLossCoefficient: ElementType
  pressureGradient: ElementType
  meanPressureGradient: ElementType
}

export const FORM: FormType = {
  oxygenConsumption: {
    id: 'oxygenConsumption',
    label: (
      <Typography>
        Arterial O<sub>2</sub> Sat
      </Typography>
    ),
    endLabel: '%',
  },
  arterialOxygenSaturation: {
    id: 'arterialOxygenSaturation',
    label: (
      <Typography>
        Venous O<sub>2</sub> Sat
      </Typography>
    ),
    endLabel: '%',
  },
  venousOxygenSaturation: {
    id: 'venousOxygenSaturation',
    label: (
      <Typography>
        O<sub>2</sub> Consumption
      </Typography>
    ),
    endLabel: 'L/min',
  },
  meanArterialPressure: {
    id: 'meanArterialPressure',
    label: 'Mean Arterial Pressure (MAP)',
    endLabel: 'mmHg',
  },
  rightArterialPressure: {
    id: 'rightArterialPressure',
    label: 'Right Arterial Pressure (RAP)',
    endLabel: 'mmHg',
  },
  cardiacOutput: {
    id: 'cardiacOutput',
    label: 'Cardiac Output (CO)',
    endLabel: 'L/min',
  },
  meanPulmonaryArterialPressure: {
    id: 'meanPulmonaryArterialPressure',
    label: 'Mean pulmonary arterial pressure (mPAP)',
    endLabel: 'mmHg',
  },
  pulmonaryCapillaryWedgePressure: {
    id: 'pulmonaryCapillaryWedgePressure',
    label: 'Pulmonary capillary wedge pressure (PCWP)',
    endLabel: 'mmHg',
  },
  pulmonaryArterySystolicPressure: {
    id: 'pulmonaryArterySystolicPressure',
    label: 'Pulmonary artery systolic pressure (PASP)',
    endLabel: 'mmHg',
  },
  pulmonaryArteryDiastolicPressure: {
    id: 'pulmonaryArteryDiastolicPressure',
    label: 'Pulmonary artery diastolic pressure (PADP)',
    endLabel: 'mmHg',
  },
  rightAtrialPressure: {
    id: 'rightAtrialPressure',
    label: 'Right atrial pressure (RAP)',
    endLabel: 'mmHg',
  },
  flow: {
    id: 'flow',
    label: 'Flow (F)',
    endLabel: (
      <>
        cm<sup>3</sup>/sec
      </>
    ),
  },
  orificeContraction: {
    id: 'orificeContraction',
    label: (
      <Typography>
        Orifice contraction (C<sub>c</sub>)
      </Typography>
    ),
    endLabel: '',
  },
  velocityLossCoefficient: {
    id: 'velocityLossCoefficient',
    label: (
      <Typography>
        Velocity loss coefficient (C<sub>v</sub>)
      </Typography>
    ),
    endLabel: '',
  },
  pressureGradient: {
    id: 'pressureGradient',
    label: 'Pressure gradient (h)',
    endLabel: 'mmHg',
  },
  meanPressureGradient: {
    id: 'meanPressureGradient',
    label: 'Mean pressure gradient',
    endLabel: 'mmHg',
  },
}

const calculatorPage = {
  co: {
    elements: [
      FORM['arterialOxygenSaturation'],
      FORM['venousOxygenSaturation'],
      FORM['oxygenConsumption'],
    ],
    resultStartLabel: 'Cardiac Output',
    resultEndLabel: 'L/min',
    calculate: utils.getCO,
  },
  svr: {
    elements: [
      FORM['meanArterialPressure'],
      FORM['rightArterialPressure'],
      FORM['cardiacOutput'],
    ],
    resultStartLabel: 'SVR',
    resultEndLabel: (
      <>
        dyn/s/cm<sup>-5</sup>
      </>
    ),
    calculate: utils.getSVR,
  },
  pvr: {
    elements: [
      FORM['meanPulmonaryArterialPressure'],
      FORM['pulmonaryCapillaryWedgePressure'],
      FORM['cardiacOutput'],
    ],
    resultStartLabel: 'PVR',
    resultEndLabel: (
      <>
        dyn&#12539;s/cm<sup>-5</sup>
      </>
    ),
    calculate: utils.getPVR,
  },
  papi: {
    elements: [
      FORM['pulmonaryArterySystolicPressure'],
      FORM['pulmonaryArteryDiastolicPressure'],
      FORM['rightAtrialPressure'],
    ],
    resultStartLabel: 'PAPi',
    resultEndLabel: null,
    calculate: utils.getPAPi,
  },
  gorlin: {
    elements: [
      FORM['flow'],
      FORM['orificeContraction'],
      FORM['velocityLossCoefficient'],
      FORM['pressureGradient'],
    ],
    resultStartLabel: 'Area',
    resultEndLabel: (
      <>
        cm<sup>2</sup>
      </>
    ),
    calculate: utils.getGorlinArea,
  },
  hakki: {
    elements: [
      FORM['cardiacOutput'],
      FORM['meanPressureGradient'],
    ],
    resultStartLabel: 'AVA',
    resultEndLabel: (
      <>
        cm<sup>2</sup>
      </>
    ),
    calculate: utils.getAVA,
  },
}

export default calculatorPage
