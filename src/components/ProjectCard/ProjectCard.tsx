import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Skeleton,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Link from 'next/link';

export type ProjectCardProps = {
  image: string;
  name: string;
  summary: string;
  tags: string[];
  url?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { image, name, summary, tags, url } = props;

  return (
    <Box
      p="6"
      w="100%"
      as="article"
      bg="surface"
      boxShadow="lg"
      borderRadius="lg"
    >
      <Image
        w="100%"
        h="100%"
        alt={name}
        src={image}
        maxH="320px"
        minH="320px"
        opacity={0.4}
        borderRadius="lg"
        objectFit="cover"
        transition="all 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
        _hover={{ opacity: 1 }}
        fallback={
          <Skeleton
            maxH="320px"
            minH="320px"
            borderRadius="lg"
            endColor="#35353D"
            startColor="#26262e"
          >
            <Box w="100%" h="100%" />
          </Skeleton>
        }
      />

      <Wrap mt="4">
        {tags.map((tag) => (
          <WrapItem key={tag}>
            <Tag size="sm" bg="primary" color="surface" fontWeight="medium">
              {tag}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>

      <Heading mt="4" size="md" fontWeight="bold">
        {name}
      </Heading>

      <Text mt="2" fontSize="small" fontWeight="medium" color="text.secondary">
        {summary}
      </Text>

      {url && (
        <HStack justify="end">
          <Link passHref href={url}>
            <Button as="a" mt="6">
              View Project
            </Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
};

export default ProjectCard;
