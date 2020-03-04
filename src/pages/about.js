import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import Avatar from '../svg/Avatar';
import EmailIcon from '../svg/EmailIcon';

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className="flex items-start mt-8 sm:mt-16 justify-center">
        <div className="w-32 sm:w-48 md:w-64">
          <Avatar />
        </div>
      </div>
      <div>
        <div className="container mx-auto text-center max-w-3xl">
          <div className="mt-6 mx-4 sm:mx-2 md:mx-0 sm:mt-5">
            <p className="font-normal texl-xl sm:text-2xl">
              I&apos;m a sophomore studying Automation Engineering at{' '}
              <a href="http://www.polimi.it" rel="noopener noreferrer" target="_blank">
                Polimi
              </a>
              .
            </p>
            <p className="mt-2 font-normal texl-xl sm:text-2xl">
              Among my interests are Data Science, Cryptocurrencies, Tennis, Finance and Robotics.
            </p>
            <p className="mt-2 font-normal texl-xl sm:text-2xl">
              Like many makers, I have a lot of ideas and little time to execute them. When I&apos;m
              offline, I&apos;m headed to the gym or to the bar.
            </p>
            <h2 className="mt-8 mb-3 sm:mb-5 font-bold text-2xl lg:text-3xl xl:text-4xl ">
              Reach Me
            </h2>
            <div className="flex items-end justify-center">
              <div className="w-5 mr-2 sm:w-6 sm:mr-3">
                <EmailIcon />
              </div>
              <a className="text-sm sm:text-lg" href="mailto:nicolas@racchi.com">
                nicolas@racchi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
