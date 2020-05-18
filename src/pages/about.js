import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import profilepic from '../img/profilepic.png';
import EmailIcon from '../svg/EmailIcon';
import LinkedinIcon from '../svg/LinkedinIcon';
import MediumIcon from '../svg/MediumIcon';
import GitHubIcon from '../svg/GitHubIcon';

const About = () => {
  return (
    <Layout>
      <Head title="About" desc="Hi, I'm a sophomore studying automation engineering at Polimi. 
        Read more about me here!" />

      <div className="flex items-start mt-8 sm:mt-16 justify-center">
        <div className="w-32 sm:w-48 md:w-56">
          <img src={profilepic} alt="profile pic" />
        </div>
      </div>
      <div>
        <div className="container mx-auto text-center max-w-3xl">
          <div className="mt-6 mx-4 sm:mx-2 md:mx-0 sm:mt-5">
            <p className="font-normal texl-lg sm:text-xl">
              I&apos;m a sophomore studying Automation Engineering at{' '}
              <a href="http://www.polimi.it" rel="noopener noreferrer" target="_blank">
                Polimi
              </a>
              .
            </p>
            <p className="mt-2 font-normal texl-lg sm:text-xl">
              Among my interests are Data Science, Cryptocurrencies, Tennis, Finance and Robotics.
            </p>
            <p className="mt-2 font-normal texl-lg sm:text-xl">
              Like many makers, I have a lot of ideas and little time to execute them. When I&apos;m
              offline, I&apos;m headed to the gym or to the bar.
            </p>
            <h2 className="mt-8 mb-3 sm:mb-5 font-bold text-xl lg:text-2xl xl:text-3xl ">
              Reach Me:
            </h2>

            {/* LINKS SECTION */}
            <div className="container">
              <div className="flex items-end justify-center">
                <div className="w-5 mr-2 sm:w-6 sm:mr-3">
                  <EmailIcon />
                </div>
                <a
                  className="text-sm sm:text-lg"
                  href="mailto:nicolas@racchi.com"
                  rel="noopener noreferrer"
                >
                  nicolas@racchi.com
                </a>
              </div>
              <div className="flex mt-3 items-end justify-center">
                <div className="w-5 mr-2 sm:w-6 sm:mr-3">
                  <GitHubIcon />
                </div>
                <a
                  className="text-sm sm:text-lg"
                  href="https://github.com/nicolas-racchi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nicolas-racchi
                </a>
              </div>
              <div className="flex mt-3 items-end justify-center">
                <div className="w-5 mr-2 sm:w-6 sm:mr-3">
                  <LinkedinIcon />
                </div>
                <a
                  className="text-sm sm:text-lg"
                  href="https://www.linkedin.com/in/nicolas-racchi/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nicolas-racchi
                </a>
              </div>
              <div className="flex mt-3 items-end justify-center">
                <div className="w-5 mr-2 sm:w-6 sm:mr-3">
                  <MediumIcon />
                </div>
                <a
                  className="text-sm sm:text-lg"
                  href="https://medium.com/@nicolas_17943"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nicolas17943
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
