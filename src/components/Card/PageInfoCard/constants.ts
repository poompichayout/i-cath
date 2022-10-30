export type Variant = 'normal_values' | 'calculator' | 'catheter_sim'

export type Info = {
	title: string
	imageSrc: string
	description: string
	linkTo: string
}

export type InfoProps = Record<Variant, Info>

const data: InfoProps = {
	normal_values: {
		title: 'Normal Values',
		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		imageSrc: '/images/normal_values.png',
		linkTo: '/normal_values',
	},
	calculator: {
		title: 'Calculator',
		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		imageSrc: '/images/calculator.png',
		linkTo: '/calculator/co',
	},
	catheter_sim: {
		title: 'Right heart catheterization simulator',
		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
		imageSrc: '/images/catheter_sim.png',
		linkTo: '/catheter_sim',
	},
}

export default data