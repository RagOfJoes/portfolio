import { Box, BoxProps, Flex, Heading } from '@chakra-ui/react';

export type SectionProps = Omit<BoxProps, 'id'> & {
  id: string;
  title: string;
  caption: string;
};

const Section = (props: SectionProps) => {
  const { id, title, caption, children, ...other } = props;

  return (
    // Padding is from Header height + 60px
    <Box w="100%" h="100vh" pt="139px" as="section" {...other} id={id}>
      <Flex direction="column" align="center">
        <Heading
          fontSize="sm"
          fontWeight="semibold"
          letterSpacing="wider"
          color="text.secondary"
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Heading mt="4" size="xl" fontWeight="semibold">
          {caption}
        </Heading>
      </Flex>

      {children}
    </Box>
  );
};

export default Section;
