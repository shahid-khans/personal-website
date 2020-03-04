import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from 'react-burger-menu';
import CustomThemeToggler from '../CustomThemeToggler';
import '../../css/hamburgerMenu.css';

import LightMode from '../../svg/LightMode';
import DarkMode from '../../svg/DarkMode';

const Header = () => (
  <header className="top-0 z-10">
    <div className="block bg-red-700 h-2 w-full" />
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-3 px-8">
      <div className="flex items-center">
        <Link to="/" className="border-none font-semibold darkmode text-xl">
          Nicolas Racchi
        </Link>
      </div>
      <div className="block sm:hidden">
        <Menu right disableAutoFocus>
          <Link to="/">Home</Link>
          <Link to="/blog">Articles</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
        </Menu>
      </div>
      <div className="flex mt-2 text-base hidden sm:inline">
        <Link to="/blog" className="border-none px-4" activeClassName="navlink">
          Articles
        </Link>
        <Link to="/projects" className="px-4 border-none" activeClassName="navlink">
          Projects
        </Link>
        <Link to="/about" className="px-4 border-none" activeClassName="navlink">
          About Me
        </Link>
      </div>

      <CustomThemeToggler />
    </div>
  </header>
);

export default Header;
