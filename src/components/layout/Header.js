import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
      <div className="themetoggler rounded-full shadow-2xl pt-1 px-2 divMode ml-0 sm:ml-8 md:ml-12 lg:ml-20 mt-3 sm:mt-0 ">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />
              <div className="inline-block text-yellow-600 sun cursor-pointer">
                <LightMode />
              </div>
              <div className="inline-block text-yellow-600 moon cursor-pointer">
                <DarkMode />
              </div>
            </label>
          )}
        </ThemeToggler>
      </div>
    </div>
  </header>
);

export default Header;
