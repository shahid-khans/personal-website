import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import CustomThemeToggler from '../CustomThemeToggler';
import '../../css/hamburgerMenu.css';

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
          <Link className="mt-1" to="/">
            Home
          </Link>
          <Link className="mt-3" to="/blog">
            Articles
          </Link>
          <Link className="mt-3" to="/projects">
            Projects
          </Link>
          <Link className="mt-10" to="/about">
            About Me
          </Link>
          <Link className="mt-3" to="/newsletter">
            Newsletter
          </Link>
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
        <Link
          to="/newsletter"
          className="px-4 border-none hidden md:inline"
          activeClassName="navlink"
        >
          Newsletter
        </Link>
      </div>

      <CustomThemeToggler />
    </div>
  </header>
);

export default Header;
