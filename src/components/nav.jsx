import * as React from 'react';
import { HStack, Link, useMediaQuery } from '@chakra-ui/react';
import { Link as DomLink } from 'react-router-dom';

import routes from '../routes';
import MobileDrawer from './mobileDrawer';

const Nav = () => {
  const [isDestop] = useMediaQuery('(min-width: 960px)');

  return (
    <HStack spacing={0}>
      <DomLink to="/">
        <Link fontWeight="extrabold" fontSize="lg" href="/" variant="link">
          Pena.id
        </Link>
      </DomLink>

      <HStack fontSize="md" flexGrow={1} justify="flex-end" spacing={0}>
        {isDestop ? (
          routes.map(([text, href]) => (
            <DomLink key={text} to={href}>
              <Link p={4}>{text}</Link>
            </DomLink>
          ))
        ) : (
          <MobileDrawer />
        )}
      </HStack>
    </HStack>
  );
};

export default Nav;
