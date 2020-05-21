/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, desc }) => {
  return (
    <Helmet title={`${title} | Nicolas Racchi`}>
      <meta
        name="Description"
        content={`${desc} | Hi! I love spending time developing & building things.`}
      />
    </Helmet>
  );
};

export default Head;
