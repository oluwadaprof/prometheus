'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import * as React from 'react'

const StyledLabel = styled(LabelPrimitive.Root)

const Label = ({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root> & JsxStyleProps) => {
	return <StyledLabel textStyle="label" display="block" className={className} {...props} />
}

export { Label }
