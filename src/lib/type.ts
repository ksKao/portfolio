export type Content = {
	about: string;
	aboutThumbnailUrl: string;
	contactThumbnailUrl: string;
	email: string;
	errorThumbnailUrl: string;
	footer: string;
	githubUrl: string;
	homeThumbnailUrl: string;
	linkedInUrl: string;
	location: string;
	notFoundThumbnailUrl: string;
	phone: string;
	projects: {
		description: string;
		githubUrl: string;
		logoUrl: string;
		name: string;
		projectUrl: string;
		technologies: string[];
		thumbnailUrl: string;
	}[];
	resumeUrl: string;
	skills: {
		imageUrl: string;
		name: string;
	}[];
	subtitle: string;
	title1: string;
	title2: string;
};
