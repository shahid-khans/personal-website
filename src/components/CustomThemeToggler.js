import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import LightMode from '../svg/LightMode';
import DarkMode from '../svg/DarkMode';

const CustomThemeToggler = () => (
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
);

export default CustomThemeToggler;
