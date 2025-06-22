import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	'*': {
		outline: 'none',

		'&:focus-visible': {
			// border: 'subtle'
		}
	},

	html: {
		fontSize: '62.5%',
		backgroundColor: 'background.app',
		color: 'text.app',
		fontFamily: 'geist',
		scrollBehavior: 'smooth'
	},

	body: {
		fontSize: '2',
		fontFamily: 'geist',
		fontWeight: '400',
		height: '100vh',
		overflow: 'hidden'
	},

	kbd: {
		font: 'unset'
	},

	'.hidden-scrollbar': {
		'&::-webkit-scrollbar': {
			display: 'none'
		}
	},

	// File upload button override
	'input[type=file]::-webkit-file-upload-button': {
		cursor: 'pointer'
	},

	/* To control scrollbars on different browsers */
	'::-webkit-scrollbar': {
		w: '0.2rem',
		h: '0.2rem'
	},

	'::-webkit-scrollbar-track': {
		rounded: '0.2rem',

		'&:hover': {
			bg: 'background.muted'
		}
	},

	'::-webkit-scrollbar-thumb': {
		bg: 'background.muted',
		rounded: 'xl',

		'&:hover': {
			bg: 'background.muted'
		}
	}
})
