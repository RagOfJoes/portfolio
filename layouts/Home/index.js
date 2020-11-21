import Intro from "./Intro";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import Header from "Components/Header";
import Grid from "@material-ui/core/Grid";
import Container from "Components/Container";

const Index = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid container direction="column">
          <Intro />
          <Experience />
          <Projects />
          <Contact />
        </Grid>
      </Container>
    </>
  );
};

export default Index;
