import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import SideBar from './components/side-bar/side-bar.component';

import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <div className="row">
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
