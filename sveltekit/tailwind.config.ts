import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { theme } from './theme';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],
	theme: {
		extend: {
			keyframes: {
				bgBreathing: {
					'0%': { backgroundColor: '#fdd609' },
					'20%': { backgroundColor: '#9a8302' },
					'50%': { backgroundColor: '#fdd609' },
					'80%': { backgroundColor: '#fde76f' },
					'100%': { backgroundColor: '#fdd609' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(3rem)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOut: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(5rem)' },
				},
			},
			animation: {
				bgBreathing: 'bgBreathing 15s infinite',
				fadeIn: 'fadeIn 1.5s forwards',
				fadeOut: 'fadeOut 1.5s forwards',
			},
			boxShadow: {
				focus: '0 0 10px rgba(0, 0, 0, 0.2)',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
        '2xs': '0.60rem',
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '3.75rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
				'9xl': '8rem',
			},
			colors: {
				black: '#02022C',
			},
		},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [theme],
			},
		}),
	],
} satisfies Config;

export default config;
