const INSTAGRAM_LINK = 'https://www.instagram.com/ubclaunchpad';
const FACEBOOK_LINK = 'https://www.facebook.com/ubclaunchpad';
const LINKEDIN_LINK = 'https://www.linkedin.com/company/10054664';
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCS0ghlwqTOc1RH_nYENNT5A';
const MEDIUM_LINK = 'https://medium.com/ubc-launch-pad-software-engineering-blog';
const GITHUB_LINK = 'https://github.com/ubclaunchpad';
const DISCORD_LINK = 'https://discord.gg/yzkTs6hbYd';
const SLACK_LINK = 'https://ubclaunchpad.slack.com';
const STRATEGY_EMAIL = 'mailto:strategy@ubclaunchpad.com';
const DEV_EMAIL = 'dev@ubclaunchpad.com';
const TEAM_EMAIL = 'mailto:team@ubclaunchpad.com';
const DOCS_LINK = 'https://docs.ubclaunchpad.com';
const CLUB_FIGMA_LINK = 'https://www.figma.com/file/1Q6Z2Z3Z6Z6Z3Z6Z3Z6Z3Z6Z/Club-Design-System';
const DEVELOPER_ROLE_LINK = `${DOCS_LINK}/recruitment/developer`;
const DESIGNER_ROLE_LINK = `${DOCS_LINK}/recruitment/designer`;
const STRATEGY_ROLE_LINK = `${DOCS_LINK}/recruitment/strategy`;
const TECH_LEAD_ROLE_LINK = `${DOCS_LINK}/recruitment/tech-lead`;
const DESIGN_LEAD_ROLE_LINK = `${DOCS_LINK}/recruitment/design-lead`;
const CO_PRESIDENT_ROLE_LINK = `${DOCS_LINK}/recruitment/co-president`;
const WEBSITE_LINK = 'https://www.ubclaunchpad.com';

export const quickLinks: { href: string; domain: string; label: string }[] = [
	{ href: GITHUB_LINK, domain: 'github', label: 'GitHub' },
	{ href: CLUB_FIGMA_LINK, domain: 'figma', label: 'Club Figma' },
	{ href: DISCORD_LINK, domain: 'discord', label: 'Discord' },
	{ href: INSTAGRAM_LINK, domain: 'instagram', label: 'Instagram' },
	{ href: FACEBOOK_LINK, domain: 'facebook', label: 'Facebook' },
	{ href: LINKEDIN_LINK, domain: 'linkedin', label: 'LinkedIn' },
	{ href: WEBSITE_LINK, domain: 'website', label: 'Club Page' },
	{ href: MEDIUM_LINK, domain: 'medium', label: 'Medium' }
];

export {
	CLUB_FIGMA_LINK,
	CO_PRESIDENT_ROLE_LINK,
	DESIGNER_ROLE_LINK,
	DESIGN_LEAD_ROLE_LINK,
	DEVELOPER_ROLE_LINK,
	DEV_EMAIL,
	DISCORD_LINK,
	DOCS_LINK,
	FACEBOOK_LINK,
	GITHUB_LINK,
	INSTAGRAM_LINK,
	LINKEDIN_LINK,
	MEDIUM_LINK,
	SLACK_LINK,
	STRATEGY_EMAIL,
	STRATEGY_ROLE_LINK,
	TEAM_EMAIL,
	TECH_LEAD_ROLE_LINK,
	WEBSITE_LINK,
	YOUTUBE_LINK
};
