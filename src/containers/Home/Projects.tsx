import { Grid, GridItem } from '@chakra-ui/react';

import Section from '@/components/Section';

const Projects = () => {
  return (
    <Section id="projects" title="PROJECTS" caption="Some of my latest works">
      <Grid gap="6" mt="10" templateColumns="repeat(2, 1fr)">
        <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }}></GridItem>
      </Grid>
    </Section>
  );
};

export default Projects;
