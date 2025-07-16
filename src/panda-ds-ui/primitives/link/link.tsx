'use client'

import Link from 'next/link'
import React, { Fragment } from 'react'

import { KeyboardShortcut } from '../keyboard-shortcut'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { TooltipContentProps } from '../tooltip/tooltip-content'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@panda-ds-ui/styled-system/types'
import { buttonVariantStyle } from '../button'

const StyledNextLink = styled(Link, buttonVariantStyle)

export type LinkVariants = RecipeVariantProps<typeof buttonVariantStyle>

export type NextLinkProps = {
	href: string
	disabled?: boolean
	prefetch?: boolean
	tooltipContentProps?: TooltipContentProps
	shortcut?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
	LinkVariants &
	JsxStyleProps

export const NextLink = ({ children, tooltipContentProps, shortcut, ...props }: NextLinkProps) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<StyledNextLink type="button" {...props}>
					<Fragment>
						{children}
						{shortcut && <KeyboardShortcut size={props.size}>{shortcut}</KeyboardShortcut>}
					</Fragment>
				</StyledNextLink>
			</TooltipTrigger>
			{tooltipContentProps && <TooltipContent align="start" {...tooltipContentProps} />}
		</Tooltip>
	)
}

export const Anchor = styled.a
