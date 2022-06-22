import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
