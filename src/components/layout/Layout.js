import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}
      
      {/* SimpleAnalytics */}
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script> 
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""></noscript>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
