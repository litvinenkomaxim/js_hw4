import React from 'react';
import MyButton from './components/ButtonContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://pbs.twimg.com/profile_images/678623148288442368/3DQtEXa2_400x400.png"
          className="App-logo"
          alt="logo"
        />
        <MyButton></MyButton>
      </header>
    </div>
  );
}

export default App;
