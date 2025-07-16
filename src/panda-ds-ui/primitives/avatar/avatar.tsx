'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'
import { avatarStyles } from './styles'
import { AvatarVariants } from './types'
import { css, cx } from '@panda-ds-ui/styled-system/css'
import { getNameInitials } from 'src/utils/text'

export type AvatarProps = {
	image?: string
	name: string
	imageClassName?: string
	fallbackClassName?: string
} & AvatarVariants

export const Avatar = ({ size, shape, image, name = '', imageClassName, fallbackClassName, ...props }: AvatarProps) => {
	const fallbackStyles = cx(
		css({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontWeight: '500',
			p: '1'
		}),
		avatarStyles({ size, shape }),
		fallbackClassName
	)
	const imageStyles = cx(avatarStyles({ size, shape }), imageClassName)

	return (
		<AvatarPrimitive.Root data-slot="avatar" {...props}>
			<AvatarImage src={image} alt={name} className={imageStyles} />
			<AvatarFallback name={name} className={fallbackStyles}>
				{getNameInitials(name)}
			</AvatarFallback>
		</AvatarPrimitive.Root>
	)
}
