import * as React from 'react';
import { HStack, Link, useMediaQuery } from '@chakra-ui/react';

import routes from '../routes';
import MobileDrawer from './mobileDrawer';

const Nav = () => {
  const [isDestop] = useMediaQuery('(min-width: 960px)');

  return (
    <HStack spacing={0}>
      <Link fontWeight="extrabold" fontSize="lg" href="/" variant="link">
        Pena.id
      </Link>

      <HStack fontSize="md" flexGrow={1} justify="flex-end" spacing={0}>
        {isDestop ? (
          routes.map(([text, href]) => (
            <Link href={href} p={4} key={text}>
              {text}
            </Link>
          ))
        ) : (
          <MobileDrawer />
        )}
      </HStack>
    </HStack>
  );
};

export default Nav;
