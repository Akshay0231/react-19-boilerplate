import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default App;
