import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { IoChevronForward, IoOpenOutline } from 'react-icons/io5';

import Section from '@/components/Section';
import { EXPERIENCES } from '@/lib/constants';

const Experience = () => {
  return (
    <Section id="experience" title="EXPERIENCE" caption="Where I've worked">
      <Grid gap="6" mt="10" templateColumns="repeat(2, 1fr)">
        {EXPERIENCES.map((experience) => {
          const { company, description, duration, job, link } = experience;

          const from = duration.from.format('MMM D, YYYY');
          const to = duration.to.isSame(dayjs(), 'day')
            ? 'Present'
            : duration.to.format('MMM D, YYYY');

          return (
            <GridItem
              rowSpan={1}
              key={`${company}__${job}`}
              colSpan={{ base: 2, md: 1 }}
            >
              <Box
                p="4"
                as="article"
                bg="surface"
                boxShadow="lg"
                borderRadius="lg"
                borderLeft="4px solid"
                borderLeftColor="primary"
              >
                <HStack justify="space-between">
                  <Heading size="md">{company}</Heading>
                  {link && (
                    <Link passHref href={link}>
                      <IconButton
                        as="a"
                        isRound
                        size="lg"
                        variant="link"
                        aria-label={`Go to ${job} site`}
                        icon={<Icon strokeWidth="4px" as={IoOpenOutline} />}
                        _active={{ color: 'text.primary' }}
                      />
                    </Link>
                  )}
                </HStack>
                <Text fontSize="sm" color="primary" fontWeight="medium">
                  {job}
                </Text>
                <Text fontSize="sm" color="text.secondary">
                  {from} - {to} ({duration.from.from(duration.to, true)})
                </Text>
                <List mt="4" spacing="2">
                  {description.map((text, index) => (
                    <ListItem
                      display="flex"
                      alignItems="center"
                      key={`${company}__${job}__Desription__${index}`}
                    >
                      <ListIcon color="primary" as={IoChevronForward} />
                      <Text fontSize="sm" fontWeight="semibold">
                        {text}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Experience;
