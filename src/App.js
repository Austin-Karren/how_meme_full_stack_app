import React from 'react';
import './App';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {routes}
      </div>
    </div>
  );
}

export default App;
