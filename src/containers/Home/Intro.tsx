import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';

import { INTRO_STATS } from '@/lib/constants';

const Intro = () => {
  return (
    <Box
      w="100%"
      as="section"
      display="flex"
      maxW="container.xl"
      alignItems="center"
      position="relative"
      // Subtracts Header height
      h="calc(100vh - 79px)"
    >
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem
          rowSpan={1}
          display="flex"
          alignItems="center"
          colSpan={{ base: 3, md: 2 }}
        >
          <Box>
            <Heading size="md" fontWeight="medium" color="text.secondary">
              Victor Ragojos, Software Engineer
            </Heading>
            <Heading mt="2" size="lg">
              I&apos;m a software engineer that specializes in building fun and
              useful applications. I&apos;m currently focusing on building and
              maintaining products at{' '}
              <Heading
                as="a"
                size="lg"
                color="primary"
                rel="noreferrer"
                href="https://offsetpartners.com/"
              >
                Offset Partners.
              </Heading>
            </Heading>
            <Link passHref href="/Resume.pdf">
              <Button
                as="a"
                px="6"
                py="5"
                mt="8"
                w="auto"
                target="_blank"
                color="primary"
                borderRadius="lg"
                variant="outline"
                borderColor="primary"
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
              >
                Resume
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={1}
          display="flex"
          mt={{ base: '8', md: '0' }}
          colSpan={{ base: 3, md: 1 }}
          alignItems={{ base: 'center', md: 'end' }}
          flexDirection={{ base: 'row', md: 'column' }}
          justifyContent={{ base: 'space-between', md: 'center' }}
        >
          {INTRO_STATS.map((stat, index) => {
            const { text, title } = stat;

            return (
              <Flex
                w="100%"
                key={text}
                maxW="140px"
                direction="column"
                mt={index > 0 ? { base: '0', md: '6' } : {}}
              >
                <Heading size="lg">{title}</Heading>
                <Text fontSize="md" fontWeight="medium" color="text.secondary">
                  {text}
                </Text>
              </Flex>
            );
          })}
        </GridItem>
      </Grid>

      <Link href="/#experience">
        <IconButton
          as="a"
          isRound
          size="lg"
          left="50%"
          bottom="6"
          variant="ghost"
          cursor="pointer"
          position="absolute"
          transform="translateX(-50%)"
          icon={<Icon as={IoChevronDown} />}
          aria-label="Go to experience section"
        />
      </Link>
    </Box>
  );
};

export default Intro;