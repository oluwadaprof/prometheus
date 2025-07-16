'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'

const StyledTabTrigger = styled(TabsPrimitive.Trigger)

export const TabTrigger = (props: React.ComponentProps<typeof TabsPrimitive.Trigger> & JsxStyleProps) => {
	return <StyledTabTrigger {...props} />
}
