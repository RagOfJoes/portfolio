import moment from 'moment';
import WorkIcon from '@material-ui/icons/Work';
import ListIcon from '@material-ui/icons/List';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import ContactsIcon from '@material-ui/icons/Contacts';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
export const routes = [
	{
		route: '/#experience',
		displayName: 'Experience',
		Icon: <WorkIcon color="primary" style={{ display: 'inline-flex' }} />,
	},
	{
		route: '/#projects',
		displayName: 'Projects',
		Icon: <ListIcon color="primary" style={{ display: 'inline-flex' }} />,
	},
	{
		route: '/#contact',
		displayName: 'Contact',
		Icon: <ContactsIcon color="primary" style={{ display: 'inline-flex' }} />,
	},
];

export const experiences = [
	{
		company: 'Offset Partners',
		job: 'Junior Software Developer',
		duration: { from: moment('07/07/2019', 'MM/DD/YYYY'), to: moment() },
		description: [
			'Work with a team of developers and designers to build beautiful websites that help clients solidify their identity.',
			'Manage and optimize the e-commerce platform to allow the best experience possible for clients.',
			'Integrate modern libraries and frameworks, such as React, to current framework.',
		],
	},
	{
		company: 'NVC',
		job: 'Computer Science Tutor',
		duration: { from: moment('08/01/2018', 'MM/DD/YYYY'), to: moment('05/21/2019', 'MM/DD/YYYY') },
		description: [
			'Assisted classmates with various studying techniques for exams, projects, and/or assignments.',
			'Presented different ways to visualize, understand, and enjoy complex programming topics.',
			'Collaborated with professors to address teaching and assignment issues.',
		],
	},
];

export const featuredProjects = [
	{
		name: 'Spoonfed',
		link: 'https://spoonfed.dev',
		image: '/images/Spoonfed-Preview.png',
		stack: 'GraphQL, NextJS, Redis, Azure, OAuth2(w/ OIDC)',
		description: [
			'CRUD application built with contemporary tools.',
			'Create or import recipes that are shared with other users.',
			'Make "Creations" which are byproducts of the recipes from the website.',
			'Auth Server is isolated from this specific app to be utilized for future side projects as well as to allow for upgrades to be done seperately(less headache).',
			'Powered by a GraphQL Backend Server.',
		],
	},
	{
		name: 'OAuth2 w/ OIDC',
		image: '/images/UserAuth-Preview.png',
		link: 'https://spoonfed.dev/api/login',
		stack: 'NodeJS, Material Design, OAuth2 Protocol, OIDC Protocol, node-oidc-provider Library',
		description: [
			'Handles authentication/authorization for future and current side projects.',
			'Uses OAuth 2 and OIDC protocol.',
			'Redis is used as a distributed cache to prevent stale token data across future side projects as well as to offload recurring token introspection requests.',
			'(WIP) Profile and Session management to allow users to change passwords, logout of any active sessions, etc.',
		],
	},
	{
		name: 'Chat',
		link: 'https://ragofjoes-v1.herokuapp.com/chat',
		image: '/images/Chat-Preview.png',
		stack: 'NodeJS, React, Redux, Socket.io',
		description: [
			'Real time CRUD application.',
			'1 on 1 private messages with Socket.io\'s "room" feature.',
			'Redux handles all the state management on the front-end side.',
			"NodeJS(express) with it's asynchronous features powers the backend.",
			'Basic JWT Authentication handles user authentication for all my "archived" projects.',
		],
	},
	{
		name: 'Covid-19 Tracker',
		image: '/images/Covid19Tracker-Preview.png',
		link: 'https://covid19-tracker.ragofjoes.now.sh/',
		stack: 'NextJS, recharts, Bing News API, Open Covid stats API',
		description: [
			'Digestible statistics on the impact of Covid-19.',
			'Country specific numbers on cases, recovered, and deaths.',
			'Visualized timeline, tabular and graphed.',
			"Relevant and useful articles from Bing's News API.",
			<Typography color="textPrimary" variant="subtitle2">
				- Powered by{' '}
				<Typography component="a" color="primary" variant="subtitle2" href="https://explore.postman.com/4DTEzqFagDUe7F">
					Open Covid stats API.
				</Typography>
			</Typography>,
		],
	},
];

export const archivedProjects = [
	{
		name: 'Mood Calendar',
		stack: 'React, Redux, NodeJS',
		link: 'https://ragofjoes-v1.herokuapp.com/moodcalendar',
		description: ['CRUD Application.', 'SPA(Single Page Application).', 'Redux thunk handles all asynchronous actions.'],
	},
	{
		name: 'JWT Auth',
		stack: 'React, Redux, NodeJS, PassportJS',
		link: 'https://ragofjoes-v1.herokuapp.com/userauth',
		description: ['Basic JWT Authentication.', 'Allows for refresh tokens.', 'Uses Passport to handle auth flow.'],
	},
	{
		name: 'Twomey Interactive Map',
		stack: 'React, Mapbox',
		link: 'https://twomey.com/vineyards/',
		description: ["Worked with a team of designers to achieve client's request.", "Powered by Uber's React Mapbox Library."],
	},
	{
		name: 'Portfolio Website v1',
		stack: 'React',
		link: 'https://ragofjoes-v1.herokuapp.com/',
		description: ['First iteration of my Portfolio Website.'],
	},
];

export const socials = [
	{ Icon: <GitHubIcon titleAccess="Github" />, link: 'https://github.com/RagOfJoes' },
	{ Icon: <LinkedInIcon titleAccess="LinkedIn" />, link: 'https://www.linkedin.com/in/ragofjoes/' },
	{ Icon: <DescriptionIcon titleAccess="Resume" />, link: '/Resume.pdf' },
];
