'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import { cva } from '@panda-ds-ui/styled-system/css'
import * as React from 'react'

const tabContentStyles = cva({
	base: {
		_focusVisible: {
			outline: 'none'
		}
	}
})

const StyledTabContent = styled(TabsPrimitive.Content, tabContentStyles)

export const TabContent = (props: React.ComponentProps<typeof TabsPrimitive.Content> & JsxStyleProps) => {
	return <StyledTabContent {...props} />
}
