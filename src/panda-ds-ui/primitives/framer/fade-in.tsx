'use client'

import { HTMLMotionProps } from 'motion/react'

import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import { MotionDiv } from './motion-div'

export type FadeInProps = Omit<JsxStyleProps, 'transition'> & HTMLMotionProps<'div'>

export const FadeIn = ({ ...props }: FadeInProps) => {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.3 }}
			{...props}
		/>
	)
}
