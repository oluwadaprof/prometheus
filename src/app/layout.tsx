import './globals.css'
import type { Metadata } from 'next'

const title = 'Prometheus - panda-radix design system'
const description =
	'A sophisticated design system for enterprise web app products with customizations that fits into the brand and identity of the product.'

export const metadata: Metadata = {
	title: title,
	description: description
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			style={{
				fontFamily: 'geist'
			}}
		>
			<body>{children}</body>
		</html>
	)
}
