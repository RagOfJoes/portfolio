import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import useSectionStyles from './Section.style';

const Section = ({ id, height, fullHeight = true, children, ...props }) => {
	const styles = useSectionStyles({ height, fullHeight });
	return (
		<Grid id={id} container component="section" className={styles.container} {...props}>
			{children}
		</Grid>
	);
};

Section.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

	fullHeight: PropTypes.bool,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
	...Grid.propTypes,
};

export default Section;
