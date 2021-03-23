import React, { useEffect, useState } from 'react';
import { MovieProvider } from "./contexts/MovieContext";

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <MovieProvider> 
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar/>
        <div className="container">
          <Content />
        </div>
      </div>
    </MovieProvider>
  )
}