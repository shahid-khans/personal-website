import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Il modo smart di vivere il condominio
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Scopri come rendere la tua vita da condomino molto più organizzata grazie a un&apos;app
            fatta apposta per casa tua
          </p>
          <input
            className="bg-gray-200 py-2 sm:py-3 mt-8 md:mt-8 pl-2 text-green rounded-l focus:outline-none"
            placeholder="La tua migliore mail..."
            type="text"
          />
          <Link to="/">
            <Button size="sm" className="sm:py-3 rounded-l-none">
              Scopri di più
            </Button>
          </Link>
          <p className="my-3 sm:mt-4 text-gray-600 text-green-400">
            100% gratis, no carta di credito
          </p>
        </div>
        <div className="lg:w-1/2 mt-4 sm:mt-0">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Caratteristiche{' '}
          <span role="img" aria-label="hand pointing down">
            👇🏻
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sempre aggiornato</p>
              <p className="mt-4">
                Ricevi notifiche per non perderti nulla delle decisioni che vengono prese nelle
                assemblee condominiali.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Trasparente</p>
              <p className="mt-4">
                Non lasciare che nulla venga lasciato agli amministratori senza supervisione. Tieni
                traccia di ciò che avviene nella tua casa.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Vota i provvedimenti</p>
              <p className="mt-4">
                Votando direttamente dal web, non ti perderai mai più una votazione importante sui
                provvedimenti all&apos;ordine del giorno.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    {/*
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">I risultati dei nostri clienti</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    */}

    {/*
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    */}
    <section className="container mx-auto mt-20 py-24 bg-blue-200 sm:rounded-lg text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold">
        Gestire il condominio non deve essere un peso{' '}
        <span role="img" aria-label="hand pointing down">
          🤯
        </span>
      </h3>
      <p className="mt-4 mb-4 sm:mb-0 text-lg sm:text-xl font-light">
        Iscriviti per scoprire di più su cosa possiamo fare per te.
      </p>
      <input
        className="bg-gray-200 py-2 sm:py-3 mt-8 md:mt-8 pl-2 text-green rounded-l focus:outline-none"
        placeholder="La tua migliore mail..."
        type="text"
      />
      <Link to="/">
        <Button size="sm" className="sm:py-3 rounded-l-none">
          Tienimi aggiornato
        </Button>
      </Link>
    </section>
  </Layout>
);
