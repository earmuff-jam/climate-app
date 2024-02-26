import React from 'react';
import { useGetVersionDetailsQuery } from './services/version';

const App = () => {
  const { data, error, isLoading } = useGetVersionDetailsQuery();

  console.log(data, error, isLoading);
  return <div>App</div>;
};

export default App;
