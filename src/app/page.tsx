import { Center } from '@panda-ds-ui/primitives/layout'

import { Hero } from 'src/modules/home/sections/hero'
import { Topbar } from 'src/modules/home/layout/top-bar'

export default function Home() {
	return (
		<Center alignItems="center" w="full" flexDir="column" h="100%" gap="2">
			<Topbar />
			<Hero />
		</Center>
	)
}
