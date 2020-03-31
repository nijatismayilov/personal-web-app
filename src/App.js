import React from 'react';

import Homepage from './pages/homepage/homepage.component';
import Sidebar from './components/side-bar/side-bar.component';

import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
