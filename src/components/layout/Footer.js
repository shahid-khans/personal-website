import React from 'react';
import { Link } from 'gatsby';

import EmailIcon from '../../svg/EmailIcon';

const Footer = () => (
  <footer>
    <div className="mt-20 mb-10 text-center leading-relaxed">
      <p className="text-sm font-light opacity-75">
        <span className="">© 2020 — Nicolas Racchi </span>
        <br />{' '}
        <div className="flex items-center justify-center">
          <div className="w-4 mr-1 text-red-600">
            <EmailIcon />
          </div>
          <a
            className="font-light text-sm text-red-600 border-none"
            href="mailto:nicolas@racchi.com"
            rel="noopener noreferrer"
          >
            nicolas@racchi.com
          </a>
        </div>
      </p>
    </div>
  </footer>
);

export default Footer;
