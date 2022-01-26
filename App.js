/**
 * Sample React Native App for trukcs
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {StatusBar} from 'react-native';

import DestinationSearch from './src/screens/DestinationSearch';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
