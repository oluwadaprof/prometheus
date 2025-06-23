import { Button } from "@panda-ds-ui/primitives/button"
import { Box, HStack } from "@panda-ds-ui/primitives/layout"
import { Text } from "@panda-ds-ui/primitives/text"

export const Topbar = () => {
    return (
        <Box display='flex' justifyContent='space-between' w='full' p='4' maxW='1150px'>
            <Button look='soft' rounded='2xl' shadow='lg' colorPalette='brand.infoA'>
                Ps.UI
            </Button>
            <HStack>
                <Button look='ghost'>
                    Examples
                </Button>
                <Button look="ghost" border='1px solid transparent' _hover={{
                    border: '1px solid skyblue'
                }}>
                    Docs
                </Button>
                <Button look="solid" colorPalette='brand.primaryA' _hover={{
                    shadow: 'lg'
                }}>
                    Get Started
                </Button>
            </HStack>
        </Box>
    )
}