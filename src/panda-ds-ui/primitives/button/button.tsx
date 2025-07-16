'use client'

import * as React from 'react'
import { Fragment } from 'react'

import { Spinner } from '../loaders/spinner'
import { Span } from '../text'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { TooltipContentProps } from '../tooltip/tooltip-content'
import { type RecipeVariantProps, cva } from '@panda-ds-ui/styled-system/css'
import { JsxStyleProps } from '@panda-ds-ui/styled-system/types'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { KeyboardShortcut } from '../keyboard-shortcut'

export const buttonVariantStyle = cva({
	base: {
		boxSizing: 'border-box',
		rounded: 'xl',
		cursor: 'pointer',
		whiteSpace: 'nowrap',
		w: 'auto',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '1',
		userSelect: 'none',
		colorPalette: 'brand.grayA',
		fontWeight: '500',
		transition: 'border-color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out',

		_hover: {
			_disabled: {
				opacity: '0.8'
			}
		},

		_disabled: {
			opacity: '0.6',
			cursor: 'not-allowed',
			pointerEvents: 'none'
		},

		'& span': {
			display: 'flex',
			alignItems: 'center'
		}
	},
	variants: {
		look: {
			form: {
				w: '100%',
				border: 'subtle',
				bg: 'transparent',
				whiteSpace: 'nowrap',
				justifyContent: 'space-between',
				fontWeight: '400',

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					border: 'focused'
				}
			},
			ghost: {
				bg: 'transparent',
				color: 'colorPalette.12'
			},
			solid: {
				bg: 'colorPalette.9',
				color: 'white',

				_hover: {
					_disabled: {
						opacity: '0.8'
					}
				},

				'& .spinner, & .spinner *': {
					borderTopColor: 'gray.1'
				},

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					color: 'gray.1',
					bg: 'colorPalette.9',
					opacity: '1'
				}
			},
			soft: {
				bg: 'colorPalette.3',
				color: 'colorPalette.11',

				_hover: {
					bg: 'colorPalette.4'
				},

				'& .spinner, & .spinner *': {
					borderTopColor: 'colorPalette.11'
				},

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					color: 'gray.1',
					bg: 'colorPalette.9',
					opacity: '1'
				}
			},
			outline: {
				bg: 'transparent',
				border: '1px solid',
				borderColor: 'colorPalette.4',
				shadowColor: 'colorPalette.4',
				shadow: 'xs',
				color: 'colorPalette.12',

				'& .spinner, & .spinner *': {
					borderTopColor: 'colorPalette.11'
				},

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					bg: 'colorPalette.3',
					opacity: '1'
				}
			},
			underline: {
				bg: 'transparent',
				textDecoration: 'underline',
				colorPalette: 'brand.grayA',
				textDecorationColor: 'colorPalette.4',
				textUnderlineOffset: '3px',

				_hover: {
					textDecorationColor: 'colorPalette.9'
				},

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					colorPalette: 'brand.primaryA',
					textDecorationColor: 'colorPalette.9',
					opacity: '1'
				}
			},
			transparent: {
				bg: 'transparent',
				color: 'colorPalette.12',

				_hover: {
					bg: 'colorPalette.3'
				},

				'&[data-state=active], &[data-state=on], &[data-state=open]': {
					bg: 'colorPalette.3',
					opacity: '1',

					_hover: {
						bg: 'colorPalette.3'
					}
				}
			}
		},
		size: {
			md: {
				fontSize: '2',
				px: '3.2',
				h: '3.8rem',
				rounded: 'xl'
			},
			sm: {
				fontSize: '2',
				px: '1.5',
				h: '3.2rem',
				rounded: 'lg'
			},
			xs: {
				fontSize: '1',
				px: '1.5',
				h: '2.8rem',
				rounded: 'lg'
			},
			attribute: {
				fontSize: '2',
				fontWeight: '500',
				px: '1',
				h: '2.8rem',
				rounded: 'lg'
			},
			auto: {}
		},
		use: {
			link: {
				display: 'inline-flex'
			},
			button: {
				display: 'flex'
			}
		}
	},
	defaultVariants: {
		look: 'solid',
		size: 'sm',
		use: 'button'
	}
})

const StyledButton = styled('button', buttonVariantStyle)

export type ButtonVariants = RecipeVariantProps<typeof buttonVariantStyle>

export type ButtonProps = {
	isLoading?: boolean
	isDisabled?: boolean
	loadingText?: string
	tooltipContentProps?: TooltipContentProps
	tooltipChildren?: React.ReactNode
	shortcut?: React.ReactNode
} & React.ComponentProps<'button'> &
	ButtonVariants &
	JsxStyleProps

export const Button = ({
	isLoading,
	isDisabled,
	loadingText,
	children,
	tooltipChildren,
	tooltipContentProps,
	shortcut,
	...props
}: ButtonProps) => {
	const tooltipContent = tooltipChildren || tooltipContentProps?.children

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<StyledButton disabled={isLoading || isDisabled} type="button" {...props}>
					{!isLoading ? (
						<Fragment>
							{children}
							{shortcut && <KeyboardShortcut size={props.size}>{shortcut}</KeyboardShortcut>}
						</Fragment>
					) : (
						<>
							{loadingText && <Span pr="1">{loadingText}</Span>}
							<Spinner size={props.size} look={props.look || 'solid'} />
						</>
					)}
				</StyledButton>
			</TooltipTrigger>
			{tooltipContent && (
				<TooltipContent align="start" {...tooltipContentProps}>
					{tooltipContent}
				</TooltipContent>
			)}
		</Tooltip>
	)
}

// export const buttonStyle = cva({
//     base: {
//         boxSizing: 'border-box',
//         rounded: '1rem',
//         cursor: 'pointer',
//         whiteSpace: 'nowrap',
//         w: 'auto',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '1',
//         userSelect: 'none',
//         fontWeight: '500',

//         _hover: {
//             _disabled: {
//                 opacity: '0.8'
//             }
//         },

//         _disabled: {
//             opacity: '0.6',
//             cursor: 'not-allowed',
//             pointerEvents: 'none'
//         },

//         '& span': {
//             display: 'flex',
//             alignItems: 'center'
//         }
//     },
//     variants: {
//         look: {
//             form: {
//                 w: '100%',
//                 border: 'subtle',
//                 bg: 'transparent',
//                 whiteSpace: 'nowrap',
//                 justifyContent: 'space-between',
//                 fontWeight: '400'
//             },
//             ghost: {
//                 bg: 'transparent'
//             },
//             underline: {
//                 bg: 'transparent',
//                 textDecoration: 'underline',
//                 textDecorationColor: 'brand.grayA.6',
//                 textUnderlineOffset: '2px'
//             },
//             transparentUnderline: {
//                 bg: 'transparent',

//                 _hover: {
//                     textDecoration: 'underline',
//                     textDecorationColor: 'brand.grayA.6',
//                     textUnderlineOffset: '2px'
//                 }
//             },
//             transparent: {
//                 bg: 'transparent',

//                 _hover: {
//                     bg: 'background.muted'
//                 }
//             },
//             purple: {
//                 bg: 'brand.primaryA.9',
//                 color: 'gray.1',

//                 '& *': {
//                     borderColor: 'gray.1',
//                     color: 'gray.1'
//                 },

//                 _hover: {
//                     _disabled: {
//                         bg: 'brand.primaryA.9'
//                     }
//                 }
//             },
//             purpleOutline: {
//                 border: 'focused',
//                 color: 'text.primary',
//                 bg: 'transparent',

//                 _hover: {
//                     bg: 'background.muted'
//                 }
//             },
//             purpleTransparent: {
//                 color: 'text.primary',

//                 _hover: {
//                     bg: 'background.muted'
//                 }
//             },
//             gray: {
//                 bg: 'background.muted'
//             },
//             grayOutline: {
//                 border: 'subtle',
//                 bg: 'transparent',
//                 shadow: 'xs',

//                 _hover: {
//                     bg: 'background.muted'
//                 }
//             },
//             danger: {
//                 bg: 'brand.errorA.9',
//                 border: '1px solid transparent',
//                 color: 'gray.1',

//                 '& *': {
//                     borderColor: 'gray.1',
//                     color: 'gray.1'
//                 }
//             },
//             dangerOutline: {
//                 border: 'error',
//                 color: 'text.error'
//             },
//             dangerTransparent: {
//                 color: 'text.error',

//                 _hover: {
//                     bg: 'background.muted'
//                 }
//             }
//         },
//         size: {
//             md: {
//                 fontSize: '2',
//                 px: '3.2',
//                 h: '3.8rem',
//                 rounded: 'xl'
//             },
//             sm: {
//                 fontSize: '2',
//                 px: '1.5',
//                 h: '3.2rem',
//                 rounded: 'lg'
//             },
//             xs: {
//                 fontSize: '1',
//                 px: '1.5',
//                 h: '2.8rem',
//                 rounded: 'lg'
//             },
//             attribute: {
//                 fontSize: '2',
//                 fontWeight: '500',
//                 px: '1.5',
//                 h: '2.8rem',
//                 rounded: 'lg'
//             },
//             auto: {}
//         },
//         use: {
//             link: {
//                 display: 'inline-flex'
//             },
//             button: {
//                 display: 'flex'
//             }
//         },
//         activeLook: {
//             gray: {
//                 '&[data-state=active]': {
//                     color: 'text.app',
//                     bg: 'background.muted',
//                     opacity: '1'
//                 },

//                 '&[data-state=on]': {
//                     color: 'text.app',
//                     bg: 'background.muted',
//                     opacity: '1'
//                 },

//                 '&[data-state=open]': {
//                     color: 'text.app',
//                     bg: 'background.muted',
//                     opacity: '1'
//                 }
//             },
//             grayOutline: {
//                 '&[data-state=active]': {
//                     color: 'text.app',
//                     border: 'subtle',
//                     shadow: 'sXs',
//                     opacity: '1',
//                     _dark: {
//                         bg: 'background.muted'
//                     }
//                 },

//                 '&[data-state=on]': {
//                     color: 'text.app',
//                     border: 'subtle',
//                     shadow: 'sXs',
//                     opacity: '1',
//                     _dark: {
//                         bg: 'background.muted'
//                     }
//                 },

//                 '&[data-state=open]': {
//                     color: 'text.app',
//                     border: 'subtle',
//                     shadow: 'sXs',
//                     opacity: '1',
//                     _dark: {
//                         bg: 'background.muted'
//                     }
//                 }
//             },
//             purple: {
//                 '&[data-state=active]': {
//                     bg: 'brand.primaryA.9',
//                     color: 'white',
//                     opacity: '1',
//                     cursor: 'pointer',

//                     _hover: {
//                         bg: 'brand.primaryA.9'
//                     }
//                 },

//                 '&[data-state=on]': {
//                     bg: 'brand.primaryA.9',
//                     color: 'white',
//                     opacity: '1',
//                     cursor: 'pointer',

//                     _hover: {
//                         bg: 'brand.primaryA.9'
//                     }
//                 }
//             }
//         }
//     },
//     defaultVariants: {
//         look: 'purple',
//         size: 'sm',
//         use: 'button',
//         activeLook: 'purple'
//     }
// })
