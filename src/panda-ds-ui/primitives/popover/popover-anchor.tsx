import * as PopoverPrimitive from '@radix-ui/react-popover'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'

const StyledAnchor = styled(PopoverPrimitive.Anchor, {
	base: {
		w: 'full'
	}
})

type Props = React.ComponentProps<typeof PopoverPrimitive.Anchor> & {
	inset?: boolean
} & JsxStyleProps

export const PopoverAnchor = ({ ...props }: Props) => {
	return <StyledAnchor data-slot="popover-anchor" {...props} />
}
