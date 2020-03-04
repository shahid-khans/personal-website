import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import NotFoundImage from '../svg/NotFoundImage';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <div className="flex items-start mt-8 sm:mt-16 justify-center">
        <div className="w-48 sm:w-64">
          <h1 className="text-center text-4xl mb-5">404 ...</h1>
          <NotFoundImage />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
