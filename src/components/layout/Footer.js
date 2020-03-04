import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <div className="mt-20 mb-10 text-center leading-relaxed">
      <p className="text-sm font-light">
        <span className="opacity-75">© 2020 — Nicolas Racchi </span>
        <br />{' '}
        <a className="text-red-600 border-none" href="mailto:nicolas@racchi.com">
          nicolas@racchi.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
