import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import Share from './src/container/ShareContainer';

library.add(fab, fas);

export default function App() {
  return (
    <NativeBaseProvider>
      <Share />
    </NativeBaseProvider>
  );
}
