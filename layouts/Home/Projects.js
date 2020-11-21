import Section from "Components/Section";
import Grid from "@material-ui/core/Grid";
import MediaCard from "Components/MediaCard";
import Toolbar from "@material-ui/core/Toolbar";
import OutlinedCard from "Components/OutlinedCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { featuredProjects, archivedProjects } from "lib/constants";

const useProjectStyles = makeStyles(
  ({ spacing }) => ({
    section: {
      paddingTop: 64,
      height: "100%",
    },
    cards: {
      marginTop: spacing(1),
    },
    archived: {
      marginTop: spacing(1),
    },
  }),
  { name: "ProjectsSection" }
);

const Projects = () => {
  const styles = useProjectStyles();
  return (
    <Section
      container
      id="projects"
      wrap="nowrap"
      direction="column"
      className={styles.section}
    >
      <Grid item>
        <Typography variant="h5">Notable Projects</Typography>
      </Grid>

      <Grid item container spacing={2} className={styles.cards}>
        {/* <Grid item container spacing={4} className={styles.cardsWrapper}> */}
        {featuredProjects.map((project, i) => {
          const { name, link, image, stack, description } = project;

          return (
            <Grid item xs={12} md={6} key={name}>
              <MediaCard
                link={link}
                title={name}
                image={image}
                subtitle={stack}
                description={description}
              />
            </Grid>
          );
        })}
        {/* </Grid> */}
      </Grid>

      <Toolbar />

      <Grid item>
        <Typography variant="h6">Archived Projects</Typography>
      </Grid>

      <Grid item container spacing={2} className={styles.archived}>
        {archivedProjects.map((project, i) => {
          const { name, link, stack, description } = project;

          return (
            <Grid item md={6} xs={12} key={name}>
              <OutlinedCard
                link={link}
                title={name}
                caption={stack}
                description={description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Projects;
