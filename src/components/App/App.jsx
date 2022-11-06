import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import FetchApiPage from 'pages/FetchApiPage/FetchApiPage';
import CounterPage from 'pages/CounterPage/CounterPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/fetchApi" element={<FetchApiPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </div>
  );
};
