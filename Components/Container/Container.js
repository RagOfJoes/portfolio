import { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const Index = memo(({ children }) => {
	return <Container maxWidth="lg">{children}</Container>;
});

Index.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Index;
