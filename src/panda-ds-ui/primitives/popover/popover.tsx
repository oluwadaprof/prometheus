'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'

export const Popover = ({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) => {
	return <PopoverPrimitive.Root data-slot="popover" {...props} />
}
