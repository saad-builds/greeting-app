import { useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('Hello, World!');

  const handleChangeGreeting = () => {
    setGreeting('Welcome to React!');
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{greeting}</h1>
        <button onClick={handleChangeGreeting}>Change Greeting</button>
      </div>
    </div>
  );
}

export default App;
