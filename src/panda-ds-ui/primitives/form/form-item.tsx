'use client'

import * as React from 'react'

import { Box } from '../layout'
import { FormItemContext } from './form-item-context'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'

export const FormItem = ({ ...props }: React.HTMLAttributes<HTMLDivElement> & JsxStyleProps) => {
	const id = React.useId()

	return (
		<FormItemContext.Provider value={{ id }}>
			<Box w="full" {...props} />
		</FormItemContext.Provider>
	)
}
