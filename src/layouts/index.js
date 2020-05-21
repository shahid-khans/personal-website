import React from 'react';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';

// This component is needed for page animations.
// To change the layout, head in /components/layout
// To modify animations instead, edit this file.

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider location={location} mode="immediate">
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  );
};

export default Layout;
