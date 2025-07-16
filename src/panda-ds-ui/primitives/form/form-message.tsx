'use client'

import * as React from 'react'

import { Text } from '../text'
import { useFormField } from './use-form-field'

export const FormMessage = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
	const { name, error, formMessageId } = useFormField()
	let body = null

	if (error) {
		// @ts-expect-error - name index is dynamic
		body = error[name]?.message || error.message
	} else if (children) {
		body = children
	}

	if (!body) {
		return null
	}

	return (
		<Text textStyle="label" color="text.error" mt="1" id={formMessageId} className={className} {...props}>
			{body}
		</Text>
	)
}
