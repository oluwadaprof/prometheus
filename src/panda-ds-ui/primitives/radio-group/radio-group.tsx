'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'

const StyledGroup = styled(RadioGroupPrimitive.Root)

export const RadioGroup = ({ ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root> & JsxStyleProps) => {
	return <StyledGroup {...props} />
}
