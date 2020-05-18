import React from 'react';
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

const newsletter = () => {
  return (
    <Layout>
      <Head title="Newsletter" desc="Hey! Sign up to my newsletter to receive emails from me about my next write-ups and more interesting stuff!" />

      <section className="container mx-auto max-w-3xl text-center">
        <h1 className="text-center mt-8 sm:text-3xl sm:font-semibold mx-4 sm:mx-0 text-xl">
          Sign up to my newsletter
        </h1>
        <p className="mt-6 mx-2 font-normal texl-lg sm:text-xl">
          I&apos;ll send you an email once I&apos;ve published an article. I also try to keep a
          weekly brew of my favorite blog posts, tools, general thoughts and ideas that I come
          across.
        </p>
        <div className="inline-block">
          <form
            className="text-sm"
            name="newsletter"
            method="post"
            action="/newsletter"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              className="shadow mt-4 appearance-none border rounded py-2 px-3 text-black"
              placeholder="Your best email"
              type="email"
              name="email"
            />
            <button
              className="inline ml-2 shadow bg-indigo-600 sm:uppercase
                hover:bg-indigo-500 focus:shadow-outline focus:outline-none 
                text-white py-2 px-4 rounded"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="mt-6 mx-2 font-light text-base sm:text-lg ">
          I will not sell your data or spam you.
        </p>
      </section>
    </Layout>
  );
};

export default newsletter;
