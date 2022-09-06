import { Url } from 'url';

import { Grid, GridItem } from '@chakra-ui/react';

import ExperienceCard from '@/components/ExperienceCard';
import Section from '@/components/Section';
import Analytics from '@/lib/analytics';
import { EXPERIENCES } from '@/lib/constants';

const Experience = () => {
  return (
    <Section id="experience" title="EXPERIENCE" caption="Where I've worked">
      <Grid gap="6" mt="10" autoRows="auto" templateColumns="repeat(2, 1fr)">
        {EXPERIENCES.map((experience) => {
          const { company, description, end, job, link, start } = experience;

          return (
            <GridItem
              rowSpan={1}
              key={`${company}__${job}`}
              colSpan={{ base: 2, md: 1 }}
            >
              <ExperienceCard
                job={job}
                end={end}
                start={start}
                company={company}
                description={description}
                onView={() => Analytics.viewExperience(company)}
                link={link ? ({ pathname: link } as Url) : undefined}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Experience;
