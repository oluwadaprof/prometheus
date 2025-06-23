import { cva, type RecipeVariantProps } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'

type SpinnerProps = {
	size?: string
} & SpinnerVariants

export const spinnerStyles = cva({
	base: {
		pos: 'relative',

		'& div': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			rounded: 'full',
			animation: 'loader'
		},
		'& div:nth-child(1)': {
			animationDelay: '-0.45s'
		},
		'& div:nth-child(2)': {
			animationDelay: '-0.3s'
		},
		'& div:nth-child(3)': {
			animationDelay: '-1.5s'
		}
	},
	variants: {
		look: {
			form: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			ghost: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			transparent: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			underline: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			transparentUnderline: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			purple: {
				'& div': {
					border: '1.6px solid token(colors.gray.1)',
					borderColor: 'token(colors.gray.1) transparent transparent transparent'
				}
			},
			purpleOutline: {
				'& div': {
					border: '1.6px solid token(colors.brand.primaryA.7)',
					borderColor: 'token(colors.brand.primaryA.7) transparent transparent transparent'
				}
			},
			purpleTransparent: {
				'& div': {
					border: '1.6px solid token(colors.brand.primaryA.7)',
					borderColor: 'token(colors.brand.primaryA.7) transparent transparent transparent'
				}
			},
			gray: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			grayOutline: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			danger: {
				'& div': {
					border: '1.6px solid token(colors.gray.1)',
					borderColor: 'token(colors.gray.1) transparent transparent transparent'
				}
			},
			dangerOutline: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			},
			dangerTransparent: {
				'& div': {
					border: '1.6px solid token(colors.brand.grayA.12)',
					borderColor: 'token(colors.brand.grayA.12) transparent transparent transparent'
				}
			}
		},
		size: {
			md: {
				w: '2rem',
				h: '2rem'
			},
			sm: {
				w: '1.6rem',
				h: '1.6rem'
			},
			xs: {
				w: '1.4rem',
				h: '1.4rem'
			},
			attribute: {},
			auto: {}
		}
	},
	defaultVariants: {
		look: 'purple',
		size: 'sm'
	}
})

export const spinnerStylesV2 = cva({
	base: {
		pos: 'relative',

		'& div': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			rounded: 'full',
			animation: 'loader'
		},
		'& div:nth-child(1)': {
			animationDelay: '-0.45s'
		},
		'& div:nth-child(2)': {
			animationDelay: '-0.3s'
		},
		'& div:nth-child(3)': {
			animationDelay: '-1.5s'
		}
	},
	variants: {
		look: {
			form: {
				'& div': {
					border: '1.6px solid token(colorPalette.12)',
					borderColor: 'token(colorPalette.12) transparent transparent transparent'
				}
			},
			ghost: {
				'& div': {
					border: '1.6px solid token(colorPalette.1)',
					borderColor: 'token(colorPalette.1) transparent transparent transparent'
				}
			},
			solid: {
				'& div': {
					border: '1.6px solid',
					borderTopColor: 'colorPalette.1',
					borderRightColor: 'transparent',
					borderBottomColor: 'transparent',
					borderLeftColor: 'transparent'
				}
			},
			soft: {
				'& div': {
					border: '1.6px solid token(colorPalette.12)',
					borderColor: 'token(colorPalette.12) transparent transparent transparent'
				}
			},
			transparent: {
				'& div': {
					border: '1.6px solid token(colorPalette.12)',
					borderColor: 'token(colorPalette.12) transparent transparent transparent'
				}
			},
			underline: {
				'& div': {
					border: '1.6px solid token(colorPalette.12)',
					borderColor: 'token(colorPalette.12) transparent transparent transparent'
				}
			},
			outline: {
				'& div': {
					border: '1.6px solid',
					borderTopColor: 'colorPalette.1',
					borderRightColor: 'transparent',
					borderBottomColor: 'transparent',
					borderLeftColor: 'transparent'
				}
			}
		},
		size: {
			md: {
				w: '2rem',
				h: '2rem'
			},
			sm: {
				w: '1.6rem',
				h: '1.6rem'
			},
			xs: {
				w: '1.4rem',
				h: '1.4rem'
			},
			attribute: {},
			auto: {}
		}
	},
	defaultVariants: {
		look: 'solid',
		size: 'sm'
	}
})

const StyledSpinner = styled('div', spinnerStylesV2)

export type SpinnerVariants = RecipeVariantProps<typeof spinnerStylesV2>

export const Spinner = ({ look, size }: SpinnerProps) => {
	return (
		<StyledSpinner size={size} look={look} className="spinner">
			<div />
			<div />
			<div />
			<div />
		</StyledSpinner>
	)
}
