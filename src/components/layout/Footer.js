import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-8 sm:mt-48 mb-8 text-gray-800">
    <div className="block sm:flex text-center sm:text-left -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contattaci</h2>
        <p className="mt-2 sm:mt-5 text-gray-700">
          <a href="mailto:info@icondomini.it">info@icondomini.it</a>
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg mt-4 sm:mt-0 font-semibold">Link Importanti</h2>
        <ul className="mt-2 sm:mt-4 leading-loose">
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <a href="/">Termini &amp; Condizioni</a>
          </li>
          <li>
            <a href="/">Politica sulla Privacy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 mt-4 sm:mt-0 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-2 sm:mt-4 leading-loose">
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
