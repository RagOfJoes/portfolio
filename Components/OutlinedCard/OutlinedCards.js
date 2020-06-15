import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import useOutlineCardsStyles from './OutlinedCards.style';

const OutlineCards = ({ color, title, link, subtitle, caption, description }) => {
	const styles = useOutlineCardsStyles({ color });
	return (
		<Box width="100%" className={styles.container}>
			<Grid container justify="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h6">{title}</Typography>
				</Grid>

				{link && (
					<Grid item>
						<IconButton
							href={link}
							component="a"
							color="inherit"
							target="_blank"
							disableFocusRipple
							rel="noopener noreferrer"
						>
							<CallMadeIcon fontSize="small" />
						</IconButton>
					</Grid>
				)}
			</Grid>

			{subtitle && (
				<Grid item>
					<Typography color="primary" gutterBottom variant="subtitle2">
						{subtitle}
					</Typography>
				</Grid>
			)}

			{caption && (
				<Grid item>
					<Typography variant="body2" gutterBottom color="textSecondary">
						{caption}
					</Typography>
				</Grid>
			)}

			{description &&
				description.map((v, i) => {
					return (
						<Grid item key={`${v}-${i}`}>
							<Typography variant="body2">- {v}</Typography>
						</Grid>
					);
				})}
		</Box>
	);
};

OutlineCards.propTypes = {
	link: PropTypes.string,
	color: PropTypes.string,
	caption: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string),
};

export default OutlineCards;
