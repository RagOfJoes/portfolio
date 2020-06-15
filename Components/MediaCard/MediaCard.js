import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useMediaCardStyles from './MediaCard.style';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CallMadeIcon from '@material-ui/icons/CallMade';

const Index = ({ image, title, link, subtitle, description, direction = 'left' }) => {
	const styles = useMediaCardStyles({ direction });

	return (
		<Box width="100%" className={styles.container}>
			<Grid item xs={12} md={8} className={styles.imageContainer}>
				<CardMedia image={image} alt={title} title={title} className={styles.image} />
			</Grid>
			<Grid item xs={12} md={4} container direction="column" className={styles.info}>
				<Grid item container alignItems="center" justify="space-between">
					<Grid item>
						<Typography variant="h5">{title}</Typography>
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
								<CallMadeIcon color="primary" fontSize="small" />
							</IconButton>
						</Grid>
					)}
				</Grid>

				{subtitle && (
					<Grid item>
						<Typography color="textSecondary" gutterBottom variant="subtitle2">
							{subtitle}
						</Typography>
					</Grid>
				)}

				{description &&
					description.map((v, i) => {
						const isString = typeof v === 'string';
						const isElement = typeof v === 'object';
						return (
							<Grid item key={`${v}-${i}`}>
								{isString && (
									<Typography color="textPrimary" variant="subtitle2">
										- {v}
									</Typography>
								)}

								{isElement && v}
							</Grid>
						);
					})}
			</Grid>
		</Box>
	);
};

Index.propTypes = {
	link: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	direction: PropTypes.oneOf(['left', 'right']),
	description: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
};

export default Index;
