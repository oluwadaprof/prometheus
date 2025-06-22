import { definePreset } from '@pandacss/dev'

import { animations } from './animations'
import { borders } from './borders'
import { breakpoints } from './breakpoints'
import { colors, semanticColors } from './colors'
import { globalCss } from './global'
import { gradients } from './gradients'
import { keyframes } from './keyframes'
import { opacity } from './opacity'

import { semanticShadows, shadows } from './shadows'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights, textStyles } from './typography'

export const pandadsui = definePreset({
	name: 'pulse-ui',
	globalCss,
	conditions: {
		light: '&.light, .light &, &[data-theme="light"], [data-theme="light"] &',
		dark: '&.dark, .dark &, &[data-theme="dark"], [data-theme="dark"] &',
		pulseDark: '&.pulse-dark, .pulse-dark &, &[data-theme="pulse-dark"], [data-theme="pulse-dark"] &'
	},
	theme: {
		tokens: {
			animations,
			borders,
			colors,
			fonts,
			fontSizes,
			fontWeights,
			letterSpacings,
			lineHeights,
			gradients,
			opacity,
			shadows,
			sizes,
			spacing
		},
		semanticTokens: {
			colors: semanticColors,
			shadows: semanticShadows
		},
		extend: {
			textStyles,
			breakpoints,
			keyframes
		}
	}
})
