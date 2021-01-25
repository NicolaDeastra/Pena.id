import * as React from 'react';
import { Stack, Heading, Button, HStack } from '@chakra-ui/react';

const DashboardHeader = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Heading>User</Heading>
      <HStack flexGrow={1} justify="flex-end">
        <Button>New Post</Button>
        <Button variant="secondary">Static</Button>
      </HStack>
    </Stack>
  );
};

export default DashboardHeader;
