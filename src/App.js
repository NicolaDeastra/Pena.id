import React from 'react';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './theme';

import Nav from './components/nav';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ColorModeSwitcher from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav />
        <Stack maxW={'6xl'} minH="100vh" mx="auto" py={4} px={14} spacing={0}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          </Switch>
          <ColorModeSwitcher />
        </Stack>
      </Router>
    </ChakraProvider>
  );
}

export default App;
