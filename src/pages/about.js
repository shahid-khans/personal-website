import React from 'react';
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
import TeamImage from '../svg/TeamImage';
import Typewriter from 'typewriter-effect';

export default () => (
  <Layout>
    <section className="pt-12 md:pt-16">
      <div className="container mx-auto px-8">
        <div className="text-center  center w-full">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Chi Siamo?</h1>
        </div>
        <div className="align-center">
          <div className="block w-full md:p-32 md:py-0 lg:p-64 lg:py-0 mt-8">
            <TeamImage />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container mx-auto text-center max-w-3xl">
        <div className="mt-10 sm:mt-20 font-normal texl-xl sm:text-2xl">
          <p>
            Siamo due ragazzi studenti di ingegneria. La nostra idea nasce dalle esperienze dei
            condomini di molti nostri amici e famigliari - ovvero un{' '}
            <mark className="bg-blue-200">
              profondo sentimento di inadeguatezza del sistema corrente
            </mark>
            , basato sulla{' '}
            <span className="border-b-2 sm:border-b-4 border-gray-600">scarsa trasparenza</span> e
            spesso sulla{' '}
            <span className="border-b-2 sm:border-b-4 border-gray-600">disorganizzazione</span>.
          </p>
          <h2 className="mt-8 font-bold text-3xl lg:text-4xl xl:text-5xl ">Cosa vogliamo fare?</h2>
          <p className="mt-4">
            Un'app in cui puoi visualizzare al volo informazioni utili, come le date delle{' '}
            <mark className="bg-yellow-200">prossime riunioni</mark>, una bacheca con le{' '}
            <mark className="bg-yellow-200">ultime notizie</mark>, ricevere{' '}
            <mark className="bg-yellow-200">notifiche dagli amministratori</mark>,{' '}
            <mark className="bg-yellow-200">votare a distanza</mark> per i provvedimenti e molto
            altro.
          </p>
          <p></p>
        </div>
      </div>
    </section>
    <section className="container mx-auto mt-20 py-24 bg-blue-200 sm:rounded-lg text-center">
      <div className="">
        <h3 className="text-2xl sm:text-3xl font-semibold">Ti piace l'idea? Faccelo sapere!</h3>
        <p className="mt-4 text-lg sm:text-xl font-light">
          Ricevi aggiornamenti sullo sviluppo e mostra il tuo supporto.
        </p>
        <input
          className="bg-gray-200 mt-4 py-3 px-2 text-green rounded-l focus:outline-none"
          placeholder="La tua migliore email..."
          type="text"
        />
        <Button className="mt-2" size="default">
          Tienimi aggiornato
        </Button>
      </div>
    </section>
  </Layout>
);
