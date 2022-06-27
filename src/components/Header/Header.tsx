import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import { ROUTES } from '@/lib/constants';

const Header = () => {
  return (
    <Box
      w="full"
      top="0px"
      zIndex={1}
      left="0px"
      right="0px"
      as="header"
      bg="background"
      position="sticky"
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.400"
    >
      <Box
        px="6"
        as="nav"
        ms="auto"
        me="auto"
        height="78px"
        maxW="container.xl"
      >
        <Flex w="full" h="full" align="center" justify="space-between">
          <Link passHref href="/">
            <Flex as="a" align="center">
              <Logo w="40px" h="40px" />
              <Flex ml="4" direction="column">
                <Heading
                  size="sm"
                  cursor="pointer"
                  fontWeight="bold"
                  lineHeight="normal"
                  transition="0.12s linear color"
                  _hover={{ color: 'primary' }}
                >
                  Victor Ragojos
                </Heading>
                <Text fontSize="sm" lineHeight="normal" color="text.secondary">
                  Portfolio
                </Text>
              </Flex>
            </Flex>
          </Link>

          <Grid
            gridGap="0"
            templateColumns="repeat(3, 1fr)"
            display={{ base: 'none', md: 'grid' }}
          >
            {ROUTES.map((route) => {
              const { href, Icon: RouteIcon, label } = route;

              return (
                <GridItem
                  key={href}
                  colSpan={1}
                  rowSpan={1}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Link passHref href={href}>
                    <Button
                      as="a"
                      size="lg"
                      variant="link"
                      colorScheme="gray"
                      color="text.secondary"
                      leftIcon={<Icon color="primary" as={RouteIcon} />}
                      _active={{ color: 'text.secondary' }}
                    >
                      <Text fontSize="sm" fontWeight="semibold">
                        {label}
                      </Text>
                    </Button>
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
