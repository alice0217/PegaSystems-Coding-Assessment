import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import Nav from './navBar';

function App() {
  return (
    <div className="row-layout">
      <Nav />
      <AppRoutes />
    </div>
  );
}

export default App;
