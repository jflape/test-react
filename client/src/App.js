import React from 'react';

function App() {
  const now = new Date().toLocaleString();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello, World!</h1>
      <p>Current Date and Time: {now}</p>
    </div>
  );
}

export default App;
