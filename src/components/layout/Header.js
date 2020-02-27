import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 z-10 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        <Link to="/">iCondomini</Link>
      </div>
      <div className="flex mt-2 sm:mt-4 sm:mt-0 text-sm sm:text-base">
        {/* <AnchorLink className="px-4" href="#features">
          Caratteristiche
        </AnchorLink> */}
        <Link to="/about" className="px-4">
          Chi Siamo
        </Link>
        <Link to="/pricing" className="px-4">
          Prezzi
        </Link>
      </div>
      <div className="hidden md:block">
        <Link
          to="/"
          className="mr-5 text-gray-700 font-thin border-b-2 border-gray-500 hover:text-black hover:border-black"
        >
          Login
        </Link>
        <Button className="text-sm">Scopri di più</Button>
      </div>
    </div>
  </header>
);

export default Header;
