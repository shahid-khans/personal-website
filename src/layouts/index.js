import React from 'react';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';

// QUESTO COMPONENTE SERVE PER LE ANIMAZIONI.
// PER CAMBIARE IL LAYOUT, ANDARE IN
// /COMPONENTS/LAYOUT
// PER MODIFICARE LE ANIMAZIONI INVECE, EDITARE QUESTO FILE.

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider location={location} mode="immediate">
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  );
};

export default Layout;
