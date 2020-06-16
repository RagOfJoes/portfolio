import Section from 'Components/Section';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const useIntroStyles = makeStyles(
	({ palette, breakpoints }) => ({
		intro: {
			color: palette.grey[500],
		},
		image: {
			opacity: 0.7,
			[breakpoints.down('xs')]: {
				display: 'none',
			},
		},
		scroll: {
			bottom: 15,
			left: '50%',
			position: 'absolute',
			color: palette.text.primary,
			transform: 'translateX(-50%)',
		},
	}),
	{ name: 'IntroSection' }
);

export default () => {
	const styles = useIntroStyles();
	return (
		<Section id="intro" container spacing={2} fullHeight={false}>
			<Grid xs={12} sm={6} item container spacing={1} direction="column" justify="center">
				<Grid item>
					<Typography variant="subtitle1" className={styles.intro}>
						Hello, my name is
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant="h5">Victor Ragojos</Typography>
				</Grid>

				<Grid item>
					<Typography variant="h5" color="primary">
						I'm a boring person who codes interesting things.
					</Typography>
				</Grid>

				<Grid item>
					<Typography paragraph variant="body1" color="primary" style={{ opacity: 0.6 }}>
						I'm a software engineer that's based in the West Coast and I create applications with contemporary tools
						and methodologies.
					</Typography>
				</Grid>

				<Grid item>
					<Button
						component="a"
						color="primary"
						target="_blank"
						href="/Resume.pdf"
						variant="outlined"
						rel="noopener noreferrer"
					>
						Resume
					</Button>
				</Grid>
			</Grid>

			<Grid xs={12} sm={6} item container alignItems="center" className={styles.image}>
				<CardMedia alt="Hero" title="Hero" component="img" image="/images/Hero.svg" />
			</Grid>

			<IconButton href="#experience" className={styles.scroll}>
				<ExpandMoreRoundedIcon color="inherit" fontSize="large" />
			</IconButton>
		</Section>
	);
};
