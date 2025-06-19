// client/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('/api/date')
      .then((res) => res.json())
      .then((data) => setDate(data.date));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hello, World!</h1>
      <p>Current date and time:</p>
      <strong>{date}</strong>
    </div>
  );
}

export default App;
