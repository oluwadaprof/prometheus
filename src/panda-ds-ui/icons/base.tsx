import { css } from '@panda-ds-ui/styled-system/css'
import { styled } from '@panda-ds-ui/styled-system/jsx'
import { StyledComponent } from '@panda-ds-ui/styled-system/types'
import { SVGProps, type JSX } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
	size?: number
	themeColor?: string
}

export type TIcon = StyledComponent<(props: IconProps) => JSX.Element>

export const Icons = {
	aiUser: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<defs>
					<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
						<stop offset="0%" stopColor="#E59CFF" />
						<stop offset="50%" stopColor="#BA9CFF" />
						<stop offset="100%" stopColor="#9CB2FF" />
					</linearGradient>
				</defs>
				<path
					d="M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5C21 11.9693 21 11.4701 20.9977 11"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M7 17.5C9.3317 15.0578 13.6432 14.9428 16 17.5M13.9951 10C13.9951 11.3807 12.8742 12.5 11.4915 12.5C10.1089 12.5 8.98797 11.3807 8.98797 10C8.98797 8.61929 10.1089 7.5 11.4915 7.5C12.8742 7.5 13.9951 8.61929 13.9951 10Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	aiText: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<defs>
					<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
						<stop offset="0%" stopColor="#E59CFF" />
						<stop offset="50%" stopColor="#BA9CFF" />
						<stop offset="100%" stopColor="#9CB2FF" />
					</linearGradient>
				</defs>
				<path
					d="M11 20C7.25027 20 5.3754 20 4.06107 19.0451C3.6366 18.7367 3.26331 18.3634 2.95491 17.9389C2 16.6246 2 14.7497 2 11C2 7.25027 2 5.3754 2.95491 4.06107C3.26331 3.6366 3.6366 3.26331 4.06107 2.95491C5.3754 2 7.25027 2 11 2H11.5C14.7734 2 16.4101 2 17.6125 2.7368C18.2853 3.14908 18.8509 3.71473 19.2632 4.38751C20 5.58985 20 7.22657 20 10.5"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.4069 14.4036C17.6192 13.8655 18.3808 13.8655 18.5931 14.4036L18.6298 14.4969C19.1482 15.8113 20.1887 16.8518 21.5031 17.3702L21.5964 17.4069C22.1345 17.6192 22.1345 18.3808 21.5964 18.5931L21.5031 18.6298C20.1887 19.1482 19.1482 20.1887 18.6298 21.5031L18.5931 21.5964C18.3808 22.1345 17.6192 22.1345 17.4069 21.5964L17.3702 21.5031C16.8518 20.1887 15.8113 19.1482 14.4969 18.6298L14.4036 18.5931C13.8655 18.3808 13.8655 17.6192 14.4036 17.4069L14.4969 17.3702C15.8113 16.8518 16.8518 15.8113 17.3702 14.4969L17.4069 14.4036Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M11 7H7V8M11 7H15V8M11 7V15M11 15H10M11 15H12"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	aiEdit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<defs>
					<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
						<stop offset="0%" stopColor="#E59CFF" />
						<stop offset="50%" stopColor="#BA9CFF" />
						<stop offset="100%" stopColor="#9CB2FF" />
					</linearGradient>
				</defs>
				<path
					d="M6.53792 2.32172C6.69664 1.89276 7.30336 1.89276 7.46208 2.32172L8.1735 4.2443C8.27331 4.51403 8.48597 4.72669 8.7557 4.8265L10.6783 5.53792C11.1072 5.69664 11.1072 6.30336 10.6783 6.46208L8.7557 7.1735C8.48597 7.27331 8.27331 7.48597 8.1735 7.7557L7.46208 9.67828C7.30336 10.1072 6.69665 10.1072 6.53792 9.67828L5.8265 7.7557C5.72669 7.48597 5.51403 7.27331 5.2443 7.1735L3.32172 6.46208C2.89276 6.30336 2.89276 5.69665 3.32172 5.53792L5.2443 4.8265C5.51403 4.72669 5.72669 4.51403 5.8265 4.2443L6.53792 2.32172Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
				></path>
				<path
					d="M14.4039 9.64136L15.8869 11.1244M6 22H7.49759C8.70997 22 9.31617 22 9.86124 21.7742C10.4063 21.5484 10.835 21.1198 11.6923 20.2625L19.8417 12.1131C20.3808 11.574 20.6503 11.3045 20.7944 11.0137C21.0685 10.4605 21.0685 9.81094 20.7944 9.25772C20.6503 8.96695 20.3808 8.69741 19.8417 8.15832C19.3026 7.61924 19.0331 7.3497 18.7423 7.20561C18.1891 6.93146 17.5395 6.93146 16.9863 7.20561C16.6955 7.3497 16.426 7.61924 15.8869 8.15832L7.73749 16.3077C6.8802 17.165 6.45156 17.5937 6.22578 18.1388C6 18.6838 6 19.29 6 20.5024V22Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	aiGenerated: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<defs>
					<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
						<stop offset="0%" stopColor="#E59CFF" />
						<stop offset="50%" stopColor="#BA9CFF" />
						<stop offset="100%" stopColor="#9CB2FF" />
					</linearGradient>
				</defs>
				<path
					d="M11 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H12C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V10.5"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.4069 14.4036C17.6192 13.8655 18.3808 13.8655 18.5931 14.4036L18.6298 14.4969C19.1482 15.8113 20.1887 16.8518 21.5031 17.3702L21.5964 17.4069C22.1345 17.6192 22.1345 18.3808 21.5964 18.5931L21.5031 18.6298C20.1887 19.1482 19.1482 20.1887 18.6298 21.5031L18.5931 21.5964C18.3808 22.1345 17.6192 22.1345 17.4069 21.5964L17.3702 21.5031C16.8518 20.1887 15.8113 19.1482 14.4969 18.6298L14.4036 18.5931C13.8655 18.3808 13.8655 17.6192 14.4036 17.4069L14.4969 17.3702C15.8113 16.8518 16.8518 15.8113 17.3702 14.4969L17.4069 14.4036Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M7 7H15M7 11.5H15M7 16H11"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	aiChip: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<defs>
					<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
						<stop offset="0%" stopColor="#E59CFF" />
						<stop offset="50%" stopColor="#BA9CFF" />
						<stop offset="100%" stopColor="#9CB2FF" />
					</linearGradient>
				</defs>
				<path
					d="M18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M11.4802 7.86193C11.6587 7.37936 12.3413 7.37936 12.5198 7.86193L13.3202 10.0248C13.4325 10.3283 13.6717 10.5675 13.9752 10.6798L16.1381 11.4802C16.6206 11.6587 16.6206 12.3413 16.1381 12.5198L13.9752 13.3202C13.6717 13.4325 13.4325 13.6717 13.3202 13.9752L12.5198 16.1381C12.3413 16.6206 11.6587 16.6206 11.4802 16.1381L10.6798 13.9752C10.5675 13.6717 10.3283 13.4325 10.0248 13.3202L7.86193 12.5198C7.37936 12.3413 7.37936 11.6587 7.86193 11.4802L10.0248 10.6798C10.3283 10.5675 10.5675 10.3283 10.6798 10.0248L11.4802 7.86193Z"
					stroke="url(#ai-gradient)"
					strokeWidth="1.5"
				></path>
			</svg>
		)
	}),
	cloudSync: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M17.5 18C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9C17.4925 9 17.485 9.00002 17.4776 9.00005M17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227M17.4776 9.00005C17.4131 9.71494 17.2119 10.3904 16.9003 11M6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.419 3.71776 17.4367 6 17.9M6.52042 8.0227C6.67826 8.00768 6.83823 8 7 8C8.12582 8 9.16474 8.37209 10.0005 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 19C9 19 10 19 11 21C11 21 14.1765 16 17 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	bulb: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M14 10C13.3875 10.6432 12.7111 11 12 11C11.2889 11 10.6125 10.6432 10 10"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M12 15.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	pi: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					d="M3 9.3C3 7.5 5.06126 5.7 7.68468 5.7L16.9574 5.7C19.2 5.7 21 4.35 21 3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M16.502 6L15.6072 18.3139C15.5177 19.7653 16.5097 20.9999 17.7654 20.9999C18.6967 20.9999 19.5236 20.3093 19.8181 19.2855L20.1016 18.2999"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M10 6C9.86667 9.0625 9.6 14.75 9.2 16.5C8.8 18.25 8 20 6 20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	loading: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M17.2014 2H6.79876C5.341 2 4.06202 2.9847 4.0036 4.40355C3.93009 6.18879 5.18564 7.37422 6.50435 8.4871C8.32861 10.0266 9.24075 10.7964 9.33642 11.7708C9.35139 11.9233 9.35139 12.0767 9.33642 12.2292C9.24075 13.2036 8.32862 13.9734 6.50435 15.5129C5.14932 16.6564 3.9263 17.7195 4.0036 19.5964C4.06202 21.0153 5.341 22 6.79876 22L17.2014 22C18.6591 22 19.9381 21.0153 19.9965 19.5964C20.043 18.4668 19.6244 17.342 18.7352 16.56C18.3298 16.2034 17.9089 15.8615 17.4958 15.5129C15.6715 13.9734 14.7594 13.2036 14.6637 12.2292C14.6487 12.0767 14.6487 11.9233 14.6637 11.7708C14.7594 10.7964 15.6715 10.0266 17.4958 8.4871C18.8366 7.35558 20.0729 6.25809 19.9965 4.40355C19.9381 2.9847 18.6591 2 17.2014 2Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M9 21.6381C9 21.1962 9 20.9752 9.0876 20.7821C9.10151 20.7514 9.11699 20.7214 9.13399 20.6923C9.24101 20.509 9.42211 20.3796 9.78432 20.1208C10.7905 19.4021 11.2935 19.0427 11.8652 19.0045C11.955 18.9985 12.045 18.9985 12.1348 19.0045C12.7065 19.0427 13.2095 19.4021 14.2157 20.1208C14.5779 20.3796 14.759 20.509 14.866 20.6923C14.883 20.7214 14.8985 20.7514 14.9124 20.7821C15 20.9752 15 21.1962 15 21.6381V22H9V21.6381Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	relationship: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M11 5L18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M10 10L14.5 14.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M5 11L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="6.44444" cy="6.44444" r="4.44444" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="5" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
				<circle cx="20" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	fix: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M5.50896 18.5H5.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	caretDoubleRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	sidebarIn: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM7.97 2v20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14.97 9.44 12.41 12l2.56 2.56"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	sidebarOut: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path d="M14.5 3.5L14.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
				<path d="M19 7H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M19 11H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M8 10L9.22654 11.0572C9.74218 11.5016 10 11.7239 10 12C10 12.2761 9.74218 12.4984 9.22654 12.9428L8 14"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	card: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 16H11.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.5 16L18 16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M2 9H22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
			</svg>
		)
	}),
	checklist: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M11 6L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M11 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M11 18L21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M3 7.39286C3 7.39286 4 8.04466 4.5 9C4.5 9 6 5.25 8 4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 18.3929C3 18.3929 4 19.0447 4.5 20C4.5 20 6 16.25 8 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	sidebar: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M14.5 3L14.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
				<path
					d="M18 7H19M18 10H19"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	home: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	arrange: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3 4.5C3 3.67157 3.67157 3 4.5 3H6.5C7.32843 3 8 3.67157 8 4.5V6.5C8 7.32843 7.32843 8 6.5 8H4.5C3.67157 8 3 7.32843 3 6.5V4.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M3 17.5C3 16.6716 3.67157 16 4.5 16H6.5C7.32843 16 8 16.6716 8 17.5V19.5C8 20.3284 7.32843 21 6.5 21H4.5C3.67157 21 3 20.3284 3 19.5V17.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M7.99977 18.5H20.9998M15.9998 5.5H7.99977M16.3233 7.67649L7.64844 16.3513"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16 4.5C16 3.67157 16.6716 3 17.5 3H19.5C20.3284 3 21 3.67157 21 4.5V6.5C21 7.32843 20.3284 8 19.5 8H17.5C16.6716 8 16 7.32843 16 6.5V4.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M18 21L19.3883 20.0537C20.4628 19.3213 21 18.9551 21 18.5C21 18.0449 20.4628 17.6787 19.3883 16.9463L18 16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	gallery: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	qr: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3 6C3 4.58579 3 3.87868 3.43934 3.43934C3.87868 3 4.58579 3 6 3C7.41421 3 8.12132 3 8.56066 3.43934C9 3.87868 9 4.58579 9 6C9 7.41421 9 8.12132 8.56066 8.56066C8.12132 9 7.41421 9 6 9C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15C7.41421 15 8.12132 15 8.56066 15.4393C9 15.8787 9 16.5858 9 18C9 19.4142 9 20.1213 8.56066 20.5607C8.12132 21 7.41421 21 6 21C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M3 12L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M15 6C15 4.58579 15 3.87868 15.4393 3.43934C15.8787 3 16.5858 3 18 3C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9C16.5858 9 15.8787 9 15.4393 8.56066C15 8.12132 15 7.41421 15 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M21 12H15C13.5858 12 12.8787 12 12.4393 12.4393C12 12.8787 12 13.5858 12 15M12 17.7692V20.5385M15 15V16.5C15 17.9464 15.7837 18 17 18C17.5523 18 18 18.4477 18 19M16 21H15M18 15C19.4142 15 20.1213 15 20.5607 15.44C21 15.8799 21 16.5881 21 18.0043C21 19.4206 21 20.1287 20.5607 20.5687C20.24 20.8898 19.7767 20.9766 19 21"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	computerAdd: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M11.5046 2H10.0039C6.72304 2 5.08264 2 3.91983 2.81382C3.48962 3.1149 3.11544 3.48891 2.81421 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81421 16.0811C3.11544 16.5111 3.48962 16.8851 3.91983 17.1862C5.08264 18 6.72304 18 10.0039 18H14.0058C17.2866 18 18.927 18 20.0898 17.1862C20.52 16.8851 20.8942 16.5111 21.1954 16.0811C21.8241 15.1837 21.9674 14.0017 22 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path d="M14 6H18M18 6L22 6M18 6L18 2M18 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
				<path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	pin: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="12" x2="12" y1="17" y2="22" />
				<path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
			</svg>
		)
	}),
	activity: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m7.33 14.49 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	add: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M6 12h12M12 18V6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	addSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	arrowUp: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M18.07 9.57L12 3.5 5.93 9.57M12 20.5V3.67"
				></path>
			</svg>
		)
	}),
	arrowDown: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
				></path>
			</svg>
		)
	}),
	arrowLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
				></path>
			</svg>
		)
	}),
	arrowRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
				></path>
			</svg>
		)
	}),
	category2: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	clock: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
				<path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	messages: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	inbox: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M21.5 13.5H16.5743C15.7322 13.5 15.0706 14.2036 14.6995 14.9472C14.2963 15.7551 13.4889 16.5 12 16.5C10.5111 16.5 9.70373 15.7551 9.30054 14.9472C8.92942 14.2036 8.26777 13.5 7.42566 13.5H2.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	cursorText: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M13 17L11.0714 12.5M3 17L4.92857 12.5M4.92857 12.5L7.02295 7.61311C7.21207 7.17183 7.54728 7 8 7C8.45272 7 8.78793 7.17183 8.97705 7.61311L11.0714 12.5M4.92857 12.5H11.0714"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M16 3.00008C16.8333 2.99261 18 3.50003 18.5 4.50003M18.5 4.50003C19 3.50003 20.1667 3.00005 21 3.00008M18.5 4.50003L18.5 19.5M21 21C20.1667 21.0074 19 20.5 18.5 19.5M18.5 19.5C18 20.5 16.8333 21 16 21M20 12H17"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	note: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8 2v3M16 2v3M7 13h8M7 17h5M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	command: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M16 8H8v8h8V8ZM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3ZM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3ZM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3ZM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	tickSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m7.75 12 2.83 2.83 5.67-5.66"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	eye: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	eyeSlash: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	flag: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	kanban: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.25"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M6 5v11" />
				<path d="M12 5v6" />
				<path d="M18 5v14" />
			</svg>
		)
	}),
	trendDown: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m16.5 14.5-4.2-4.2-1.6 2.4-3.2-3.2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14.5 14.5h2v-2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	trendUp: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m16.5 9.5-4.2 4.2-1.6-2.4-3.2 3.2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14.5 9.5h2v2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	elementPlus: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2h-4.04c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23ZM10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97ZM10.5 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.23c-1.59 0-2.23.64-2.23 2.23v4.04C2 21.36 2.64 22 4.23 22h4.04c1.59 0 2.23-.64 2.23-2.23Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path d="M14.5 17.5h6M17.5 20.5v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
			</svg>
		)
	}),
	folderOpen: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m21.67 14.3-.4 5c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
				></path>
				<path
					d="M3.5 11.43V6.28c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79M9.43 17h5.14"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	message: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	messageNotif: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M19.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	messageSearch: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	mirroringScreen: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M3.69 11.71c4.62.59 8.01 3.99 8.61 8.61M2.62 15.07c3.39.43 5.88 2.93 6.32 6.32M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	task: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	taskSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	lock: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	sms: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	smsEdit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M19.21 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M18.7 15.28c.3 1.08 1.14 1.92 2.22 2.22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	smsNotif: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	smsSearch: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	smsStar: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m19.48 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	smsTracking: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	paperClip: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m12.33 12.15-2.47 2.47a3.495 3.495 0 0 0 0 4.95 3.495 3.495 0 0 0 4.95 0l3.89-3.89a7.007 7.007 0 0 0 0-9.9 7.007 7.007 0 0 0-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	magicStar: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
				<path d="M5 3v4" />
				<path d="M19 17v4" />
				<path d="M3 5h4" />
				<path d="M17 19h4" />
			</svg>
		)
	}),
	noteRemove: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM7 11h6M7 16h2.62"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	noteAdd: styled((props: IconProps) => {
		return (
			// <svg
			//   xmlns="http://www.w3.org/2000/svg"
			//   width={props.size || 16}
			//   height={props.size || 16}
			//   viewBox="0 0 24 24"
			//   fill="none"
			//   {...props}
			// >
			//   <path
			//     d="M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM7 11h6M7 16h2.62"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeMiterlimit="10"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			//   <path
			//     d="M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeMiterlimit="10"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			//   <path
			//     d="M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			// </svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M16 2V4M11 2V4M6 2V4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M17.5 14L17.5 22M21.5 18L13.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M7 15H11M7 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	dollarSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	rss: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M12.9915 20.5C13.7121 20.5 13.9925 20.4956 13.9925 20.4956C17.4088 20.471 19.2922 20.3099 20.5342 19.2552C22 18.0104 22 16.0069 22 12C22 7.99306 22 5.98959 20.5342 4.7448C19.0683 3.5 16.7091 3.5 11.9906 3.5C7.27213 3.5 4.91289 3.5 3.44705 4.7448C2.32426 5.69827 2.0615 7.09687 2 9.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.98242 19.5H2.9914"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 15.7349C4.49328 15.7349 6.77053 18 6.77053 20.4996M10 20.4996C10 16 5.99511 12.5 2.04522 12.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	dollar: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="12" x2="12" y1="2" y2="22" />
				<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
			</svg>
		)
	}),
	link: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	unlink: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
				<path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
				<line x1="8" x2="8" y1="2" y2="5" />
				<line x1="2" x2="5" y1="8" y2="8" />
				<line x1="16" x2="16" y1="19" y2="22" />
				<line x1="19" x2="22" y1="16" y2="16" />
			</svg>
		)
	}),
	star: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	user: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	userAdd: styled((props: IconProps) => {
		return (
			// <svg
			//   xmlns="http://www.w3.org/2000/svg"
			//   width={props.size || 16}
			//   height={props.size || 16}
			//   viewBox="0 0 24 24"
			//   fill="none"
			//   {...props}
			// >
			//   <path
			//     d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			//   <path
			//     d="M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM19.49 17.98h-2.98M18 16.52v2.99"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeMiterlimit="10"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			// </svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M19 14V20M22 17L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	userEdit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	userRemove: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M22 18c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 18 22a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 14 18a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM19.03 16.94l-2.11 2.11M16.94 16.96l2.12 2.11"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	userSearch: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM22 22l-1-1"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	userVerified: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3.41 22c0-3.87 3.85-7 8.59-7 .96 0 1.89.13 2.76.37"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M22 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 22 18Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m16.44 18 .99.99 2.13-1.97"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	userSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	cloud: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M7.27 13.01a3.79 3.79 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	folder: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
				></path>
			</svg>
		)
	}),
	edit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	editLine: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M16.9459 3.17305C17.5332 2.58578 17.8268 2.29215 18.1521 2.15173C18.6208 1.94942 19.1521 1.94942 19.6208 2.15173C19.946 2.29215 20.2397 2.58578 20.8269 3.17305C21.4142 3.76032 21.7079 4.05395 21.8483 4.37925C22.0506 4.8479 22.0506 5.37924 21.8483 5.84789C21.7079 6.17319 21.4142 6.46682 20.8269 7.05409L15.8054 12.0757C14.5682 13.3129 13.9496 13.9315 13.1748 14.298C12.4 14.6645 11.5294 14.7504 9.78823 14.9222L9 15L9.07778 14.2118C9.24958 12.4706 9.33549 11.6 9.70201 10.8252C10.0685 10.0504 10.6871 9.43183 11.9243 8.19464L16.9459 3.17305Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	editSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	arrangeHorizontal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M17.28 10.45L21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"
				></path>
			</svg>
		)
	}),
	pdf: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M7 18V15.5M7 15.5V14C7 13.5286 7 13.2929 7.15377 13.1464C7.30754 13 7.55503 13 8.05 13H8.75C9.47487 13 10.0625 13.5596 10.0625 14.25C10.0625 14.9404 9.47487 15.5 8.75 15.5H7ZM21 13H19.6875C18.8625 13 18.4501 13 18.1938 13.2441C17.9375 13.4882 17.9375 13.881 17.9375 14.6667V15.5M17.9375 18V15.5M17.9375 15.5H20.125M15.75 15.5C15.75 16.8807 14.5747 18 13.125 18C12.7979 18 12.6343 18 12.5125 17.933C12.2208 17.7726 12.25 17.448 12.25 17.1667V13.8333C12.25 13.552 12.2208 13.2274 12.5125 13.067C12.6343 13 12.7979 13 13.125 13C14.5747 13 15.75 14.1193 15.75 15.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	briefcase: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	briefcaseTimer: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M21.65 11a16.335 16.335 0 0 1-5.64 2.64M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	building: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12.5 22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22ZM21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19ZM5.5 9h3.47M5.5 13h3.47"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01ZM21.96 14.87A2.249 2.249 0 0 1 19.72 17c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	calendar: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	calendarNum: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M6 8H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	appointment: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M16 2V5M6 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M20 13V11.5C20 7.72876 20 5.84315 18.8284 4.67157C17.6569 3.5 15.7712 3.5 12 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.67157C2 5.84315 2 7.72876 2 11.5V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H11.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14 19.5C14 19.5 15.3485 20.0067 16 22C16 22 19.1765 17 22 16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M2.5 8.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	calendarAdd: styled((props: IconProps) => {
		return (
			// <svg
			//   xmlns="http://www.w3.org/2000/svg"
			//   width={props.size || 16}
			//   height={props.size || 16}
			//   viewBox="0 0 24 24"
			//   fill="none"
			//   {...props}
			// >
			//   <path
			//     d="M8 2v3M16 2v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19.49 19.05h-2.98M18 17.59v2.99"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeMiterlimit="10"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			//   <path
			//     d="M21 8.5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeMiterlimit="10"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			//   <path
			//     d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
			//     stroke="currentColor"
			//     strokeWidth="1.5"
			//     strokeLinecap="round"
			//     strokeLinejoin="round"
			//   ></path>
			// </svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M11.05 22C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4765 5.68186 21.4996 7.80438 21.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M13 18H21M17 14L17 22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	medal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m7.52 13.52-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	map: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M21.73 6.27 6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 0 1-2.48 0c-.95-.9-2.04-2.36-1.64-4.08Z"
					stroke="currentColor"
					strokeWidth="1.5"
				></path>
				<path
					d="M9.095 8.7h.009"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	location: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	global: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M8 3h1a28.424 28.424 0 0 0 0 18H8M15 3a28.424 28.424 0 0 1 0 18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9a28.424 28.424 0 0 1 18 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	moneyReceive: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12 7.5v9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17 3v4h4M22 2l-5 5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	save: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12.89 5.88H5.11A3.12 3.12 0 0 0 2 8.99v11.36c0 1.45 1.04 2.07 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.51 0l3.93 2.19c1.27.71 2.31.09 2.31-1.36V8.99a3.105 3.105 0 0 0-3.1-3.11Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	searchNormal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	unlock: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.9961 15.5H12.0051"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	category: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	chartBars: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M7 17L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M12 17L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M17 17L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	chartWaterfall: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path d="M20 17L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M16 14L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 14L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 11L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	hierarchy: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M5.13 9a4.058 4.058 0 0 0 3.94 3.04l3.43-.01a5.989 5.989 0 0 1 5.67 4.01"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	hierarchySquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M7.88 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	sun: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</svg>
		)
	}),
	moon: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
				<path d="M19 3v4" />
				<path d="M21 5h-4" />
			</svg>
		)
	}),
	theme: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
				<circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
				<circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
				<circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
				<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
			</svg>
		)
	}),
	device: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
				<path d="M10 19v-3.96 3.15" />
				<path d="M7 19h5" />
				<rect width="6" height="10" x="16" y="12" rx="2" />
			</svg>
		)
	}),
	notification: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	notificationBell: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	direct: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M10.34 7h3.33M9.5 10h5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	directNormal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M2 13h3.76a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	directInbox: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 2v7l2-2M12 9l-2-2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M7 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	directNotif: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M1.98 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	directSend: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 9V2l-2 2M12 2l2 2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M7 5.13c-3.54.52-5 2.6-5 6.87v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	wallet: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26ZM22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	walletAdd: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M2.00195 11C2.00195 7.22876 2.00195 5.34315 3.17353 4.17157C4.3451 3 6.23072 3 10.002 3H14.002C14.9319 3 15.3969 3 15.7784 3.10222C16.8137 3.37962 17.6223 4.18827 17.8997 5.22354C18.002 5.60504 18.002 6.07003 18.002 7M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H12.5005"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path d="M10 17H6M6 17H2M6 17V21M6 17L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	walletRemove: styled((props) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path d="M10 15L3 22M10 22L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H13.501M18.002 7C18.002 6.07003 18.002 5.60504 17.8997 5.22354C17.6223 4.18827 16.8137 3.37962 15.7784 3.10222C15.3969 3 14.9319 3 14.002 3H10.002C6.23072 3 4.3451 3 3.17353 4.17157C2.00195 5.34315 2.00195 7.22876 2.00195 11V12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	trash: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	i3dcube: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m12.92 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51c.58-.31 1.26-.31 1.84 0ZM3.61 10.13l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.238 2.238 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99ZM20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	paintBucket: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M3.77 15.56l3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66L15 4.33c-2.59-2.59-3.72-1.94-5.66 0L3.77 9.9c-2.39 2.4-2.59 3.07 0 5.66zM19.2 16.79l-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0z"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M2 12.24a33.319 33.319 0 0117-.13l.5.13"
				></path>
			</svg>
		)
	}),
	logout: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"
				></path>
			</svg>
		)
	}),
	copy: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
				></path>
			</svg>
		)
	}),
	duplicate: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0578 3.45753C15.892 3.25546 15.7067 3.07019 15.5047 2.90436C14.4008 1.99854 12.7609 1.99854 9.48087 1.99854C6.20089 1.99854 4.5609 1.99854 3.45708 2.90436C3.255 3.07018 3.06971 3.25546 2.90387 3.45753C1.99799 4.56128 1.99799 6.20116 1.99799 9.48091C1.99799 12.7607 1.99799 14.4005 2.90387 15.5043C3.0697 15.7063 3.255 15.8916 3.45708 16.0574C4.50346 16.9162 6.03167 16.9608 8.98201 16.9632"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.0283 9.02455L16.994 8.98193M14.0143 22.0013L16.9799 21.9586M21.9716 14.0221L21.9436 16.9818M9.01033 14.0357L8.98236 16.9953M11.4873 9.02455C10.6545 9.17371 9.31781 9.32713 9.01033 11.0488M19.4946 21.9586C20.3296 21.8223 21.6685 21.6894 22.0025 19.9726M19.4946 9.02455C20.3274 9.17371 21.6641 9.32713 21.9716 11.0488M11.5 21.9573C10.6672 21.8086 9.33039 21.6559 9.02197 19.9344"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	file: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M8 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	fileAdd: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M11 6L3 6M7 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	fileImport: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20 15.0057V10.6606C20 9.84276 20 9.43383 19.8478 9.06613C19.6955 8.69843 19.4065 8.40927 18.8284 7.83096L14.0919 3.09236C13.593 2.59325 13.3436 2.3437 13.0345 2.19583C12.9702 2.16508 12.9044 2.13778 12.8372 2.11406C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88646C5.26731 3.06554 5.06508 3.26787 4.88607 3.48998C4 4.58943 4 6.21265 4 9.45908V14.0052C4 17.7781 4 19.6645 5.17157 20.8366C6.11466 21.7801 7.52043 21.9641 10 22M13 2.50022V3.00043C13 5.83009 13 7.24492 13.8787 8.12398C14.7574 9.00304 16.1716 9.00304 19 9.00304H19.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 22C14.3932 21.4102 12 19.8403 12 19C12 18.1597 14.3932 16.5898 15 16M13 19H20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	folderAdd: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M18 13.5V21.5M22 17.5L14 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9587 8.52819 21.9963 9.68416 21.9994 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	profile: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	profiles: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	profileAdd: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M18.5 19.5h-4M16.5 21.5v-4M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.428 4.428 0 0 1 11.99 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43ZM11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	profileTick: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m14.44 19.05 1.52 1.52L19 17.53M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43A4.428 4.428 0 0 1 11.99 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43ZM11.99 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	profileDelete: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m18.41 18.09-2.82 2.82M18.41 20.91l-2.82-2.82M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM12 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	timerPause: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 2h6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M19 17v4M16 17v4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	timerPlay: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 8v5M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 2h6M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3V18.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	tag: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				></path>
			</svg>
		)
	}),
	caretDown: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
				></path>
			</svg>
		)
	}),
	caretRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
				></path>
			</svg>
		)
	}),
	caretUp: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
				></path>
			</svg>
		)
	}),
	caretLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
				></path>
			</svg>
		)
	}),
	rows: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="3" x2="21" y1="6" y2="6" />
				<line x1="3" x2="21" y1="12" y2="12" />
				<line x1="3" x2="21" y1="18" y2="18" />
			</svg>
		)
	}),
	attach: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	attachSqaure: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m12.2 11.8-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0l-2.42 2.42a3.428 3.428 0 0 0 0 4.85"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	sort: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path d="M3 7h18M6 12h12M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
			</svg>
		)
	}),
	document: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	firstLine: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M14 4.5h7M14 9.5h7M3 14.5h18M3 19.5h18M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	minus: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
			</svg>
		)
	}),
	expand: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M8 8L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M17 3.23663C17.7506 3.22596 20.2363 2.70959 20.7634 3.23663C21.2904 3.76367 20.774 6.24941 20.7634 7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.23663 17C3.22596 17.7506 2.70959 20.2363 3.23663 20.7634C3.76367 21.2904 6.24941 20.774 7 20.7634"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.9981 9.00737L20.3838 3.62158"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.62598 20.3741L9.01172 14.9883"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	shrink: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M6.50232 13.2635C7.34673 13.2515 10.1432 12.6706 10.7361 13.2635C11.329 13.8564 10.7481 16.6529 10.7361 17.4973M13.2685 6.49733C13.2565 7.34173 12.6756 10.1382 13.2685 10.7311C13.8614 11.324 16.6579 10.7431 17.5023 10.7311M20.9991 2.99902L13.6103 10.3812M10.3691 13.6237L3 21.001"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	exportSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13 11l8.2-8.2M22 6.8V2h-4.8M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
				></path>
			</svg>
		)
	}),
	exportCurve: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 15V3.62M15.35 5.85L12 2.5 8.65 5.85"
				></path>
			</svg>
		)
	}),
	check: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M20 6 9 17l-5-5" />
			</svg>
		)
	}),
	checkCheck: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M18 6 7 17l-5-5" />
				<path d="m22 10-7.5 7.5L13 16" />
			</svg>
		)
	}),
	slidersHorizontal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="21" x2="14" y1="4" y2="4" />
				<line x1="10" x2="3" y1="4" y2="4" />
				<line x1="21" x2="12" y1="12" y2="12" />
				<line x1="8" x2="3" y1="12" y2="12" />
				<line x1="21" x2="16" y1="20" y2="20" />
				<line x1="12" x2="3" y1="20" y2="20" />
				<line x1="14" x2="14" y1="2" y2="6" />
				<line x1="8" x2="8" y1="10" y2="14" />
				<line x1="16" x2="16" y1="18" y2="22" />
			</svg>
		)
	}),
	slidersVertical: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="4" x2="4" y1="21" y2="14" />
				<line x1="4" x2="4" y1="10" y2="3" />
				<line x1="12" x2="12" y1="21" y2="12" />
				<line x1="12" x2="12" y1="8" y2="3" />
				<line x1="20" x2="20" y1="21" y2="16" />
				<line x1="20" x2="20" y1="12" y2="3" />
				<line x1="2" x2="6" y1="14" y2="14" />
				<line x1="10" x2="14" y1="8" y2="8" />
				<line x1="18" x2="22" y1="16" y2="16" />
			</svg>
		)
	}),
	smiley: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M8 14s1.5 2 4 2 4-2 4-2" />
				<line x1="9" x2="9.01" y1="9" y2="9" />
				<line x1="15" x2="15.01" y1="9" y2="9" />
			</svg>
		)
	}),
	ellipsis: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="12" cy="12" r="1" />
				<circle cx="19" cy="12" r="1" />
				<circle cx="5" cy="12" r="1" />
			</svg>
		)
	}),
	ellipsisVertical: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="12" cy="12" r="1" />
				<circle cx="12" cy="5" r="1" />
				<circle cx="12" cy="19" r="1" />
			</svg>
		)
	}),
	setting: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	grid: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	}),
	gripVertical: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="9" cy="12" r="1" />
				<circle cx="9" cy="5" r="1" />
				<circle cx="9" cy="19" r="1" />
				<circle cx="15" cy="12" r="1" />
				<circle cx="15" cy="5" r="1" />
				<circle cx="15" cy="19" r="1" />
			</svg>
		)
	}),
	tech: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	phone: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 256 256"
				{...props}
			>
				<path
					fill="currentColor"
					d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"
				></path>
			</svg>
		)
	}),
	linkedin: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.00801 7L6.99902 7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	refresh: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="#currentColor"
				fill="none"
			>
				<path
					d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	meta: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</svg>
		)
	}),
	x: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
			</svg>
		)
	}),
	textAa: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M14 19L11.1069 10.7479C9.76348 6.91597 9.09177 5 8 5C6.90823 5 6.23652 6.91597 4.89309 10.7479L2 19M4.5 12H11.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21.9692 13.9392V18.4392M21.9692 13.9392C22.0164 13.1161 22.0182 12.4891 21.9194 11.9773C21.6864 10.7709 20.4258 10.0439 19.206 9.89599C18.0385 9.75447 17.1015 10.055 16.1535 11.4363M21.9692 13.9392L19.1256 13.9392C18.6887 13.9392 18.2481 13.9603 17.8272 14.0773C15.2545 14.7925 15.4431 18.4003 18.0233 18.845C18.3099 18.8944 18.6025 18.9156 18.8927 18.9026C19.5703 18.8724 20.1955 18.545 20.7321 18.1301C21.3605 17.644 21.9692 16.9655 21.9692 15.9392V13.9392Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	at: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
			</svg>
		)
	}),
	drive: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M6 6.25v2M10 6.25v2M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM6 16v2M10 16v2M14 7.25h4M14 17h4M2 12h20"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	option: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 256 256"
				{...props}
			>
				<path
					fill="currentColor"
					d="M232 192a8 8 0 0 1-8 8h-63.06a15.92 15.92 0 0 1-14.31-8.84L95.06 88H32a8 8 0 0 1 0-16h63.06a15.92 15.92 0 0 1 14.31 8.84L160.94 184H224a8 8 0 0 1 8 8M152 88h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16"
				></path>
			</svg>
		)
	}),
	help: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M17 18.43h-4l-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66M11.995 13.75h.01"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	sparkle: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
				<path d="M5 3v4" />
				<path d="M19 17v4" />
				<path d="M3 5h4" />
				<path d="M17 19h4" />
			</svg>
		)
	}),
	infoCircle: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM12 8v5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M11.995 16h.009"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	cut: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M13.4368 9.55807L10.6 12M10.6 12L7 15M10.6 12L13.4949 14.3865M10.6 12L7 9M16 8.5C16 9.32843 15.3284 10 14.5 10C13.6716 10 13 9.32843 13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5ZM16 15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5C13 14.6716 13.6716 14 14.5 14C15.3284 14 16 14.6716 16 15.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	infoSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.992 8H12.001"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	descending: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
				<path d="M20 8h-5" />
				<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
				<path d="M15 14h5l-5 6h5" />
			</svg>
		)
	}),
	ascending: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
				<path d="M20 8h-5" />
				<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
				<path d="M15 14h5l-5 6h5" />
			</svg>
		)
	}),
	close: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M18 6 6 18" />
				<path d="m6 6 12 12" />
			</svg>
		)
	}),
	cornerUpLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20 21V18.9231C20 16.9221 20 15.9217 19.8547 15.0846C19.0547 10.4765 15.0934 6.86243 10.0426 6.13259C9.12509 6 7.19318 6 5 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7 3C6.39316 3.58984 4 5.15973 4 6C4 6.84027 6.39316 8.41016 7 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	cornerUpRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	cornerDownLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20 3V5.07692C20 7.07786 20 8.07833 19.8547 8.91545C19.0547 13.5235 15.0934 17.1376 10.0426 17.8674C9.12509 18 7.19318 18 5 18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7 21C6.39316 20.4102 4 18.8403 4 18C4 17.1597 6.39316 15.5898 7 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	cornerDownRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M4 3V5.07692C4 7.07786 4 8.07833 4.14533 8.91545C4.94529 13.5235 8.90656 17.1376 13.9574 17.8674C14.8749 18 16.8068 18 19 18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17 21C17.6068 20.4102 20 18.8403 20 18C20 17.1597 17.6068 15.5898 17 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	indent: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<polyline points="3 8 7 12 3 16" />
				<line x1="21" x2="11" y1="12" y2="12" />
				<line x1="21" x2="11" y1="6" y2="6" />
				<line x1="21" x2="11" y1="18" y2="18" />
			</svg>
		)
	}),
	outdent: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<polyline points="7 8 3 12 7 16" />
				<line x1="21" x2="11" y1="12" y2="12" />
				<line x1="21" x2="11" y1="6" y2="6" />
				<line x1="21" x2="11" y1="18" y2="18" />
			</svg>
		)
	}),
	paragraph: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M13 4v16" />
				<path d="M17 4v16" />
				<path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
			</svg>
		)
	}),
	h1: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M4 12h8" />
				<path d="M4 18V6" />
				<path d="M12 18V6" />
				<path d="m17 12 3-2v8" />
			</svg>
		)
	}),
	h2: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M4 12h8" />
				<path d="M4 18V6" />
				<path d="M12 18V6" />
				<path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
			</svg>
		)
	}),
	h3: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M4 12h8" />
				<path d="M4 18V6" />
				<path d="M12 18V6" />
				<path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
				<path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
			</svg>
		)
	}),
	h4: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M3.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M13.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M16.5 11V15H20.5M20.5 15V19M20.5 15V11"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 12L13.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	h5: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M3.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M13.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M16.5 16.5V17C16.5 18.1046 17.3954 19 18.5 19C19.6046 19 20.5 18.1046 20.5 17V16.5C20.5 15.1193 19.3807 14 18 14H16.5V11H20.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 12L13.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	h6: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M3.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M13.5 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M16.5 17C16.5 18.1046 17.3954 19 18.5 19C19.6046 19 20.5 18.1046 20.5 17C20.5 15.8954 19.6046 15 18.5 15C17.3954 15 16.5 15.8954 16.5 17ZM16.5 17V13C16.5 11.8954 17.3954 11 18.5 11C19.6046 11 20.5 11.8954 20.5 13"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 12L13.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	subscript: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M12.5 21H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M16.5 6C16.5 5.37191 16.5 5.05787 16.4194 4.78267C16.2518 4.21026 15.8066 3.71716 15.2541 3.49226C14.9886 3.38413 14.6885 3.35347 14.0884 3.29216C12.6695 3.14718 10.8874 3 9.5 3C8.11262 3 6.33047 3.14718 4.91161 3.29216C4.3115 3.35347 4.01144 3.38413 3.74586 3.49226C3.19344 3.71716 2.74816 4.21026 2.58057 4.78267C2.5 5.05787 2.5 5.37191 2.5 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path d="M9.5 3.34863L9.5 20.8486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M21.5 21H19.5C19.0286 21 18.7929 21 18.6464 20.8566C18.5 20.7133 18.5 20.4825 18.5 20.021V19.0766C18.5 18.2812 18.676 18.1253 19.5004 18.1094C20.2769 18.0944 20.7401 18.0388 21.0607 17.8333C21.5 17.5516 21.5 17.0983 21.5 16.1916C21.5 14.4594 18.5 15.1262 18.5 15.1262"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	superscript: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M12 21H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21H8.25ZM8.25 3V21H9.75V3H8.25Z"
					fill="currentColor"
				/>
				<path
					d="M16 6C16 5.37191 16 5.05787 15.9194 4.78267C15.7518 4.21026 15.3066 3.71716 14.7541 3.49226C14.4886 3.38413 14.1885 3.35347 13.5884 3.29216C12.1695 3.14718 10.3874 3 9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M22 12H20C19.5286 12 19.2929 12 19.1464 11.8566C19 11.7133 19 11.4825 19 11.021V10.0766C19 9.28117 19.176 9.12533 20.0004 9.10939C20.7769 9.09438 21.2401 9.03883 21.5607 8.83328C22 8.55161 22 8.09827 22 7.19159C22 5.45943 19 6.12617 19 6.12617"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	alignLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M3 4.5h18M3 9.5h9.47M3 14.5h18M3 19.5h9.47"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	alignCenter: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M3 4.5h18M7.26 9.5h9.48M3 14.5h18M7.26 19.5h9.48"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	alignJustify: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M3 4.5h18M3 9.5h18M3 14.5h18M3 19.5h18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	alignRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M3 4.5h18M11.53 9.5H21M3 14.5h18M11.53 19.5H21"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	blockquote: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	bold: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5ZM4.88 12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2V12v0Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	underline: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M5 21h14M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	italic: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="M9.62 3h9.25M5.12 21h9.25M14.25 3l-4.5 18"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	download: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				stroke="currentColor"
				strokeWidth="1.5"
				fill="none"
				{...props}
			>
				<path
					d="M3 14L3.23384 14.6626C4.144 17.2413 4.59908 18.5307 5.63742 19.2654C6.67576 20 8.0431 20 10.7778 20H13.2222C15.9569 20 17.3242 20 18.3626 19.2654C19.4009 18.5307 19.856 17.2413 20.7662 14.6626L21 14"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M12 14V4M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	strikethrough: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M16 4H9a3 3 0 0 0-2.83 4" />
				<path d="M14 12a4 4 0 0 1 0 8H6" />
				<line x1="4" x2="20" y1="12" y2="12" />
			</svg>
		)
	}),
	code: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<polyline points="16 18 22 12 16 6" />
				<polyline points="8 6 2 12 8 18" />
			</svg>
		)
	}),
	hash: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M7 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M17 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M22 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path d="M22 17L2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	number: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4 17V7l7 10V7m4 10h5m-5-7a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0"
				></path>
			</svg>
		)
	}),
	instagram: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
				<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
			</svg>
		)
	}),
	boolean: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M12 2v10" />
				<path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
			</svg>
		)
	}),
	rotateCw: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
				<path d="M21 3v5h-5" />
			</svg>
		)
	}),
	entityList: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	listBullet: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="8" x2="21" y1="6" y2="6" />
				<line x1="8" x2="21" y1="12" y2="12" />
				<line x1="8" x2="21" y1="18" y2="18" />
				<line x1="3" x2="3.01" y1="6" y2="6" />
				<line x1="3" x2="3.01" y1="12" y2="12" />
				<line x1="3" x2="3.01" y1="18" y2="18" />
			</svg>
		)
	}),
	listOrdered: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<line x1="10" x2="21" y1="6" y2="6" />
				<line x1="10" x2="21" y1="12" y2="12" />
				<line x1="10" x2="21" y1="18" y2="18" />
				<path d="M4 6h1v4" />
				<path d="M4 10h2" />
				<path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
			</svg>
		)
	}),
	listTodo: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<rect x="3" y="5" width="6" height="6" rx="1" />
				<path d="m3 17 2 2 4-4" />
				<path d="M13 6h8" />
				<path d="M13 12h8" />
				<path d="M13 18h8" />
			</svg>
		)
	}),
	listAdd: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				<path d="M11 12H3" />
				<path d="M16 6H3" />
				<path d="M16 18H3" />
				<path d="M18 9v6" />
				<path d="M21 12h-6" />
			</svg>
		)
	}),
	send: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				fill="none"
				{...props}
			>
				<path
					d="m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23ZM5.44 12h5.4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		)
	}),
	bank: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M11.9959 7H12.0049"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M4 10V18.5M8 10V18.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M16 10V18.5M20 10V18.5" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</svg>
		)
	}),
	arrowUpRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	warn: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12.2422 17V13C12.2422 12.5286 12.2422 12.2929 12.0957 12.1464C11.9493 12 11.7136 12 11.2422 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.992 8.99997H12.001"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	escape: styled(({}) => {
		return (
			<kbd
				className={css({
					fontSize: '1rem',
					lineHeight: '1.4rem',
					letterSpacing: '0.02em'
				})}
			>
				ESC
			</kbd>
		)
	}),
	table: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20.1069 20.1088C18.7156 21.5001 16.4765 21.5001 11.9981 21.5001C7.51976 21.5001 5.28059 21.5001 3.88935 20.1088C2.49811 18.7176 2.49811 16.4784 2.49811 12.0001C2.49811 7.52172 2.49811 5.28255 3.88935 3.89131C5.28059 2.50006 7.51976 2.50006 11.9981 2.50006C16.4764 2.50006 18.7156 2.50006 20.1069 3.8913C21.4981 5.28255 21.4981 7.52172 21.4981 12.0001C21.4981 16.4784 21.4981 18.7176 20.1069 20.1088Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M8.99811 21.5001L8.99811 2.50006" stroke="currentColor" strokeWidth="1.5" />
				<path d="M21.4981 8.00006L2.49811 8.00006" stroke="currentColor" strokeWidth="1.5" />
				<path d="M21.4981 16.0001H2.49811" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	columnLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2.8125 18C3.01415 18.8888 3.34564 19.5638 3.89059 20.1088C5.28184 21.5 7.52101 21.5 11.9994 21.5C16.4777 21.5 18.7169 21.5 20.1081 20.1088C21.4993 18.7175 21.4993 16.4783 21.4993 12C21.4993 7.52166 21.4993 5.28249 20.1081 3.89124C18.7169 2.5 16.4777 2.5 11.9994 2.5C7.52101 2.5 5.28184 2.5 3.89059 3.89124C3.34564 4.4362 3.01415 5.11125 2.8125 6.00001"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.5 9L2.5 12L5.5 15M3.5 12L10.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M15 2.49805L15 21.498" stroke="currentColor" strokeWidth="1.5" />
				<path d="M21.5 8.49805H15M21.5 15.498H15" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	columnRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M21.1868 18C20.9852 18.8888 20.6537 19.5638 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C20.6537 4.4362 20.9852 5.11125 21.1868 6.00001"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.5 9L21.5 12L18.5 15M20.5 12L13.5 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M9 2.49805V21.498" stroke="currentColor" strokeWidth="1.5" />
				<path d="M2.49805 8.49805H8.99805M2.49805 15.498H8.99805" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	columnDelete: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M21.187 5.99805C20.9854 5.10929 20.6539 4.43424 20.1089 3.88929C18.7177 2.49805 16.4785 2.49805 12.0002 2.49805C7.52184 2.49805 5.28267 2.49805 3.89143 3.88929C2.50018 5.28053 2.50018 7.5197 2.50018 11.998C2.50018 16.4764 2.50018 18.7156 3.89143 20.1068C5.28267 21.498 7.52184 21.498 12.0002 21.498C16.4785 21.498 18.7177 21.498 20.1089 20.1068C20.6539 19.5619 20.9854 18.8868 21.187 17.998"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21.5 15L18.5 12M18.5 12L15.5 9M18.5 12L15.5 15M18.5 12L21.5 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M9 21.5L9 2.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M2.5 15.5L9 15.5M2.5 8.5L9 8.5" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	rowDown: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M18 21.1868C18.8888 20.9852 19.5638 20.6537 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C4.4362 20.6537 5.11125 20.9852 6.00001 21.1868"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 13.5V20.5M9 18.5L12 21.5L15 18.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M2.5 9L21.5 9" stroke="currentColor" strokeWidth="1.5" />
				<path d="M8.5 2.5L8.5 9M15.5 2.5L15.5 9" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	rowUp: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M18 2.8125C18.8888 3.01415 19.5638 3.34564 20.1088 3.89059C21.5 5.28184 21.5 7.52101 21.5 11.9994C21.5 16.4777 21.5 18.7169 20.1088 20.1081C18.7175 21.4993 16.4783 21.4993 12 21.4993C7.52166 21.4993 5.28249 21.4993 3.89124 20.1081C2.5 18.7169 2.5 16.4777 2.5 11.9993C2.5 7.52101 2.5 5.28184 3.89124 3.89059C4.4362 3.34564 5.11125 3.01415 6.00001 2.8125"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 5.5L12 2.5L15 5.5M12 3.5V10.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M2.5 15H21.5" stroke="currentColor" strokeWidth="1.5" />
				<path d="M8.5 21.5L8.5 15M15.5 21.5L15.5 15" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	rowDelete: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M21 18.5C21 19.9045 21 20.6067 20.6208 21.1111C20.4567 21.3295 20.2457 21.517 20 21.6629C19.4325 22 18.6425 22 17.0625 22L6.9375 22C5.35748 22 4.56747 22 3.99997 21.6629C3.75429 21.517 3.54335 21.3295 3.37919 21.1111C3 20.6067 3 19.9045 3 18.5C3 17.0955 3 16.3933 3.37919 15.8889C3.54335 15.6705 3.75429 15.483 3.99997 15.3371C4.56747 15 5.35748 15 6.9375 15L17.0625 15C18.6425 15 19.4325 15 20 15.3371C20.2457 15.483 20.4567 15.6705 20.6208 15.8889C21 16.3933 21 17.0955 21 18.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12.0625 4L6.9375 4C5.35748 4 4.56747 4 3.99997 4.33706C3.75429 4.48298 3.54335 4.67048 3.37919 4.88886C3 5.39331 3 6.09554 3 7.5C3 8.90446 3 9.60669 3.37919 10.1111C3.54335 10.3295 3.75429 10.517 3.99997 10.6629C4.56747 11 5.35748 11 6.9375 11L17.0625 11C18.6425 11 19.4325 11 20 10.6629"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M21 7.99936L15 2M21 2.00064L15 8"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	textClear: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M11 20.001H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M12 4L8 20.0008M12 4C13.3874 4 15.1695 4.03054 16.5884 4.17648C17.1885 4.23819 17.4886 4.26905 17.7541 4.37789C18.3066 4.60428 18.7518 5.10062 18.9194 5.6768C19 5.95381 19 6.26991 19 6.90214M12 4C10.6126 4 8.83047 4.03054 7.41161 4.17648C6.8115 4.23819 6.51144 4.26905 6.24586 4.37789C5.69344 4.60428 5.24816 5.10062 5.08057 5.6768C5 5.95381 5 6.26991 5 6.90214"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M14 15L19 20M14 20L19 15"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	layout2Columns: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M12 2.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
			</svg>
		)
	}),
	layout2ColumnsLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M9 21.5L9 2.5" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	layout2ColumnsRight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M15 2.5L15 21.5" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	databaseRestore: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
				<path
					d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M19.842 13L20.4127 15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19 5V10M3 5V19C3 20.6569 6.58172 22 11 22C11.0849 22 11.1694 21.9995 11.2537 21.9985"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 12C3 13.616 6.40729 14.9336 10.6748 14.9976"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	shorten: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M14.2297 17.9947C14.2192 17.2447 13.704 14.7612 14.2305 14.2347C14.7571 13.7083 17.2398 14.2247 17.9895 14.2355M20.9995 20.9981L14.6147 14.6146"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.76961 17.9944C9.78011 17.2445 10.2953 14.761 9.76881 14.2344C9.24228 13.708 6.75956 14.2245 6.00985 14.2352M2.99981 20.9978L9.38459 14.6144"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.00746 9.76133C6.75719 9.7709 9.24073 10.2832 9.76644 9.75585C10.2921 9.22853 9.77264 6.74581 9.76096 5.99592M9.37696 9.36743L3.00176 3.00244"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.9916 9.76133C17.2419 9.7709 14.7584 10.2832 14.2326 9.75585C13.707 9.22853 14.2264 6.74581 14.2381 5.99592M14.6221 9.36743L20.9973 3.00244"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	play: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	fastForward: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<rect width="256" height="256" fill="none" />
				<path
					d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	cornersOut: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<rect width="256" height="256" fill="none" />
				<polyline
					points="168 48 208 48 208 88"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="88 208 48 208 48 168"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="208 168 208 208 168 208"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="48 88 48 48 88 48"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	cornersIn: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<rect width="256" height="256" fill="none" />
				<polyline
					points="208 96 160 96 160 48"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="48 160 96 160 96 208"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="160 208 160 160 208 160"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="96 48 96 96 48 96"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	pause: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				viewBox="0 0 24 24"
				{...props}
			>
				<path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 5v14M17 5v14"></path>
			</svg>
		)
	}),
	mute: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<rect width="256" height="256" fill="none" />
				<line
					x1="48"
					y1="40"
					x2="208"
					y2="216"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<line
					x1="80"
					y1="88"
					x2="80"
					y2="168"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M192,106.87a32,32,0,0,1,0,42.3"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l6.82-5.3"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="112.15 62.99 152 32 152 106.83"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M221.67,80a72,72,0,0,1,0,96"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	speaker: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<rect width="256" height="256" fill="none" />
				<path
					d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<line
					x1="80"
					y1="88"
					x2="80"
					y2="168"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M192,106.85a32,32,0,0,1,0,42.3"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M221.67,80a72,72,0,0,1,0,96"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	undo: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				fill="none"
				color="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"
				></path>
			</svg>
		)
	}),
	redo: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				fill="none"
				color="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43-4.79 0-8.67 3.88-8.67 8.67C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82M16.13 5.32L13.24 2M16.13 5.32l-3.37 2.46"
				></path>
			</svg>
		)
	}),
	highlight: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				fill="none"
				color="currentColor"
				viewBox="0 0 24 24"
				{...props}
			>
				<path
					d="m8 16 4-9 4 9M8 12h4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit="10"
				></path>
			</svg>
		)
	}),
	arrowForward: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				fill="currentColor"
				viewBox="0 0 256 256"
				{...props}
			>
				<path d="M232,112a64.07,64.07,0,0,1-64,64H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,11.32L51.31,160H168a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h88A64.07,64.07,0,0,1,232,112Z"></path>
			</svg>
		)
	}),
	lightning: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	workflow: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M9 5C9 3.58579 9 2.87868 9.43934 2.43934C9.87868 2 10.5858 2 12 2C13.4142 2 14.1213 2 14.5607 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 14.5607 7.56066C14.1213 8 13.4142 8 12 8C10.5858 8 9.87868 8 9.43934 7.56066C9 7.12132 9 6.41421 9 5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M12 8V9M12 9C12 9.93188 12 10.3978 12.1776 10.7654C12.4144 11.2554 12.8687 11.6448 13.4404 11.8478C13.8692 12 14.4128 12 15.5 12C16.5872 12 17.1308 12 17.5596 12.1522C18.1313 12.3552 18.5856 12.7446 18.8224 13.2346C19 13.6022 19 14.0681 19 15V16M12 9C12 9.93188 12 10.3978 11.8224 10.7654C11.5856 11.2554 11.1313 11.6448 10.5596 11.8478C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 12.1522C5.86867 12.3552 5.41443 12.7446 5.17761 13.2346C5 13.6022 5 14.0681 5 15V16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	target: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	mouseLeftClick: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M10 2.09084C10.6655 2.02383 11.3389 2 12 2C12.9247 2 13.8373 2.07762 14.7349 2.1882C17.1758 2.48893 19.0694 4.51965 19.2593 6.91118C19.3909 8.56832 19.5 10.268 19.5 12C19.5 13.732 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.732 4.5 12C4.5 11.3283 4.5164 10.6614 4.54415 10"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path d="M12 2L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<circle cx="5.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		)
	}),
	signal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M7 17V16C7 15.0572 7 14.5858 6.70711 14.2929C6.41421 14 5.94281 14 5 14C4.05719 14 3.58579 14 3.29289 14.2929C3 14.5858 3 15.0572 3 16V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929C10 10.5858 10 11.0572 10 12V17C10 17.9428 10 18.4142 10.2929 18.7071C10.5858 19 11.0572 19 12 19C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21 17V8C21 7.05719 21 6.58579 20.7071 6.29289C20.4142 6 19.9428 6 19 6C18.0572 6 17.5858 6 17.2929 6.29289C17 6.58579 17 7.05719 17 8V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	dashboardSquareEdit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M15.3477 9.85572L15.1909 9.1223H15.1909L15.3477 9.85572ZM14.1443 8.65228L14.8777 8.80911L14.1443 8.65228ZM15.0207 6.11171L14.4903 5.58138H14.4903L15.0207 6.11171ZM17.8883 8.97933L18.4186 9.50966L17.8883 8.97933ZM21.7963 3.47729L22.4458 3.10229L21.7963 3.47729ZM21.1961 5.67149L20.6658 5.14116L21.1961 5.67149ZM21.7963 4.99807L22.4458 5.37307L21.7963 4.99807ZM20.5227 2.20375L20.8977 1.55423V1.55423L20.5227 2.20375ZM18.3285 2.80388L18.8588 3.33421L18.3285 2.80388ZM19.0019 2.20375L18.6269 1.55423V1.55423L19.0019 2.20375ZM20.6658 5.14116L17.358 8.449L18.4186 9.50966L21.7265 6.20182L20.6658 5.14116ZM15.551 6.64205L18.8588 3.33421L17.7982 2.27355L14.4903 5.58138L15.551 6.64205ZM15.1909 9.1223C15.0155 9.15981 14.8753 9.18973 14.7548 9.21212C14.6333 9.23472 14.5536 9.2454 14.4996 9.24884C14.4441 9.25237 14.4479 9.24579 14.4825 9.25471C14.5296 9.26685 14.5936 9.29719 14.6482 9.35178L13.5876 10.4124C13.9113 10.7362 14.3158 10.7636 14.5948 10.7458C14.8603 10.7289 15.1839 10.6577 15.5045 10.5891L15.1909 9.1223ZM13.4109 8.49546C13.3423 8.8161 13.2711 9.13973 13.2542 9.40523C13.2364 9.68419 13.2638 10.0887 13.5876 10.4124L14.6482 9.35178C14.7028 9.40637 14.7331 9.47039 14.7453 9.51747C14.7542 9.55207 14.7476 9.55591 14.7512 9.50044C14.7546 9.44641 14.7653 9.36674 14.7879 9.24519C14.8103 9.12473 14.8402 8.98455 14.8777 8.80911L13.4109 8.49546ZM20.6658 3.33421C21.0333 3.7017 21.1084 3.78597 21.1467 3.85229L22.4458 3.10229C22.2839 2.82184 22.0257 2.57275 21.7265 2.27355L20.6658 3.33421ZM21.7265 6.20182C22.0257 5.90261 22.2839 5.65353 22.4458 5.37307L21.1467 4.62307C21.1084 4.6894 21.0333 4.77367 20.6658 5.14116L21.7265 6.20182ZM21.1467 3.85229C21.2844 4.09077 21.2844 4.38459 21.1467 4.62307L22.4458 5.37307C22.8514 4.67049 22.8514 3.80488 22.4458 3.10229L21.1467 3.85229ZM21.7265 2.27355C21.4272 1.97434 21.1782 1.71615 20.8977 1.55423L20.1477 2.85326C20.214 2.89156 20.2983 2.96671 20.6658 3.33421L21.7265 2.27355ZM18.8588 3.33421C19.2263 2.96672 19.3106 2.89156 19.3769 2.85326L18.6269 1.55423C18.3465 1.71615 18.0974 1.97434 17.7982 2.27355L18.8588 3.33421ZM20.8977 1.55423C20.1951 1.14859 19.3295 1.14859 18.6269 1.55423L19.3769 2.85327C19.6154 2.71558 19.9092 2.71558 20.1477 2.85327L20.8977 1.55423ZM17.358 8.449C17.1624 8.64453 16.8952 8.77096 16.5155 8.8679C16.3253 8.91646 16.1224 8.954 15.8963 8.99307C15.679 9.03061 15.4303 9.07112 15.1909 9.1223L15.5045 10.5891C15.7063 10.546 15.9131 10.5124 16.1517 10.4712C16.3814 10.4315 16.6346 10.3856 16.8866 10.3213C17.3914 10.1924 17.9533 9.97497 18.4186 9.50966L17.358 8.449ZM14.8777 8.80911C14.9289 8.56974 14.9694 8.32097 15.0069 8.1037C15.046 7.87757 15.0835 7.67468 15.1321 7.48447C15.229 7.10477 15.3555 6.83758 15.551 6.64205L14.4903 5.58138C14.025 6.0467 13.8076 6.60863 13.6787 7.11341C13.6144 7.36544 13.5685 7.61864 13.5288 7.84832C13.4876 8.08687 13.454 8.29366 13.4109 8.49546L14.8777 8.80911Z"
					fill="currentColor"
				/>
			</svg>
		)
	}),
	description: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 9.5L7 9.5M10 14.5H7"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	arrowReloadHorizontal: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	cursorDisabled: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M8.0469 3.44865L13.4101 5.54728L13.4101 5.54728C16.5034 6.75771 18.05 7.36293 17.9988 8.32296C17.9475 9.28299 16.3334 9.7232 13.1051 10.6036C12.1439 10.8658 11.6633 10.9969 11.3301 11.3301C10.9969 11.6633 10.8658 12.1439 10.6036 13.1051C9.7232 16.3334 9.28299 17.9475 8.32296 17.9988C7.36293 18.05 6.75771 16.5034 5.54728 13.4101L5.54728 13.4101L3.44865 8.0469C2.18138 4.80831 1.54774 3.18901 2.36837 2.36837C3.18901 1.54774 4.80831 2.18138 8.0469 3.44865Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M14.318 20.682C16.0754 22.4393 18.9246 22.4393 20.682 20.682C22.4393 18.9246 22.4393 16.0754 20.682 14.318M14.318 20.682C12.5607 18.9246 12.5607 16.0754 14.318 14.318C16.0754 12.5607 18.9246 12.5607 20.682 14.318M14.318 20.682L20.682 14.318"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	megaphone: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M14.9263 4.41103L8.27352 7.60452C7.76151 7.85029 7.21443 7.91187 6.65675 7.78693C6.29177 7.70517 6.10926 7.66429 5.9623 7.64751C4.13743 7.43912 3 8.88342 3 10.5443V11.4557C3 13.1166 4.13743 14.5609 5.9623 14.3525C6.10926 14.3357 6.29178 14.2948 6.65675 14.2131C7.21443 14.0881 7.76151 14.1497 8.27352 14.3955L14.9263 17.589C16.4534 18.3221 17.217 18.6886 18.0684 18.4029C18.9197 18.1172 19.2119 17.5041 19.7964 16.278C21.4012 12.9112 21.4012 9.08885 19.7964 5.72196C19.2119 4.49586 18.9197 3.88281 18.0684 3.5971C17.217 3.3114 16.4534 3.67794 14.9263 4.41103Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path
					d="M13 17V17.5C13 18.7841 13 19.4261 12.776 19.7886C12.4773 20.2719 11.9312 20.545 11.3653 20.4939C10.9409 20.4557 10.4273 20.0704 9.4 19.3L8.2 18.4C7.22253 17.6669 7 17.2218 7 16V14.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
					strokeLinecap="round"
				/>
				<path d="M7.5 14V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
			</svg>
		)
	}),
	gears: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M9.37866 3.83307L9.21729 2.88021C9.14611 2.45991 9.11052 2.24976 8.95858 2.12488C8.80664 2 8.58655 2 8.14636 2H7.85617C7.41598 2 7.19589 2 7.04395 2.12488C6.89202 2.24976 6.85643 2.45991 6.78525 2.88021L6.62387 3.83307C6.28266 3.96639 5.96616 4.14778 5.68298 4.36874L4.7826 4.03678C4.3673 3.88367 4.15966 3.80712 3.97059 3.87291C3.78152 3.93869 3.67182 4.12567 3.45243 4.49963L3.29194 4.77319C3.07837 5.13722 2.97159 5.31924 3.00653 5.50636C3.04146 5.69349 3.20731 5.82785 3.53901 6.09658L4.30581 6.7178C4.28019 6.89156 4.26694 7.06926 4.26694 7.25C4.26694 7.4314 4.28029 7.60974 4.30609 7.7841L3.5411 8.40386C3.2094 8.67259 3.04355 8.80695 3.00861 8.99408C2.97367 9.1812 3.08046 9.36322 3.29402 9.72725L3.45451 10.0008C3.6739 10.3748 3.7836 10.5617 3.97267 10.6275C4.16174 10.6933 4.36939 10.6168 4.78468 10.4637L5.68403 10.1321C5.96694 10.3527 6.28308 10.5338 6.62387 10.6669L6.78524 11.6198C6.85643 12.0401 6.89202 12.2502 7.04395 12.3751C7.19589 12.5 7.41598 12.5 7.85617 12.5H8.14636C8.58655 12.5 8.80664 12.5 8.95858 12.3751C9.11051 12.2502 9.14611 12.0401 9.21729 11.6198L9.37866 10.6669C9.71912 10.5339 10.035 10.353 10.3177 10.1327L11.2153 10.4637C11.6306 10.6168 11.8383 10.6933 12.0273 10.6275C12.2164 10.5617 12.3261 10.3748 12.5455 10.0008L12.706 9.72725C12.9195 9.36322 13.0263 9.1812 12.9914 8.99408C12.9565 8.80695 12.7906 8.67259 12.4589 8.40386L11.6962 7.78593C11.7221 7.61099 11.7356 7.43204 11.7356 7.25C11.7356 7.06862 11.7222 6.89031 11.6965 6.71597L12.461 6.09658C12.7927 5.82785 12.9585 5.69349 12.9935 5.50636C13.0284 5.31924 12.9216 5.13722 12.7081 4.77319L12.5476 4.49963C12.3282 4.12567 12.2185 3.93869 12.0294 3.87291C11.8403 3.80712 11.6327 3.88367 11.2174 4.03678L10.3187 4.3681C10.0358 4.14743 9.71954 3.96626 9.37866 3.83307Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M17.3787 13.3331L17.2173 12.3802C17.1461 11.9599 17.1105 11.7498 16.9586 11.6249C16.8066 11.5 16.5866 11.5 16.1464 11.5H15.8562C15.416 11.5 15.1959 11.5 15.044 11.6249C14.892 11.7498 14.8564 11.9599 14.7852 12.3802L14.6239 13.3331C14.2827 13.4664 13.9662 13.6478 13.683 13.8687L12.7826 13.5368C12.3673 13.3837 12.1597 13.3071 11.9706 13.3729C11.7815 13.4387 11.6718 13.6257 11.4524 13.9996L11.2919 14.2732C11.0784 14.6372 10.9716 14.8192 11.0065 15.0064C11.0415 15.1935 11.2073 15.3279 11.539 15.5966L12.3058 16.2178C12.2802 16.3916 12.2669 16.5693 12.2669 16.75C12.2669 16.9314 12.2803 17.1097 12.3061 17.2841L11.5411 17.9039C11.2094 18.1726 11.0435 18.307 11.0086 18.4941C10.9737 18.6812 11.0805 18.8632 11.294 19.2272L11.4545 19.5008C11.6739 19.8748 11.7836 20.0617 11.9727 20.1275C12.1617 20.1933 12.3694 20.1168 12.7847 19.9637L13.684 19.6321C13.9669 19.8527 14.2831 20.0338 14.6239 20.1669L14.7852 21.1198C14.8564 21.5401 14.892 21.7502 15.044 21.8751C15.1959 22 15.416 22 15.8562 22H16.1464C16.5866 22 16.8066 22 16.9586 21.8751C17.1105 21.7502 17.1461 21.5401 17.2173 21.1198L17.3787 20.1669C17.7191 20.0339 18.035 19.853 18.3177 19.6327L19.2153 19.9637C19.6306 20.1168 19.8383 20.1933 20.0273 20.1275C20.2164 20.0617 20.3261 19.8748 20.5455 19.5008L20.706 19.2272C20.9195 18.8632 21.0263 18.6812 20.9914 18.4941C20.9565 18.307 20.7906 18.1726 20.4589 17.9039L19.6962 17.2859C19.7221 17.111 19.7356 16.932 19.7356 16.75C19.7356 16.5686 19.7222 16.3903 19.6965 16.216L20.461 15.5966C20.7927 15.3279 20.9585 15.1935 20.9935 15.0064C21.0284 14.8192 20.9216 14.6372 20.7081 14.2732L20.5476 13.9996C20.3282 13.6257 20.2185 13.4387 20.0294 13.3729C19.8403 13.3071 19.6327 13.3837 19.2174 13.5368L18.3187 13.8681C18.0358 13.6474 17.7195 13.4663 17.3787 13.3331Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M8.75 7.25C8.75 7.66421 8.41421 8 8 8C7.58579 8 7.25 7.66421 7.25 7.25C7.25 6.83579 7.58579 6.5 8 6.5C8.41421 6.5 8.75 6.83579 8.75 7.25Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<path
					d="M16.75 16.75C16.75 17.1642 16.4142 17.5 16 17.5C15.5858 17.5 15.25 17.1642 15.25 16.75C15.25 16.3358 15.5858 16 16 16C16.4142 16 16.75 16.3358 16.75 16.75Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	checkSquare: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M21.4477 8.2C21.5 9.25014 21.5 10.4994 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C13.0719 2.5 14.0156 2.5 14.85 2.51908"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M8 11.5C8 11.5 9.5 11.5 11.5 15C11.5 15 16.5588 5.83333 21.5 4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	note01: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path
					d="M12.8809 7.01656L17.6538 8.28825M11.8578 10.8134L14.2442 11.4492M11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M12 20.9462L11.0477 21.2055C8.35403 21.939 7.00722 22.3057 5.94619 21.6832C4.88517 21.0607 4.52429 19.692 3.80253 16.9546L2.78182 13.0833C2.06006 10.3459 1.69918 8.97718 2.31177 7.89892C2.84167 6.96619 4 7.00015 5.5 7.00003"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	moveTo: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				{...props}
			>
				<path d="M8.99997 5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M4.99997 5H5.00895"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.99997 11.0039H5.00895"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.99997 17.0073H5.00895"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M8.99997 11.0039H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					d="M8.99997 17.0074H19M19 17.0074C19.0035 16.7467 18.8202 16.4896 18.5964 16.2998L16.9939 15.0259M19 17.0074C18.9965 17.2588 18.8142 17.5135 18.5964 17.7149L16.9939 19.0002"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		)
	}),
	bubbleChat: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M23 5.5C23 7.433 21.433 9 19.5 9C17.567 9 16 7.433 16 5.5C16 3.567 17.567 2 19.5 2C21.433 2 23 3.567 23 5.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}),
	noteEdit: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					d="M10.2892 21.9614H9.39111C6.14261 21.9614 4.51836 21.9614 3.50918 20.9363C2.5 19.9111 2.5 18.2612 2.5 14.9614V9.96139C2.5 6.66156 2.5 5.01165 3.50918 3.98653C4.51836 2.9614 6.14261 2.9614 9.39111 2.9614H12.3444C15.5929 2.9614 17.4907 3.01658 18.5 4.04171C19.5092 5.06683 19.5 6.66156 19.5 9.96139V11.1478"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.9453 2V4M10.9453 2V4M5.94531 2V4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M7 15H11M7 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				<path
					opacity="0.93"
					d="M20.7598 14.8785C19.8544 13.8641 19.3112 13.9245 18.7076 14.1056C18.2851 14.166 16.8365 15.8568 16.2329 16.3952C15.2419 17.3743 14.2464 18.3823 14.1807 18.5138C13.9931 18.8188 13.8186 19.3592 13.7341 19.963C13.5771 20.8688 13.3507 21.8885 13.6375 21.9759C13.9242 22.0632 14.7239 21.8954 15.6293 21.7625C16.2329 21.6538 16.6554 21.533 16.9572 21.3519C17.3797 21.0983 18.1644 20.2046 19.5164 18.8761C20.3644 17.9833 21.1823 17.3664 21.4238 16.7626C21.6652 15.8568 21.3031 15.3737 20.7598 14.8785Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</svg>
		)
	}),
	arrowBendDoubleUpLeft: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				viewBox="0 0 256 256"
			>
				<rect />
				<polyline
					points="80 152 32 104 80 56"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="128 152 80 104 128 56"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M224,200a96,96,0,0,0-96-96H80"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		)
	}),
	menuCollapse: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
				viewBox="0 0 256 256"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.99805 7.0625H16.998C17.408 7.0625 17.748 6.7225 17.748 6.3125C17.748 5.9025 17.408 5.5625 16.998 5.5625H2.99805C2.58805 5.5625 2.24805 5.9025 2.24805 6.3125C2.24805 6.7225 2.58805 7.0625 2.99805 7.0625ZM2.99805 13.0625H12.998C13.408 13.0625 13.748 12.7225 13.748 12.3125C13.748 11.9025 13.408 11.5625 12.998 11.5625H2.99805C2.58805 11.5625 2.24805 11.9025 2.24805 12.3125C2.24805 12.7225 2.58805 13.0625 2.99805 13.0625ZM16.998 19.0625H2.99805C2.58805 19.0625 2.24805 18.7225 2.24805 18.3125C2.24805 17.9025 2.58805 17.5625 2.99805 17.5625H16.998C17.408 17.5625 17.748 17.9025 17.748 18.3125C17.748 18.7225 17.408 19.0625 16.998 19.0625ZM20.5478 16.9125C20.6778 17.0125 20.8378 17.0625 20.9978 17.0625V17.0525C21.2278 17.0525 21.4478 16.9425 21.5978 16.7525C21.8478 16.4225 21.7878 15.9525 21.4578 15.7025L20.3078 14.8225C18.7178 13.6225 17.7578 12.8825 17.7578 12.3025C17.7578 11.7231 18.7159 10.994 20.3032 9.78606L20.3078 9.78253L21.4578 8.90253C21.7878 8.65253 21.8478 8.18253 21.5978 7.85253C21.3478 7.52253 20.8778 7.46253 20.5478 7.71253L19.3978 8.59253L19.3364 8.63935C17.3551 10.1497 16.2578 10.9862 16.2578 12.3125C16.2578 13.6505 17.3644 14.4899 19.3884 16.0254L19.3978 16.0325L20.5478 16.9125Z"
					fill="currentColor"
				/>
			</svg>
		)
	}),
	bag: styled((props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={props.size || 16}
				height={props.size || 16}
				color="currentColor"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.95 2.5H12.05C12.95 2.5 13.7 2.50008 14.29 2.58008C14.92 2.66008 15.48 2.85006 15.94 3.31006C16.4 3.76006 16.58 4.32996 16.67 4.95996C16.73 5.38996 16.74 5.91001 16.75 6.51001C17.36 6.52001 17.89 6.54009 18.36 6.59009C19.25 6.68009 19.99 6.87005 20.64 7.30005C21.16 7.65005 21.6 8.09011 21.95 8.61011C22.38 9.26011 22.57 10.0001 22.66 10.8901C22.75 11.7501 22.75 12.84 22.75 14.21V14.29C22.75 15.66 22.75 16.7501 22.66 17.6101C22.57 18.5001 22.38 19.2401 21.95 19.8901C21.6 20.4101 21.16 20.85 20.64 21.2C19.99 21.63 19.25 21.8199 18.36 21.9099C17.49 21.9999 16.41 22 15.04 22H8.96C7.59 22 6.51 21.9999 5.64 21.9099C4.75 21.8199 4.01 21.63 3.36 21.2C2.84 20.85 2.4 20.4101 2.05 19.8901C1.62 19.2401 1.43 18.5001 1.34 17.6101C1.25 16.7501 1.25 15.66 1.25 14.29V14.21C1.25 12.84 1.25 11.7501 1.34 10.8901C1.43 10.0001 1.62 9.26011 2.05 8.61011C2.4 8.09011 2.84 7.65005 3.36 7.30005C4.01 6.87005 4.75 6.68009 5.64 6.59009C6.11 6.54009 6.64 6.52001 7.25 6.51001C7.25 5.91001 7.27 5.38996 7.33 4.95996C7.41 4.32996 7.6 3.76006 8.06 3.31006C8.52 2.85006 9.08 2.66008 9.71 2.58008C10.3 2.50008 11.05 2.5 11.95 2.5ZM15.18 5.15991C15.23 5.49991 15.24 5.93 15.24 6.5H8.74C8.74 5.93 8.76 5.49991 8.8 5.15991C8.86 4.68991 8.97 4.50012 9.1 4.37012C9.23 4.24012 9.43 4.13007 9.89 4.07007C10.37 4.00007 11.02 4 11.98 4C12.94 4 13.59 4.00007 14.07 4.07007C14.53 4.13007 14.73 4.24012 14.86 4.37012C14.99 4.50012 15.1 4.68991 15.16 5.15991H15.18ZM5.79 8.08008C5.02 8.16008 4.56 8.31005 4.19 8.55005C3.84 8.78005 3.53 9.08994 3.29 9.43994C3.05 9.80994 2.9 10.27 2.82 11.04C2.74 11.82 2.74 12.83 2.74 14.25C2.74 15.67 2.74 16.68 2.82 17.46C2.9 18.23 3.05 18.6901 3.29 19.0601C3.53 19.4101 3.83 19.72 4.19 19.95C4.55 20.19 5.02 20.3399 5.79 20.4199C6.57 20.4999 7.58 20.5 9 20.5H15C16.42 20.5 17.43 20.4999 18.21 20.4199C18.98 20.3399 19.44 20.19 19.81 19.95C20.16 19.72 20.47 19.4101 20.71 19.0601C20.95 18.6901 21.1 18.23 21.18 17.46C21.26 16.68 21.26 15.67 21.26 14.25C21.26 12.83 21.26 11.82 21.18 11.04C21.1 10.27 20.95 9.80994 20.71 9.43994C20.47 9.08994 20.17 8.78005 19.81 8.55005C19.45 8.31005 18.98 8.16008 18.21 8.08008C17.43 8.00008 16.42 8 15 8H9C7.58 8 6.57 8.00008 5.79 8.08008ZM6.22 10.53C5.82 10.41 5.4 10.63 5.28 11.03C5.16 11.42 5.38 11.84 5.77 11.97L6.42 12.1699C7.97 12.6499 9.6 12.92 11.24 12.99V14.25C11.24 14.66 11.58 15 11.99 15C12.4 15 12.74 14.66 12.74 14.25V12.99C14.38 12.92 16.01 12.6499 17.56 12.1699L18.21 11.97C18.61 11.84 18.83 11.42 18.7 11.03C18.58 10.63 18.16 10.41 17.76 10.53L17.11 10.74C13.82 11.75 10.15 11.75 6.86 10.74L6.21 10.53H6.22Z"
					fill="currentColor"
				/>
			</svg>
		)
	})
}
