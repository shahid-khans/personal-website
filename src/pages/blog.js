import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Articles" />
      <div>
        <h1 className="text-center mt-8 sm:text-3xl sm:font-semibold mx-4 sm:mx-0 text-xl">
          Here&apos;s a list of all my articles.
          <br />
          Subscribe to my <Link to="/newsletter">newsletter</Link> to not miss my next write-up.
        </h1>
        <ol className="mt-10 mx-5 sm:mx-auto sm:max-w-xl">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="my-4" key={edge.node.slug}>
                <Link
                  className="whitespace-nowrap border-none overflow-x-auto"
                  to={`/blog/${edge.node.slug}`}
                >
                  <p className=" sm:inline-block uppercase text-red-600 mr-5 text-xs font-semibold tracking-wider">
                    {edge.node.publishedDate}
                  </p>
                  <h2 className="inline-block  sm:text-lg font-light sm:hover:font-medium">
                    {edge.node.title}
                  </h2>
                </Link>
                <hr className="mt-3 shadow divider" />
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
