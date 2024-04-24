import React from 'react';
import SimpleUnaryInterface from './SimpleUnaryInterface';
import ServerStreamingInterface from './ServerStreamingInterface';
import ClientStreamingInterface from './ClientStreamingInterface';
import BiDirectionalStreamingInterface from './BiDirectionalStreamingInterface';

const App = () => {
  return (
    <div>
      <h1>gRPC Client Interfaces</h1>
      <SimpleUnaryInterface />
      <ServerStreamingInterface />
      <ClientStreamingInterface />
      <BiDirectionalStreamingInterface />
    </div>
  );
};

export default App;

