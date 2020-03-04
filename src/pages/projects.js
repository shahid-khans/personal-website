import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: createdDate, order: DESC }) {
        edges {
          node {
            projectName
            description
            createdDate(formatString: "MMM YYYY")
            link
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Projects" />
      <div className="text-center container mx-auto">
        <h1 className="mt-8 mb-5 sm:text-3xl sm:font-semibold mx-4 sm:mx-0 text-xl">
          Take a look at my Projects
        </h1>
        <div className="cards mx-2">
          {data.allContentfulProject.edges.map(edge => {
            return (
              <div className="card rounded p-4 shadow-lg" key={edge.node.projectName}>
                <h4 className="font-medium text-lg mb-2">{edge.node.projectName}</h4>
                <h4 className="uppercase text-red-600 text-xs sm:text-sm font-semibold tracking-wider">
                  {edge.node.createdDate || 'WORK IN PROGRESS'}
                </h4>
                <h4 className="mt-1 mb-2 font-light text-sm">{edge.node.description}</h4>
                <h4>
                  <Link to={edge.node.link || '/404'}>
                    <button type="button" className="text-sm sm:text-base">
                      Learn More
                    </button>
                  </Link>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
