import { useState } from 'react';
import type { ReactNode } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';

// --- Placeholder Components ---
const Layout = () => <div><h1>Layout</h1><Outlet /></div>;
const MemberPage = () => <div>Members Page</div>;
const ProductPage = () => <div>Products Page</div>;
const AnalyticsPage = () => <div>Analytics Page</div>;
const MembershipPage = () => <div>Membership Page</div>;


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="members" element={<MemberPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="membership" element={<MembershipPage />} />
          </Route>
       
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
