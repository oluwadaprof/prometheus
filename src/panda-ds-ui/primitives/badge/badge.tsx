import { cva } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'

const badgeStyles = cva({
	base: {
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		rounded: 'full',
		letterSpacing: '0.06em',
		transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		transitionDuration: '150ms',
		colorPalette: 'brand.primary'
	},
	variants: {
		look: {
			solid: {
				bg: 'colorPalette.9',
				color: 'gray.1'
			},
			soft: {
				bg: 'colorPalette.3',
				color: 'colorPalette.12'
			},
			outline: {
				shadowColor: 'colorPalette.8',
				boxShadow: 'inset 0 0 0 1px var(--shadow-color)',
				color: 'colorPalette.11'
			}
		},
		size: {
			lg: {
				py: '1',
				px: '2',
				fontSize: '1'
			},
			md: {
				py: '0.5',
				px: '1.5',
				fontSize: '1'
			},
			sm: {
				py: '0.5',
				px: '1',
				fontSize: '1'
			},
			xs: {
				py: '0.5',
				px: '1',
				fontSize: '0.5'
			},
			auto: {}
		}
	},
	defaultVariants: {
		look: 'soft',
		size: 'md'
	}
})

const StyledBadge = styled('div', badgeStyles)

type BadgeVariants = RecipeVariantProps<typeof badgeStyles>

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariants & JsxStyleProps

export const Badge = ({ ...props }: BadgeProps) => {
	return <StyledBadge {...props} />
}
