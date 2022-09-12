export const getCO = (
  oxygenConsumption: number,
  arterialOxygenSaturation: number,
  venousOxygenSaturation: number
) => oxygenConsumption / (arterialOxygenSaturation - venousOxygenSaturation)

export const getCIKnownCO = (cardiacOutput: number, bodySurfaceArea: number) =>
  cardiacOutput / bodySurfaceArea

export const getCIUnknownCO = (
  strokeVolume: number,
  hearthRate: number,
  bodySurfaceArea: number
) => (strokeVolume * hearthRate) / bodySurfaceArea

export const getSVR = (
  meanArterialPressure: number,
  rightArterialPressure: number,
  cardiacOutput: number
) => (meanArterialPressure - rightArterialPressure) / cardiacOutput

export const getPVR = (
  meanPulmonaryArterialPressure: number,
  pulmonaryCapillaryWedgePressure: number,
  cardiacOutput: number
) =>
  ((meanPulmonaryArterialPressure - pulmonaryCapillaryWedgePressure) /
    cardiacOutput) *
  80

export const getPAPi = (
  pulmonaryArterySystolicPressure: number,
  pulmonaryArteryDiastolicPressure: number,
  rightAtrialPressure: number
) =>
  (pulmonaryArterySystolicPressure - pulmonaryArteryDiastolicPressure) /
  rightAtrialPressure

export const getGorlinArea = (
  flow: number,
  orificeContraction: number,
  velocityLossCoefficient: number,
  pressureGradient: number
) =>
  flow /
  (orificeContraction *
    velocityLossCoefficient *
    Math.sqrt(2 * 980 * pressureGradient))

export const getAVA = (cardiacOutput: number, meanPressureGradient: number) =>
  cardiacOutput / Math.sqrt(meanPressureGradient)
