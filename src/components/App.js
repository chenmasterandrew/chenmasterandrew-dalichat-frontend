import React from 'react';

import Button from './generic/Button';

const App = () => (
  <>
    <Button
      label="Click me!"
      onClick={() => console.log('Hello, world!')}
    />
    <div>Welcome to DALIChat!</div>
  </>
);

export default App;
