import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { token, Token } from '@panda-ds-ui/styled-system/tokens'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { stringToDesignSystemColor } from 'src/utils/colors'

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)

export const AvatarFallback = ({
	className,
	name,
	style,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & {
	name: string
}) => {
	const color = stringToDesignSystemColor(name)

	return (
		<StyledAvatarFallback
			data-slot="avatar-fallback"
			style={
				{
					...style,
					'--color': token.var(`colors.user.solid.${color}` as Token),
					'--text-color': token.var(`colors.user.text.${color}` as Token)
				} as React.CSSProperties
			}
			bg="var(--color)"
			color="white"
			{...props}
			className={className}
		/>
	)
}
