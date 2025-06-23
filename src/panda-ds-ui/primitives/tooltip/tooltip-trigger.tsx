'use client'

import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const StyledTrigger = styled(TooltipPrimitive.Trigger)

export const TooltipTrigger = ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger> & JsxStyleProps) => {
	return <StyledTrigger data-slot="tooltip-trigger" {...props} />
}
