import { Grid, GridItem } from '@chakra-ui/react';

import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { PROJECTS } from '@/lib/constants';

const Projects = () => {
  return (
    <Section id="projects" title="PROJECTS" caption="Some of my latest works">
      <Grid gap="6" mt="10" templateColumns="repeat(2, 1fr)">
        {PROJECTS.map((project) => {
          const { image, name, summary, tags, url } = project;

          return (
            <GridItem key={name} rowSpan={1} colSpan={{ base: 2, md: 1 }}>
              <ProjectCard
                image={image}
                name={name}
                summary={summary}
                tags={tags}
                url={url}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Projects;
