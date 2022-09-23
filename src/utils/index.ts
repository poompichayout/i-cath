export type FormValues = {
  oxygenConsumption?: number
  arterialOxygenSaturation?: number
  venousOxygenSaturation?: number
  meanArterialPressure?: number
  rightArterialPressure?: number
  cardiacOutput?: number
  meanPulmonaryArterialPressure?: number
  pulmonaryCapillaryWedgePressure?: number
  pulmonaryArterySystolicPressure?: number
  pulmonaryArteryDiastolicPressure?: number
  rightAtrialPressure?: number
  flow?: number
  orificeContraction?: number
  velocityLossCoefficient?: number
  pressureGradient?: number
  meanPressureGradient?: number
}

export const getCO = ({
  oxygenConsumption = 0,
  arterialOxygenSaturation = 0,
  venousOxygenSaturation = 0,
}: FormValues) =>
  oxygenConsumption / (arterialOxygenSaturation - venousOxygenSaturation)

export const getCIKnownCO = (cardiacOutput: number, bodySurfaceArea: number) =>
  cardiacOutput / bodySurfaceArea

export const getCIUnknownCO = (
  strokeVolume: number,
  hearthRate: number,
  bodySurfaceArea: number
) => (strokeVolume * hearthRate) / bodySurfaceArea

export const getSVR = ({
  meanArterialPressure = 0,
  rightArterialPressure = 0,
  cardiacOutput = 0,
}: FormValues) => (meanArterialPressure - rightArterialPressure) / cardiacOutput

export const getPVR = ({
  meanPulmonaryArterialPressure = 0,
  pulmonaryCapillaryWedgePressure = 0,
  cardiacOutput = 0,
}: FormValues) =>
  ((meanPulmonaryArterialPressure - pulmonaryCapillaryWedgePressure) /
    cardiacOutput) *
  80

export const getPAPi = ({
  pulmonaryArterySystolicPressure = 0,
  pulmonaryArteryDiastolicPressure = 0,
  rightAtrialPressure = 0,
}: FormValues) =>
  (pulmonaryArterySystolicPressure - pulmonaryArteryDiastolicPressure) /
  rightAtrialPressure

export const getGorlinArea = ({
  flow = 0,
  orificeContraction = 0,
  velocityLossCoefficient = 0,
  pressureGradient = 0,
}: FormValues) =>
  flow /
  (orificeContraction *
    velocityLossCoefficient *
    Math.sqrt(2 * 980 * pressureGradient))

export const getAVA = ({ cardiacOutput = 0, meanPressureGradient = 0 }: FormValues) =>
  cardiacOutput / Math.sqrt(meanPressureGradient)

export const NumberFormat = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
})
