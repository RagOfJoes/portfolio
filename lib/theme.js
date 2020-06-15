import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

// Create a theme instance.
const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: {
				light: '#53B182',
				main: '#68DD89',
				dark: '#3C8778',
			},
			background: {
				paper: '#192F44',
				default: '#0C1A29',
			},
			text: {
				primary: '#fff',
				secondary: '#8892b0',
			},
		},
	})
);

export default theme;
