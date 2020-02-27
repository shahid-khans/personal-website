import React from 'react';
import Layout from '../components/layout/Layout';
import PricingIcon from '../svg/PricingIcon';

export default () => (
  <Layout>
    <section className="pt-12 md:pt-16">
      <div className="container mx-auto px-8">
        <div className="text-center  center w-full">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Prezzi</h1>
          <p className="mt-5 font-light text-2xl lg:text-3xl xl:text-4xl">
            Più semplice di così, si muore!
          </p>
          <div className="block">
            <p className="mt-2 font-light text-gray-700">
              Siamo ancora in fase di sviluppo... <br />
              <span className="border-b-2 border-gray-400">Iscriviti alla Beta gratuita</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
        <div className="relative block flex flex-col items-center">
          {' '}
          {/* AGGIUNGERE md:flex-row PER AGGIUNGERE ALTRI TIERS ACCANTO */}
          <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
            <div className="bg-white rounded-lg shadow-inner shadow-lg overflow-hidden">
              <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  1 Condominio
                </h1>
                <h2 className="text-lg text-gray-600 text-center pb-4">49€ / mese</h2>
                <p className="font-light text-center text-sm lg:text-lg">
                  Un unico prezzo per tutto il condominio, indipendentemente dal numero di famiglie.
                </p>
              </div>
              <div className="flex flex-wrap mt-3 px-6">
                <ul>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">
                      1 licenza per tutto il condominio
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">Un account per ogni utente</span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">Cancellazione gratuita</span>
                  </li>
                </ul>
              </div>
              <div className="block flex items-center p-8  uppercase">
                <button
                  type="button"
                  className="focus:outline-none mt-3 text-lg font-semibold bg-primary w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-primary-darker"
                >
                  In arrivo...
                </button>
              </div>
            </div>

            {/* 
            AGGIUNGERE ALTRE PRICING TIERS: 
            - AGGIUNGERE FLEX ROW AL DIV COMMENTATO SOPRA.
            - SCOMMENTARE QUESTA PARTE

            <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
              <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Hobby
                </h1>
                <h2 className="text-sm text-gray-500 text-center pb-6">FREE</h2>
                Stripe offers everything needed to run an online business at scale. Get in touch for
                details.
              </div>

              <div className="flex flex-wrap mt-3 px-6">
                <ul>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">No setup</span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">No setups</span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <PricingIcon />
                    </div>
                    <span className="text-gray-700 text-lg ml-3">Speed</span>
                  </li>
                </ul>
              </div>
              <div className="block flex items-center p-8  uppercase">
                <button className="mt-3 text-lg font-semibold bg-primary w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-primary-darker">
                  Select
                </button>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>

    <section></section>
  </Layout>
);
