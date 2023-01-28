import React from 'react';
import './App.css'
import Card from './components/Card';
import Card1 from './components/Card1';
import {Box, HStack} from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <HStack>
        <Box>
          <Card/>
        </Box>
        <Box>
          <Card/>
        </Box>
        <Box>
          <Card1/>
        </Box>
      </HStack>
   </div>
  );
}

export default App;
