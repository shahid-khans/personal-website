/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';
import { Disqus } from 'gatsby-plugin-disqus';

import '../css/blogPost.css';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "MMM DD, Y")
      body {
        json
      }
    }
  }
`;

const disqusConfig = ({ slug, title }) => ({
  identifier: slug,
  title: title
});

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return (
          <div className="lg:max-w-3xl sm:max-w-xl mx-auto">
            <img className="rounded" alt={alt} src={url} />
          </div>
        );
      }
    }
  };

  const getReadingTime = () => {
    const doc = props.data.contentfulBlogPost.body.json;
    const text = documentToPlainTextString(doc);
    const result = readingTime(text);
    return result;
  };

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      {/* Note: the default meta description for blog posts is set to the first 3-4 lines of the article.
      add a "desc" field to the Head element just like every other page to customize it. */}

      <div className="lg:max-w-6xl mx-auto mt-6 sm:mt-10">
        <div className="lg:mx-16 md:mx-12 sm:mx-8 mx-3">
          <p className="text-center uppercase text-red-600 text-sm font-bold tracking-widest">
            {props.data.contentfulBlogPost.publishedDate} – {getReadingTime().text}
          </p>
          <div className="flex text-center justify-center items-start">
            <h1 className="text-2xl font-bold mb-6 md:mb-10 md:text-4xl max-w-3xl">
              {props.data.contentfulBlogPost.title}
            </h1>
          </div>

          <div className="blogpost text-base sm:text-lg lg:text-xl font-normal sm:font-light">
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </div>
          <div className="my-16" />
          <Disqus config={disqusConfig} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
