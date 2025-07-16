'use client'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { cva } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'

const contentStyles = cva({
	base: {
		zIndex: 50,
		rounded: '2xl',
		border: 'subtle',
		bg: 'background.panel',
		glass: 'popup',

		'&[data-state=open]': {
			animation: 'popoverUpIn'
		},

		'&[data-state=closed]': {
			animation: 'popoverHide'
		}
	}
})

const StyledHoverContent = styled(HoverCardPrimitive.Content, contentStyles)

export const HoverCardContent: React.FC<React.ComponentProps<typeof HoverCardPrimitive.Content> & JsxStyleProps> = ({
	align = 'center',
	sideOffset = 4,
	...props
}) => {
	return (
		<HoverCardPrimitive.Portal>
			<StyledHoverContent align={align} sideOffset={sideOffset} {...props} />
		</HoverCardPrimitive.Portal>
	)
}
