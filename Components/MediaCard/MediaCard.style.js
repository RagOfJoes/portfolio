import { fade } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(
	({ shape, spacing, palette, transitions, breakpoints }) => ({
		container: ({ direction }) => ({
			height: '100%',
			display: 'flex',
			overflow: 'hidden',
			padding: spacing(2),
			borderRadius: shape.borderRadius * 2,
			transition: transitions.create('all'),
			flexDirection: direction === 'left' ? 'row' : 'row-reverse',
			// backgroundColor: palette.background.paper,
			border: `2px solid ${fade(palette.primary.main, 0.1)}`,

			'&:hover': {
				border: `2px solid ${fade(palette.primary.main, 0.6)}`,
			},

			[breakpoints.down('sm')]: {
				flexDirection: 'column',
			},

			[breakpoints.down('xs')]: {
				padding: spacing(1),
			},
		}),
		imageContainer: {
			height: 320,
			width: '100%',
			display: 'flex',
			position: 'relative',
			borderRadius: shape.borderRadius * 2,

			[breakpoints.down('xs')]: {
				height: 240,
			},
		},
		image: {
			width: '100%',
			height: '100%',
			borderRadius: shape.borderRadius * 2,

			'&:before': {
				content: '""',
				width: '100%',
				height: '100%',
				display: 'block',
				borderRadius: '3px',
				position: 'absolute',
				mixBlendMode: 'color',
				backgroundColor: fade(palette.background.paper, 0.8),
				transition: transitions.create('all', { duration: 400 }),
			},

			'&:hover:before': {
				backgroundColor: 'transparent',
			},
		},
		info: {
			padding: spacing(1, 2),

			[breakpoints.down('xs')]: {
				padding: spacing(1),
			},
		},
	}),
	{ name: 'MediaCard' }
);
