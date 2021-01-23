import * as React from 'react';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';

import siteConfig from '../site-config';

const About = () => {
  return (
    <VStack>
      <VStack mb={12}>
        <Heading size="lg">Why use Pena.id</Heading>
        <Text fontSize="lg" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
      </VStack>

      <Flex
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        w={{ base: '6rem', md: '50rem' }}
      >
        {siteConfig.about.map(([Icon, text]) => (
          <Box w="12rem" px={12} key={Icon.toString()} mb={{ base: 8, md: 0 }}>
            <Icon size="6.2rem" />
            <Text fontSize="md" textAlign="center" mt={6}>
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
    </VStack>
  );
};

export default About;
