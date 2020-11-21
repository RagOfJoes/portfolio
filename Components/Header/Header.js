import Link from "next/link";
import Drawer from "./Drawer";
import { routes } from "lib/constants";
import { HideOnScroll } from "./helpers";
import Grid from "@material-ui/core/Grid";
import useHeaderStyles from "./Header.style";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  const styles = useHeaderStyles();

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={0}
        position="sticky"
        color="transparent"
        className={styles.container}
      >
        <Toolbar component="nav" className={styles.wrapper}>
          <Grid
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Grid item container spacing={2} alignItems="center">
              <Grid item href="/" component="a">
                <img
                  alt="Logo"
                  title="Logo"
                  src="/images/icon-512.png"
                  style={{ width: 24, height: 24, borderRadius: 4 }}
                />
              </Grid>
              <Hidden smDown implementation="css">
                <Grid item>
                  <Typography
                    href="/"
                    color="textPrimary"
                    variant="body1"
                    component="a"
                    className={styles.name}
                  >
                    Victor Ragojos
                  </Typography>
                </Grid>
              </Hidden>
            </Grid>

            <Hidden xsDown implementation="css">
              <Grid
                item
                container
                spacing={4}
                wrap="nowrap"
                justify="flex-end"
                alignItems="center"
              >
                {routes.map((r) => {
                  const { route, Icon, displayName } = r;

                  return (
                    <Grid item key={displayName}>
                      <Link shallow replace scroll={false} href={route}>
                        <Button
                          variant="text"
                          startIcon={Icon}
                          classes={{ label: styles.listText }}
                          aria-label={`${displayName.toLowerCase()}=nav-link`}
                        >
                          <Typography
                            variant="subtitle2"
                            style={{ display: "inline-flex" }}
                          >
                            {displayName}
                          </Typography>
                        </Button>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </Hidden>

            <Drawer />
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
