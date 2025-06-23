'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipProvider = ({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
	return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />
}
