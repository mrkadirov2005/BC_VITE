import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WELCOME from './components/intro/intro';
import Sign_in_comp from './pages/register/sign_in/Sing_in_comp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WELCOME />} />
      <Route path="/sign_in" element={<Sign_in_comp />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
