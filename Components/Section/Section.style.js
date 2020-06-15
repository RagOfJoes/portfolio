import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(
	({}) => ({
		container: ({ height, fullHeight }) => {
			if (fullHeight) return { height: '100vh' };

			if (height) return { height };

			return {
				minHeight: `calc(100vh - 56px)`,

				'@media (min-width:0px) and (orientation: landscape)': { minHeight: `calc(100vh - 48px)` },
				'@media (min-width:600px)': { minHeight: `calc(100vh - 64px)` },
			};
		},
	}),
	{ name: 'section' }
);
