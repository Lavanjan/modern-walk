import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/templates';

const HomePage = lazy(() => import('./pages/HomePage'));
const MensClothingPage = lazy(() => import('./pages/MensClothingPage'));
const WomensClothingPage = lazy(() => import('./pages/WomensClothingPage'));

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mens-clothing" element={<MensClothingPage />} />
            <Route path="/womens-clothing" element={<WomensClothingPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
