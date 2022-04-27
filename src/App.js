import React from 'react';
import Navbar from './components/Navbar.js';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home.js';
import Services from './pages/Services.js';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
