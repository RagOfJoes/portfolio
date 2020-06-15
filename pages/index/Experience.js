import moment from 'moment';
import Section from 'Components/Section';
import Grid from '@material-ui/core/Grid';
import { experiences } from 'lib/constants';
import OutlinedCards from 'Components/OutlinedCard';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useExperienceStyles = makeStyles(
	({ spacing }) => ({
		section: {
			paddingTop: 64,
			height: '100vh',
		},
		cards: {
			marginTop: spacing(2),
		},
	}),
	{ name: 'ExperienceSection' }
);

export default () => {
	const styles = useExperienceStyles();
	return (
		<Section id="experience" container direction="column" className={styles.section}>
			<Grid item>
				<Typography variant="h6">Experience</Typography>
			</Grid>

			<Grid item container spacing={2} className={styles.cards}>
				{experiences.map((exp) => {
					const {
						job,
						company,
						description,
						duration: { from, to },
					} = exp;

					return (
						<Grid item xs={12} sm={6} md={4} key={job}>
							<OutlinedCards
								subtitle={job}
								title={company}
								description={description}
								caption={`${from.format('MMM D, YYYY')} - ${
									to.isSame(moment(), 'd') ? 'Present' : to.format('MMM D, YYYY')
								} (${from.from(to, true)})`}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Section>
	);
};
