import { Url } from 'url';

import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import { IoChevronForward, IoOpenOutline } from 'react-icons/io5';

export type ExperienceCardProps = {
  company: string;
  description: string[];
  end: Dayjs;
  job: string;
  link?: Url;
  start: Dayjs;
};

const DATE_FORMAT = 'MMM D, YYYY';

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, description, start, job, link, end } = props;

  return (
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
        {start.format(DATE_FORMAT)} -{' '}
        {end.isSame(dayjs(), 'date') ? 'Present' : end.format(DATE_FORMAT)} (
        {start.from(end, true)})
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
  );
};

export default ExperienceCard;
