import { cva, type RecipeVariantProps } from '@panda-ds-ui/styled-system/css'
import { BoxProps, styled } from '@panda-ds-ui/styled-system/jsx'

const styles = cva({
	base: {
		display: 'flex',
		px: '0.5',
		py: '1px',
		gap: '0.5',
		opacity: '0.8'
	},
	variants: {
		size: {
			md: {
				my: '2',
				rounded: 'md'
			},
			sm: {
				my: '2',
				rounded: 'sm'
			},
			xs: {
				rounded: 'sm'
			},
			attribute: {},
			auto: {}
		}
	},
	defaultVariants: {
		size: 'sm'
	}
})

type Props = RecipeVariantProps<typeof styles> & BoxProps

const StyledWrapper = styled('div', styles)

export const KeyboardShortcut = ({ children, ...rest }: Props) => {
	return <StyledWrapper {...rest}>{children}</StyledWrapper>
}
