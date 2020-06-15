import { useState } from 'react';
import { routes } from 'lib/constants';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import useHeaderStyles from './Header.style';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default (props) => {
	const styles = useHeaderStyles();
	const [drawerOpen, togggleDrawerOpen] = useState(false);
	const container = typeof window !== undefined ? () => window.document.body : undefined;

	return (
		<>
			<Grid item className={styles.burger}>
				<IconButton color="inherit" onClick={() => togggleDrawerOpen(true)}>
					<MenuIcon color="inherit" />
				</IconButton>
			</Grid>
			<Hidden mdUp implementation="css">
				<Drawer
					anchor="right"
					open={drawerOpen}
					variant="temporary"
					container={container}
					onClose={() => togggleDrawerOpen(false)}
					PaperProps={{
						className: styles.drawer,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Toolbar />
					<List className={styles.list}>
						{routes.map((r) => {
							const { route, Icon, displayName } = r;
							return (
								<ListItem
									button
									href={route}
									component="a"
									key={displayName}
									onClick={() => togggleDrawerOpen(false)}
								>
									<ListItemIcon>{Icon}</ListItemIcon>
									<ListItemText
										primary={displayName}
										primaryTypographyProps={{
											variant: 'subtitle2',
											color: 'textSecondary',
											className: styles.listText,
										}}
									/>
								</ListItem>
							);
						})}
					</List>
				</Drawer>
			</Hidden>
		</>
	);
};
