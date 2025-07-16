'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

import { cva } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import { AnimateChangeInHeight } from '../animated-height'

export const popoverContentStyles = cva({
	base: {
		zIndex: '100',
		rounded: '2xl',
		border: 'subtle',
		bg: 'background.panel',
		glass: 'popup',
		shadow: 'sSm',

		'&[data-state=open]': {
			animation: 'popoverUpIn'
		},

		'&[data-state=closed]': {
			animation: 'popoverHide'
		}
	}
})

const StyledPopoverContent = styled(PopoverPrimitive.Content, popoverContentStyles)

export type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Content> &
	JsxStyleProps & {
		noGrain?: boolean
	}

export const PopoverContent: React.FC<PopoverContentProps> = ({
	align = 'center',
	sideOffset = 4,
	children,
	style,
	noGrain = false,
	...props
}) => {
	return (
		<PopoverPrimitive.Portal>
			<StyledPopoverContent
				data-slot="popover-content"
				align={align}
				sideOffset={sideOffset}
				style={{
					...style
				}}
				{...props}
			>
				<AnimateChangeInHeight>{children}</AnimateChangeInHeight>
			</StyledPopoverContent>
		</PopoverPrimitive.Portal>
	)
}
