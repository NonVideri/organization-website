import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
    name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fdd609 
		"--color-primary-50": "255 249 218", // #fff9da
		"--color-primary-100": "255 247 206", // #fff7ce
		"--color-primary-200": "255 245 194", // #fff5c2
		"--color-primary-300": "254 239 157", // #feef9d
		"--color-primary-400": "254 226 83", // #fee253
		"--color-primary-500": "253 214 9", // #fdd609
		"--color-primary-600": "228 193 8", // #e4c108
		"--color-primary-700": "190 161 7", // #bea107
		"--color-primary-800": "152 128 5", // #988005
		"--color-primary-900": "124 105 4", // #7c6904
		// secondary | #082dfd 
		"--color-secondary-50": "218 224 255", // #dae0ff
		"--color-secondary-100": "206 213 255", // #ced5ff
		"--color-secondary-200": "193 203 255", // #c1cbff
		"--color-secondary-300": "156 171 254", // #9cabfe
		"--color-secondary-400": "82 108 254", // #526cfe
		"--color-secondary-500": "8 45 253", // #082dfd
		"--color-secondary-600": "7 41 228", // #0729e4
		"--color-secondary-700": "6 34 190", // #0622be
		"--color-secondary-800": "5 27 152", // #051b98
		"--color-secondary-900": "4 22 124", // #04167c
		// tertiary | #59357e 
		"--color-tertiary-50": "230 225 236", // #e6e1ec
		"--color-tertiary-100": "222 215 229", // #ded7e5
		"--color-tertiary-200": "214 205 223", // #d6cddf
		"--color-tertiary-300": "189 174 203", // #bdaecb
		"--color-tertiary-400": "139 114 165", // #8b72a5
		"--color-tertiary-500": "89 53 126", // #59357e
		"--color-tertiary-600": "80 48 113", // #503071
		"--color-tertiary-700": "67 40 95", // #43285f
		"--color-tertiary-800": "53 32 76", // #35204c
		"--color-tertiary-900": "44 26 62", // #2c1a3e
		// success | #196126 
		"--color-success-50": "221 231 222", // #dde7de
		"--color-success-100": "209 223 212", // #d1dfd4
		"--color-success-200": "198 216 201", // #c6d8c9
		"--color-success-300": "163 192 168", // #a3c0a8
		"--color-success-400": "94 144 103", // #5e9067
		"--color-success-500": "25 97 38", // #196126
		"--color-success-600": "23 87 34", // #175722
		"--color-success-700": "19 73 29", // #13491d
		"--color-success-800": "15 58 23", // #0f3a17
		"--color-success-900": "12 48 19", // #0c3013
		// warning | #7a6d1a 
		"--color-warning-50": "235 233 221", // #ebe9dd
		"--color-warning-100": "228 226 209", // #e4e2d1
		"--color-warning-200": "222 219 198", // #dedbc6
		"--color-warning-300": "202 197 163", // #cac5a3
		"--color-warning-400": "162 153 95", // #a2995f
		"--color-warning-500": "122 109 26", // #7a6d1a
		"--color-warning-600": "110 98 23", // #6e6217
		"--color-warning-700": "92 82 20", // #5c5214
		"--color-warning-800": "73 65 16", // #494110
		"--color-warning-900": "60 53 13", // #3c350d
		// error | #8f0a25 
		"--color-error-50": "238 218 222", // #eedade
		"--color-error-100": "233 206 211", // #e9ced3
		"--color-error-200": "227 194 201", // #e3c2c9
		"--color-error-300": "210 157 168", // #d29da8
		"--color-error-400": "177 84 102", // #b15466
		"--color-error-500": "143 10 37", // #8f0a25
		"--color-error-600": "129 9 33", // #810921
		"--color-error-700": "107 8 28", // #6b081c
		"--color-error-800": "86 6 22", // #560616
		"--color-error-900": "70 5 18", // #460512
		// surface | #2c4a97 
		"--color-surface-50": "223 228 239", // #dfe4ef
		"--color-surface-100": "213 219 234", // #d5dbea
		"--color-surface-200": "202 210 229", // #cad2e5
		"--color-surface-300": "171 183 213", // #abb7d5
		"--color-surface-400": "107 128 182", // #6b80b6
		"--color-surface-500": "44 74 151", // #2c4a97
		"--color-surface-600": "40 67 136", // #284388
		"--color-surface-700": "33 56 113", // #213871
		"--color-surface-800": "26 44 91", // #1a2c5b
		"--color-surface-900": "22 36 74", // #16244a
		
	}
}