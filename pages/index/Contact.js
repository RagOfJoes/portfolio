import { socials } from 'lib/constants';
import Section from 'Components/Section';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useSocialStyles = makeStyles(
	({}) => ({
		section: {
			height: 325,
			paddingTop: 128,
			paddingBottom: 64,
		},
	}),
	{ name: 'ContactSection' }
);

export default () => {
	const styles = useSocialStyles();
	return (
		<Section id="contact" container direction="column" className={styles.section}>
			<Grid container justify="center" alignItems="flex-end" style={{ height: '100%' }}>
				<Grid xs={12} item container spacing={2} justify="center" alignItems="flex-end">
					{socials.map((social) => {
						const { Icon, link } = social;

						return (
							<Grid item key={link}>
								<IconButton href={link} component="a" color="inherit" target="_blank" rel="noopener noreferrer">
									{Icon}
								</IconButton>
							</Grid>
						);
					})}
				</Grid>
				<Grid item>
					<Typography variant="subtitle2" color="textSecondary">
						Created by Victor Ragojos
					</Typography>
				</Grid>
			</Grid>
		</Section>
	);
};
