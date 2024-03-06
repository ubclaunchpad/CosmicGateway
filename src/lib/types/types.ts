export interface IRoleComponent {
	title: string;
	anchorLink: string;
	image: string;
	description: string;
}

export type Team = {
	id: number;
	label: string;
	image_link: string | undefined;
	description: string;
	create_at: string;
	update_at: string | undefined;
	meta_data: {
		[key: string]: any;
	};
};

export type Announcement = {
	teamid: number;
	id: string;
	title: string;
	contents: {
		body: string;
	};
	created_at: string;
	updated_at: string;
	type: AnnouncementType;
	level: AnnouncementLevel;
};

export const ANNOUNCEMENT_TYPES = {
	ANNOUNCEMENT: 'announcement',
	// DISCUSSION: 'discussion',
	// POST: 'post',
	// POLL: 'poll',
	UPDATE: 'update',
	// QUESTION: 'question',
	EVENT: 'event'
} as const;

export const ANNOUNCEMENT_LEVELS = {
	NORMAL: 'normal',
	PINNED: 'pinned'
} as const;

type ObjectValues<T> = T[keyof T];
export type AnnouncementType = ObjectValues<typeof ANNOUNCEMENT_TYPES>;
export type AnnouncementLevel = ObjectValues<typeof ANNOUNCEMENT_LEVELS>;
