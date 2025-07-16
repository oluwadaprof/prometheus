'use client'

import * as React from 'react'

import { Text } from '../text'
import { useFormField } from './use-form-field'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'

export const FormDescription = ({ ...props }: React.HTMLAttributes<HTMLParagraphElement> & JsxStyleProps) => {
	const { formDescriptionId } = useFormField()

	return <Text id={formDescriptionId} {...props} maxLines={undefined} />
}
