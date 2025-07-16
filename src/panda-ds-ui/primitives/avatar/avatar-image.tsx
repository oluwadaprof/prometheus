import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { styled } from '@panda-ds-ui/styled-system/jsx'

const StyledAvatarImage = styled(AvatarPrimitive.Image)

export const AvatarImage = (props: React.ComponentProps<typeof AvatarPrimitive.Image>) => {
	return <StyledAvatarImage data-slot="avatar-image" {...props} objectFit="cover" p="0" />
}
