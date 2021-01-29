import * as React from 'react';
import { VStack, Link, Flex, Heading, Text } from '@chakra-ui/react';
import { Link as DomLink } from 'react-router-dom';

import siteConfig from '../../site-config';

const Footer = () => {
  return (
    <VStack>
      <Flex w="100%" justify="space-between">
        <Flex justify="space-between" h="11rem" flexGrow={1} direction="column">
          <DomLink to="/">
            <Link fontWeight="extrabold" fontSize="lg" variant="link">
              {siteConfig.title}
            </Link>
          </DomLink>
          <Text> &copy; {siteConfig.footer.copyright}</Text>
        </Flex>
        {siteConfig.footer.rotes.map(route => (
          <VStack align="left" flexGrow={1} direction="column">
            <Heading fontSize="lg">{route.heading}</Heading>
            {route.routes.map(([text, href]) => (
              <DomLink key={text} to={href}>
                <Link p={0}>{text}</Link>
              </DomLink>
            ))}
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
};

export default Footer;
