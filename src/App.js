import React from 'react';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';

import Nav from './components/nav';
import Home from './pages/home';
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack maxW={'6xl'} minH="100vh" mx="auto" p={4} spacing={0}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <ColorModeSwitcher />
        </Router>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
