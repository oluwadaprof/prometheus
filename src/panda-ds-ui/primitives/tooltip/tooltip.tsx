'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipProvider } from './tooltip-provider'

type Props = {
	children: React.ReactNode
}

export const Tooltip = ({ children }: Props) => {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip">{children}</TooltipPrimitive.Root>
		</TooltipProvider>
	)
}
