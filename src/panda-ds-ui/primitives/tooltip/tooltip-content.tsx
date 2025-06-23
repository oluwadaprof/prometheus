'use client'

import { cva } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

export type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & JsxStyleProps

const tooltipContentStyles = cva({
	base: {
		bgColor: 'background.panel',
		glass: 'popup',
		color: 'text.app.1',
		border: 'subtle',
		fontWeight: '500',
		fontSize: '1',
		whiteSpace: 'normal',
		rounded: 'xl',
		px: '1.5',
		py: '1',
		zIndex: 101,
		shadow: 'sMd'
	}
})

const StyledContent = styled(TooltipPrimitive.Content, tooltipContentStyles)

export const TooltipContent = ({ sideOffset = 4, ...props }: TooltipContentProps) => {
	return (
		<TooltipPrimitive.Portal data-slot="tooltip-portal">
			<StyledContent data-slot="tooltip-content" sideOffset={sideOffset} {...props} />
		</TooltipPrimitive.Portal>
	)
}

export const TooltipPortal = TooltipPrimitive.Portal
