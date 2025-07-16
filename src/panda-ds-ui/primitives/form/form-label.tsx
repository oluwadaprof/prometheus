'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

import { Label } from '../label'
import { useFormField } from './use-form-field'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'

export const FormLabel = ({
	className,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & JsxStyleProps) => {
	const { formItemId } = useFormField()

	return <Label textStyle="label" color="text.label" mb="1" className={className} htmlFor={formItemId} {...props} />
}
