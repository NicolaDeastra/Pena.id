import * as React from 'react';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FaShieldAlt, FaRegCompass, FaMoneyBillAlt } from 'react-icons/fa';

const About = () => {
  return (
    <VStack>
      <VStack mb={12}>
        <Heading size="lg">Why use Pena.id</Heading>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
      </VStack>

      <Flex
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        w={{ base: '6rem', md: '50rem' }}
      >
        <Box w="10rem" p={4}>
          <FaShieldAlt size="6rem" />
          <Text fontSize="md" textAlign="center" mt={6}>
            Lorem ipsum dolor
          </Text>
        </Box>

        <Box w="10rem" p={4}>
          <FaRegCompass size="6rem" />
          <Text fontSize="md" textAlign="center" mt={6}>
            Lorem ipsum dolor sit amet
          </Text>
        </Box>

        <Box w="10rem" p={4}>
          <FaMoneyBillAlt size="6rem" />
          <Text fontSize="md" textAlign="center" mt={6}>
            Lorem ipsum dolor
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default About;
