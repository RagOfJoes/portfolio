import { useEffect } from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoClose, IoMenu } from 'react-icons/io5';

import Logo from '@/components/Logo';
import { CONTACTS, ROUTES } from '@/lib/constants';

const bodyVariants: Variants = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  initial: {
    opacity: 0,
  },
};

const listVariants: Variants = {
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.01,
    },
  },
  initial: {
    opacity: 0,
  },
};

const listItemVariants: Variants = {
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 30,
    opacity: 0,
  },
  initial: {
    y: 30,
    opacity: 0,
  },
};

const Drawer = () => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isVisible = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (!isVisible) {
      onClose();
    }
  }, [isVisible, onClose]);

  const boxShadow = '0px 7px 11px rgba(0, 0, 0, 0.04)';
  const buttonHoverBg = useColorModeValue('gray.200', 'whiteAlpha.50');

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        onClick={() => onOpen()}
        icon={<Icon as={IoMenu} />}
        display={isVisible ? 'inline-flex' : 'none'}
      />

      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="none"
        preserveScrollBarGap
      >
        <ModalContent bg="background" transition="none">
          <Box
            px="6"
            w="100%"
            h="79px"
            display="flex"
            alignItems="center"
            borderBottom="1px solid"
            justifyContent="space-between"
            borderBottomColor="whiteAlpha.400"
          >
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
                  <Text
                    fontSize="sm"
                    lineHeight="normal"
                    color="text.secondary"
                  >
                    Portfolio
                  </Text>
                </Flex>
              </Flex>
            </Link>

            <IconButton
              aria-label="Close Menu"
              onClick={() => onClose()}
              icon={<Icon as={IoClose} />}
            />
          </Box>

          <ModalBody
            exit="enter"
            as={motion.div}
            bg="background"
            animate="enter"
            initial="initial"
            variants={bodyVariants}
          >
            <List
              mt="4"
              exit="exit"
              spacing="4"
              as={motion.ul}
              animate="enter"
              initial="initial"
              variants={listVariants}
            >
              <Heading
                mt="4"
                size="sm"
                as={motion.h2}
                variants={listItemVariants}
              >
                Sections
              </Heading>
              {ROUTES.map((route) => {
                const { href, Icon: RouteIcon, label } = route;

                return (
                  <ListItem
                    key={href}
                    as={motion.li}
                    variants={listItemVariants}
                  >
                    <Button
                      w="100%"
                      h="54px"
                      py="12px"
                      cursor="pointer"
                      bgColor="surface"
                      borderRadius="lg"
                      alignItems="center"
                      boxShadow={boxShadow}
                      justifyContent="flex-start"
                      transition="0.12s linear all"
                      onClick={() => {
                        onClose();
                        router.push(href);
                      }}
                      _hover={{
                        bg: buttonHoverBg,
                      }}
                      _focus={{
                        boxShadow,
                        bg: buttonHoverBg,
                      }}
                      _active={{
                        bg: 'inherit',
                        transform: 'none',
                        borderColor: 'transparent',
                      }}
                    >
                      <Flex
                        w="30px"
                        h="30px"
                        me="12px"
                        bg="primary"
                        color="surface"
                        borderRadius="8px"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={RouteIcon} />
                      </Flex>
                      <Text
                        my="auto"
                        fontSize="sm"
                        color="text.primary"
                        fontWeight="semibold"
                      >
                        {label}
                      </Text>
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </ModalBody>
          <ModalFooter
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <ButtonGroup size="lg" variant="link">
              {CONTACTS.map((contact) => {
                const { Icon: ContactIcon, label, link } = contact;

                return (
                  <Link passHref key={link} href={link}>
                    <IconButton
                      as="a"
                      aria-label={label}
                      icon={<Icon as={ContactIcon} />}
                    />
                  </Link>
                );
              })}
            </ButtonGroup>

            <Text
              mt="8"
              fontSize="sm"
              fontWeight="semibold"
              color="text.secondary"
            >
              Created by Victor Ragojos
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Drawer;
