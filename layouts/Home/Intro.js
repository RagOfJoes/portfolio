import Section from "Components/Section";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { siteDescription } from "lib/constants";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const useIntroStyles = makeStyles(
  ({ palette, transitions, breakpoints }) => ({
    intro: {
      color: palette.grey[500],
    },
    image: {
      opacity: 0.7,
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    scroll: {
      bottom: 15,
      left: "50%",
      position: "absolute",
      color: palette.text.primary,
      transform: "translateX(-50%)",
      transition: transitions.create("all"),

      "&:hover": {
        transform: "translateX(-50%) translateY(5px)",
      },
    },
  }),
  { name: "IntroSection" }
);

const Intro = () => {
  const styles = useIntroStyles();
  return (
    <Section id="intro" container spacing={2} fullHeight={false}>
      <Grid
        item
        sm={6}
        xs={12}
        container
        spacing={1}
        direction="column"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="subtitle1" className={styles.intro}>
            Hello, my name is
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5">Victor Ragojos</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" color="primary">
            {siteDescription}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            paragraph
            variant="body1"
            color="primary"
            style={{ opacity: 0.78 }}
          >
            I am a software engineer that's based in the West Coast and I create
            applications with contemporary tools and methodologies.
          </Typography>
        </Grid>

        <Grid item>
          <Button
            component="a"
            color="primary"
            target="_blank"
            href="/Resume.pdf"
            variant="outlined"
            rel="noopener noreferrer"
            arial-label="resume-button-link"
          >
            Resume
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        sm={6}
        xs={12}
        container
        alignItems="center"
        className={styles.image}
      >
        <CardMedia
          alt="Hero"
          title="Hero"
          component="img"
          image="/images/Hero.svg"
        />
      </Grid>

      <IconButton
        href="#experience"
        className={styles.scroll}
        arial-label="experience-section-link"
      >
        <ExpandMoreRoundedIcon color="inherit" fontSize="large" />
      </IconButton>
    </Section>
  );
};

export default Intro;
