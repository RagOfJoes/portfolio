import { fade } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(
	({ shape, spacing, shadows, palette, typography, transitions, breakpoints }) => ({
		container: ({ direction }) => ({
			height: '100%',
			display: 'flex',
			overflow: 'hidden',
			borderRadius: shape.borderRadius * 2,
			transition: transitions.create('all'),
			flexDirection: direction === 'left' ? 'row' : 'row-reverse',

			[breakpoints.down('sm')]: {
				flexDirection: 'column',
			},

			[breakpoints.down('xs')]: {
				padding: spacing(1),
			},
		}),
		imageContainer: {
			width: '100%',
			height: '100%',
			minHeight: 320,
			display: 'flex',
			position: 'relative',
			borderRadius: shape.borderRadius * 2,

			[breakpoints.down('xs')]: {
				height: 240,
			},
		},
		image: {
			opacity: 0.8,
			width: '100%',
			height: '100%',
			borderRadius: shape.borderRadius * 2,
			transition: transitions.create('all', { duration: 400 }),

			'&:before': {
				content: '""',
				width: '100%',
				height: '100%',
				display: 'block',
				position: 'absolute',
				mixBlendMode: 'screen',
				borderRadius: shape.borderRadius * 2,
				backgroundColor: fade(palette.primary.main, 0.3),
				transition: transitions.create('all', { duration: 400 }),

				[breakpoints.down('sm')]: {
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
					borderTopLeftRadius: shape.borderRadius * 2,
					borderTopRightRadius: shape.borderRadius * 2,
				},
			},

			'&:hover:before, &:hover': {
				opacity: 1,
				backgroundColor: 'transparent',
			},

			[breakpoints.down('sm')]: {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				borderTopLeftRadius: shape.borderRadius * 2,
				borderTopRightRadius: shape.borderRadius * 2,
			},
		},
		info: ({ direction }) => ({
			margin: 'auto',
			overflow: 'hidden',
			padding: spacing(2),
			boxShadow: shadows[3],
			backgroundColor: palette.background.paper,
			...(direction === 'left'
				? { borderTopRightRadius: shape.borderRadius * 2, borderBottomRightRadius: shape.borderRadius * 2 }
				: { borderTopLeftRadius: shape.borderRadius * 2, borderBottomLeftRadius: shape.borderRadius * 2 }),

			[breakpoints.down('sm')]: {
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				borderBottomLeftRadius: shape.borderRadius * 2,
				borderBottomRightRadius: shape.borderRadius * 2,
			},

			[breakpoints.down('xs')]: {
				// padding: spacing(1),
			},
		}),
		title: {
			fontWeight: typography.fontWeightBold,
		},
	}),
	{ name: 'MediaCard' }
);
