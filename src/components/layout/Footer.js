import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Chi siamo</h2>
        <p className="mt-5">Siamo er mejo </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Link Importanti</h2>
        <ul className="mt-4 leading-loose">
        <li>
            <a href="https://codebushi.com">Blog</a>
          </li>
          <li>
            <a href="https://codebushi.com">Termini &amp; Condizioni</a>
          </li>
          <li>
            <a href="https://codebushi.com">Politica sulla Privacy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
