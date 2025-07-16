'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { styled } from '@panda-ds-ui/styled-system/jsx'

import { JsxStyleProps, RecipeVariantProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'
import { cva } from '@panda-ds-ui/styled-system/css'

const radioGroupItemStyles = cva({
	base: {
		cursor: 'pointer',
		rounded: 'full',
		border: '2px solid token(colors.brand.grayA.3)',
		pos: 'relative',

		_focus: {
			border: '2px solid token(colors.brand.primaryA.9)'
		},

		'&[data-state=checked]': {
			border: '2px solid token(colors.brand.primaryA.9)',

			_after: {
				content: '""',
				pos: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				bg: 'brand.primaryA.9',
				rounded: 'full',
				w: '60%',
				h: '60%'
			}
		}
	},
	variants: {
		look: {
			ghost: {
				'&[data-state=checked]': {
					border: 'unset',
					_after: {
						bg: 'none'
					}
				}
			}
		},
		size: {
			md: {
				w: '1.8rem',
				h: '1.8rem'
			},
			sm: {
				w: '1.4rem',
				h: '1.4rem'
			}
		}
	}
})

const StyledGroupItem = styled(RadioGroupPrimitive.Item, radioGroupItemStyles)

export const RadioGroupItem: React.FC<
	React.ComponentProps<typeof RadioGroupPrimitive.Item> &
		JsxStyleProps &
		RecipeVariantProps<typeof radioGroupItemStyles>
> = ({ children, ...props }) => {
	return <StyledGroupItem {...props}>{children}</StyledGroupItem>
}
