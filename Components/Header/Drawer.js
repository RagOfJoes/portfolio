import { useState } from "react";
import { routes, socials } from "lib/constants";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import useHeaderStyles from "./Header.style";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const SideDrawer = (props) => {
  const styles = useHeaderStyles();
  const [drawerOpen, togggleDrawerOpen] = useState(false);
  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <Grid item className={styles.burger}>
        <IconButton
          color="inherit"
          aria-label="nav-menu-icon"
          onClick={() => togggleDrawerOpen(true)}
        >
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
          BackdropProps={{
            invisible: true,
          }}
          PaperProps={{
            className: styles.drawer,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Typography variant="h6" className={styles.title}>
            Menu
          </Typography>

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
                  aria-label={`${displayName.toLowerCase()}=nav-link`}
                >
                  <ListItemIcon>{Icon}</ListItemIcon>
                  <ListItemText
                    primary={displayName}
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "textSecondary",
                      className: styles.listText,
                    }}
                  />
                </ListItem>
              );
            })}
          </List>

          <Grid
            container
            spacing={2}
            justify="center"
            style={{
              width: "100%",
              overflow: "hidden",
              marginTop: "auto",
              padding: "48px 8px",
            }}
          >
            <Grid
              xs={12}
              item
              container
              spacing={2}
              justify="center"
              alignItems="center"
            >
              {socials.map((social) => {
                const { Icon, link, name } = social;

                return (
                  <Grid item key={link}>
                    <IconButton
                      href={link}
                      component="a"
                      color="inherit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name.toLowerCase()}=nav-link`}
                    >
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
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideDrawer;
