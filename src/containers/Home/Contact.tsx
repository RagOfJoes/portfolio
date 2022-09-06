import {
  Box,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import Analytics from '@/lib/analytics';
import { CONTACTS } from '@/lib/constants';

const Contact = () => {
  return (
    <Box w="100%" pt="139px" as="section" id="contact">
      <Flex direction="column" align="center">
        <ButtonGroup size="lg" variant="link">
          {CONTACTS.map((contact) => {
            const { Icon: ContactIcon, label, link } = contact;

            return (
              <Link passHref key={link} href={link}>
                <IconButton
                  as="a"
                  target="_blank"
                  aria-label={`View my ${label}`}
                  icon={<Icon as={ContactIcon} />}
                  onClick={() => Analytics.viewSocial(label)}
                />
              </Link>
            );
          })}
        </ButtonGroup>

        <Text mt="8" fontSize="sm" fontWeight="semibold" color="text.secondary">
          Created by Victor Ragojos
        </Text>
      </Flex>
    </Box>
  );
};

export default Contact;
