import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button size="large" outline>BUTTON</Button>
        <Button color="gray" outline>BUTTON</Button>
        <Button color="pink" size="small" outline>BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button size="large" fullWith className="customized-button">BUTTON</Button>
        <Button color="gray" size="large" fullWith>BUTTON</Button>
        <Button color="pink" size="large" fullWith 
        onClick={() => {console.log('click');}}
        onMouseMove={() => {console.log('move');}}>BUTTON</Button>
      </div>
    </div>

  );
}

export default App;
