import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        <Link to="/">
        iCondomini
        </Link>
      </div>
      <div className="flex mt-2 sm:mt-4 sm:mt-0 text-sm sm:text-base">
        <AnchorLink className="px-4" href="#features">
          Caratteristiche
        </AnchorLink>
        <Link to="/about" className="px-4">Chi Siamo</Link>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Scopri di più</Button>
      </div>
    </div>
  </header>
);

export default Header;
