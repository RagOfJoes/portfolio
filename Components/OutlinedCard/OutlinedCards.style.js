import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles(
	({ shape, spacing, palette }) => ({
		container: ({ color = palette.primary.main }) => ({
			padding: spacing(1, 2),
			borderLeft: `4px solid ${color}`,
			borderRadius: shape.borderRadius * 2,
			backgroundColor: palette.background.paper,
		}),
	}),
	{ name: 'OutlinedCard' }
);
