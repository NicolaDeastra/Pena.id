import * as React from 'react';
import {
  Heading,
  Text,
  Spacer,
  Box,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';

import home from '../assets/home.svg';
import siteConfig from '../site-config';

const Hero = () => {
  return (
    <Flex
      h="xl"
      pt={['1rem', '4rem']}
      align={['center', 'flex-start']}
      flexDirection={{ base: 'column', md: 'row' }}
      mb={{ base: 20, md: 12 }}
    >
      <Box boxSize={{ base: 'xs', md: 'sm' }} mb={['2.5rem', '0']}>
        <Heading as="h2" size="xl" mb="1.4rem" textAlign={['center', 'left']}>
          {siteConfig.heading}
        </Heading>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          textAlign={['center', 'left']}
        >
          {siteConfig.subHeading}
        </Text>
        <Button size="lg" ml={['4.5rem', '0']} mt="24px">
          Get Started
        </Button>
      </Box>
      <Spacer />
      <Box boxSize={{ base: 'xs', md: 'lg' }}>
        <Image src={home} alt="home image" />
      </Box>
    </Flex>
  );
};

export default Hero;
