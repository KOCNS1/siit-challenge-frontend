import React from 'react';
import Navbar from './components/Navbar.js';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home.js';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
