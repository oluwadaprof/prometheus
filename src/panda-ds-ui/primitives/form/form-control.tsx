'use client'

import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { useFormField } from './use-form-field'

export const FormControl = ({ ...props }: React.ComponentProps<typeof Slot>) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

	return (
		<Slot
			id={formItemId}
			aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
			aria-invalid={!!error}
			{...props}
		/>
	)
}
