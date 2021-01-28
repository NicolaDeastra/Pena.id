import * as React from 'react';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';

import { ReactComponent as Easy } from '../../assets/full.svg';
import { ReactComponent as Post } from '../../assets/post.svg';

import siteConfig from '../../site-config';

const About = () => {
  return (
    <>
      <VStack>
        <Flex>
          <Box flexGrow={1}>
            <Easy />
          </Box>
          <VStack pt={12} pl={4}>
            <Box mb={6}>
              <Heading size="md" mb={4}>
                Free
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt pretium nibh vitae consectetur.
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                Easy to use
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </VStack>
      <VStack>
        <Flex>
          <VStack pt={12} pl={4}>
            <Box mb={6}>
              <Heading size="md" mb={4}>
                Free
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt pretium nibh vitae consectetur.
              </Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                Easy to use
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt.
              </Text>
            </Box>
          </VStack>
          <Box flexGrow={1}>
            <Post />
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default About;
