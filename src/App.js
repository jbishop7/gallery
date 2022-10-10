import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/main";
import {Operator, Marshall} from './pages/snipers';
import React, { useState, useEffect, useContext, createContext } from "react";


function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage />} />
          <Route path = "Operator" element = {<Operator />} />
          <Route path = "Marshall" element = {<Marshall />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
