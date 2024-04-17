import { writable } from 'svelte/store';

export type ColorPalette = {
	0: string;
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
	950: string;
};

type FeatureDevelopmentStatus = 'Stable' | 'Beta' | 'Experimental' | 'Deprecated' | 'Not Supported';

export type FeatureFlag = {
	label: string;
	enabled: boolean;
	description?: string;
	status: FeatureDevelopmentStatus;
};

export type Appearance = {
	font: string;
	colorPalette: ColorPalette;
};

export type HubConfig = {
	name: string;
	logo: string;
	appearance: Appearance;
	featureFlags: FeatureFlag[];
};

export const configuration = writable<HubConfig>({
	name: 'Launchpad Hub',
	logo: 'logo.svg',
	appearance: {
		font: 'Roboto',
		colorPalette: {
			0: '#ffffff',
			50: '#f9f9f9',
			100: '#f2f2f2',
			200: '#e6e6e6',
			300: '#d9d9d9',
			400: '#bfbfbf',
			500: '#a6a6a6',
			600: '#8c8c8c',
			700: '#737373',
			800: '#595959',
			900: '#404040',
			950: '#262626'
		}
	},
	featureFlags: [
		{
			label: 'Recruitment',
			enabled: false,
			description: 'Enable recruitment features',
			status: 'Stable'
		},
		{
			label: 'Access Roles',
			enabled: false,
			description: 'Enable access roles',
			status: 'Beta'
		},
		{
			label: 'Custom Fields',
			enabled: false,
			description: 'Enable custom fields',
			status: 'Experimental'
		},
		{
			label: 'Teams and Projects',
			enabled: false,
			description: 'Enable teams and projects',
			status: 'Stable'
		},
		{
			label: 'Calendar',
			enabled: false,
			description: 'Enable calendar',
			status: 'Beta'
		},
		{
			label: 'Time Tracking',
			enabled: false,
			description: 'Enable time tracking',
			status: 'Beta'
		},
		{
			label: 'Reports',
			enabled: false,
			description: 'Enable reports',
			status: 'Beta'
		},
		{
			label: 'API',
			enabled: false,
			description: 'Enable API',
			status: 'Beta'
		},
		{
			label: 'Webhooks',
			enabled: false,
			description: 'Enable webhooks',
			status: 'Beta'
		},
		{
			label: 'Integrations',
			enabled: false,
			description: 'Enable integrations',
			status: 'Beta'
		},
		{
			label: 'Wiki',
			enabled: false,
			description: 'Enable wiki',
			status: 'Beta'
		}
	]
});
