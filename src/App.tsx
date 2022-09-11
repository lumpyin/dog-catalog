import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { Flex, defaultTheme, Provider } from '@adobe/react-spectrum';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Provider theme={defaultTheme} colorScheme="light">
        <Flex direction="column">
          <Header />
          <Container />
        </Flex>
      </Provider>
    </div>
  );
}

export default App;
