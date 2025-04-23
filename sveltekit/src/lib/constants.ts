export const THRIVING_INDIVIDUALS_NIP = '5214062107';
export const THRIVING_INDIVIDUALS_REGON = '52812300100000';
export const THRIVING_INDIVIDUALS_IBAN = 'PL 50 2530 0008 2060 1081 4632 0001';

export const Routes = {
	API_CONTACT: '/api/contact',
	CONTACT: '/contact',
	FRAMEWORK: '/framework',
	HOME: '/',
	JOIN: '/join',
	PARTNERSHIPS: '/partnerships',
	PROJECTS: '/projects',
	PROJECTS_DEEP_TALKS: '/projects/deep-talks',
	PROJECTS_JOINT: '/projects/joint',
	PROJECTS_SELF_IMPROVEMENT_MEETUP: '/projects/self-improvement-meetup',
	STATUTE: '/statute',
	SUBSCRIBE: '/subscribe',
	SUPPORT: '/support',
	TEAM: '/team',
	TERMS_AND_CONDITIONS: '/terms-and-conditions',
};

export const NO_SEPARATOR_ROUTES = [Routes.HOME, Routes.STATUTE];

export const PROJECTS = [
	{
		text: 'Self-Improvement Meetup',
		href: Routes.PROJECTS_SELF_IMPROVEMENT_MEETUP,
	},
	{
		text: 'Deep Talks',
		href: Routes.PROJECTS_DEEP_TALKS,
	},
	{
		text: 'Joint projects',
		href: Routes.PROJECTS_JOINT,
	},
];
