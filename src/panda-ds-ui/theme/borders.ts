import { defineTokens } from '@pandacss/dev'

export const borders = defineTokens.borders({
	none: { value: 'none' },
	subtle: { value: '1px solid {colors.brand.grayA.4}' },
	focused: { value: '1px solid {colors.brand.primaryA.9}' },
	success: { value: '1px solid {colors.brand.successA.4}' },
	warning: { value: '1px solid {colors.brand.warningA.4}' },
	info: { value: '1px solid {colors.brand.infoA.4}' },
	error: { value: '1px solid {colors.brand.errorA.7}' }
})
