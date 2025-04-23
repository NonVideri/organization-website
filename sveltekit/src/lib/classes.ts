import type { ParagraphType } from './types';

export const PARAGRAPH_SIZE_CLASSES: Record<ParagraphType, string> = {
	small: 'text-2xs sm:text-xs md:text-sm xl:text-base 2xl:text-lg',
	normal: 'text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl',
	large: 'text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl',
	xl: 'text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl',
	'2xl': 'text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl',
};

export const SECTION_CLASSES = 'flex flex-col sm:items-center w-full';

export const NAVBAR_LINK_CLASSES =
	'block py-3 lg:py-4 xl:py-5 text-center text-black bg-surface-300 hover:bg-surface-200 transition-all duration-200';

export const FORM_CLASSES = 'flex flex-col space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8';

export const INPUT_CLASSES = "px-6 py-4 text-lg text-black bg-white border-none rounded-md outline-hidden focus:shadow-2xl"