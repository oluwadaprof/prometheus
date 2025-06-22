import { Box } from '@panda-ds-ui/primitives/layout'
import { Text } from '@panda-ds-ui/primitives/text/text'
import { css } from '@panda-ds-ui/styled-system/css'

export default function Home() {
  return (
    <Box
      style={{
        textAlign: 'center',
        width: 'full',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '20%'
      }}
    >
      <Text
        className={css({
          fontSize: 'xxx-large',
          fontWeight: '600'
        })}
      >
        PrometheuS
      </Text>
      <Text
        className={css({
          color: 'text.muted',
          fontStyle: 'italic'
        })}
      >
        The ultimate enterprise design system starter
      </Text>
      <button
        className={css({
          bg: 'background.muted',
          py: '2',
          px: '4',
          rounded: '8',
          w: '40',
          mt: '10%',
          color: 'text.app',
          _hover: {
            bg: 'zinc.800',
            cursor: 'pointer'
          },
          _dark: {
            bg: 'zinc.800'
          }
        })}
      >
        coming soon
      </button>
    </Box>
  )
}
