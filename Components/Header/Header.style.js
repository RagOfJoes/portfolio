import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(
	({ shape, palette, transitions, typography, breakpoints }) => ({
		container: {
			backgroundColor: palette.background.default,
		},
		wrapper: {
			width: '100%',
			margin: 'auto',
			maxWidth: 1280,
		},
		name: {
			cursor: 'pointer',
			textDecoration: 'none',
			color: palette.text.primary,
			fontSize: typography.pxToRem(18),
			fontWeight: typography.fontWeightMedium,
			transition: transitions.create('color'),

			'&:hover': {
				color: palette.primary.main,
			},
		},
		burger: {
			color: palette.text.primary,
			[breakpoints.up('sm')]: {
				display: 'none',
			},
		},
		drawer: {
			width: 240,
			borderTopLeftRadius: shape.borderRadius * 3,
			borderBottomLeftRadius: shape.borderRadius * 3,
		},
		list: {
			height: '100%',
		},
		listText: {
			opacity: .8,
			textTransform: 'capitalize',
			color: palette.text.secondary,
			fontWeight: typography.fontWeightMedium,
			transition: transitions.create('color'),

			'&:hover': {
				opacity: 1,
				color: palette.text.primary,
			},
		},
	}),
	{ index: 20, name: 'Header' }
);
