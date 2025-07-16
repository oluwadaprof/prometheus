'use client'

import { isCssProperty, styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import { HTMLMotionProps, isValidMotionProp, motion } from 'motion/react'

type Props = Omit<JsxStyleProps, 'transition'> &
	HTMLMotionProps<'div'> & {
		className?: string
	}

export const MotionDiv = styled(
	motion.div,
	{},
	{
		shouldForwardProp: (prop, variantKeys) =>
			isValidMotionProp(prop) || (!variantKeys.includes(prop) && !isCssProperty(prop))
	}
) as React.FC<Props>
