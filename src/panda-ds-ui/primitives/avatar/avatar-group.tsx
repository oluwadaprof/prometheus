'use client'

import * as React from 'react'
import { Children, isValidElement } from 'react'

import { Box, Flex } from '../layout'
import { avatarStyles } from './styles'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { RecipeVariantProps } from '@panda-ds-ui/styled-system/types'
import { css, cx } from '@panda-ds-ui/styled-system/css'

const getValidChildren = (children: React.ReactNode) => {
	return Children.toArray(children).filter((child) => isValidElement(child)) as React.ReactElement<any>[]
}

const Excess = styled(Box, avatarStyles)

type Variants = RecipeVariantProps<typeof avatarStyles>

export const AvatarGroup = ({
	max,
	size,
	shape,
	children,
	...props
}: { max: number } & React.BaseHTMLAttributes<HTMLDivElement> & Variants) => {
	// get valid react children
	const validChildren = getValidChildren(children)

	/**
	 * get the avatars within the max
	 */
	const childrenWithinMax = max != null ? validChildren.slice(0, max) : validChildren

	/**
	 * get the remaining avatar count
	 */
	const excess = max != null ? validChildren.length - max : 0

	// const reversedChildren = childrenWithinMax.reverse()

	return (
		<Flex
			align="center"
			className={cx(
				css({
					'& > div:not(:first-child)': {
						// marginLeft:
					}
				})
			)}
			{...props}
		>
			{childrenWithinMax.map((child, index) => {
				return React.cloneElement(child, {
					key: index,
					size,
					shape,
					style: { zIndex: index, marginInlineEnd: `-0.4rem` }
				})
			})}
			{excess > 0 && (
				<Excess
					bg="brand.gray.2"
					fontSize="0.5"
					fontWeight="600"
					border="subtle"
					display="flex"
					alignItems="center"
					justifyContent="center"
					size={size}
					shape={shape}
					style={{
						zIndex: childrenWithinMax.length,
						marginInlineEnd: `-0.4rem`
					}}
				>{`+${excess}`}</Excess>
			)}
			{/* This is to account for the inline-margin above */}
			<Box w="0.4rem" />
		</Flex>
	)
}
