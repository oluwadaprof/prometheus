import { cva, RecipeVariantProps } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'

// Define list variant styles
const listStyle = cva({
	base: {
		marginBottom: '1.5'
	},
	variants: {
		look: {
			ordered: {
				listStyleType: 'decimal'
			},
			unordered: {
				listStyleType: 'disc'
			}
		}
	}
})

export const Ul = styled('ul')
export const Ol = styled('ol')
export const Li = styled('li', listStyle)

export type ListVariants = RecipeVariantProps<typeof listStyle>
