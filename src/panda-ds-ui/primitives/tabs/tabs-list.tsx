'use client'

import { cva } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import * as React from 'react'

const tabListStyles = cva({
	base: {
		display: 'flex'
	}
})

const StyledTabList = styled(TabsPrimitive.List, tabListStyles)

export const TabsList = (props: React.ComponentProps<typeof TabsPrimitive.List> & JsxStyleProps) => {
	return <StyledTabList {...props} />
}
