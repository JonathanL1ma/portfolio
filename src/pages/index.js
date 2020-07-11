import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <Layout>
      <Helmet title="Jonathan Lima | Portfolio" />
      <Header />
      <Landing />
      <About />
      <Projects />
  </Layout>
);

export default IndexPage;
