import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appCreative';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppCreative/Navbar';
import Banner from 'containers/AppCreative/Banner';
import KeyFeatures from 'containers/AppCreative/KeyFeatures';
import Experiences from 'containers/AppCreative/Experience';
import AsSeenOn from 'containers/AppCreative/AsSeenOn';
import FeatureOne from 'containers/AppCreative/FeatureOne';
import FeatureTwo from 'containers/AppCreative/FeatureTwo';
import FeatureThree from 'containers/AppCreative/FeatureThree';
import Pricing from 'containers/AppCreative/Pricing';
import Testimonials from 'containers/AppCreative/Testimonials';
import AvailableStore from 'containers/AppCreative/AvailableStore';
import Faqs from 'containers/AppCreative/Faq';
import CallToAction from 'containers/AppCreative/CallToAction';
import FeatureSlider from 'containers/AppCreative/FeatureSlider';
import Footer from 'containers/AppCreative/Footer';
import GlobalStyle, { AppWrapper, ContentWrapper } from 'containers/AppCreative/appCreative.style';

export default function AppCreative() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Calorieasy | Track calories in seconds with AI</title>
          <meta
            name="Description"
            content="Track calories in seconds with AI"
          />
          <meta
            name="theme-color"
            content="#6C247E"
          />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Creative landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans"
            rel="stylesheet"
          ></link>
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        {/* end of head */}
        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}
        {/* start app creative landing */}
        <AppWrapper>
          <Sticky
            top={0}
            innerZ={9999}
            activeClass="sticky-active"
          >
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/* <KeyFeatures /> */}
            <AsSeenOn />
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />
            {/* <Experiences /> */}
            {/* <FeatureSlider /> */}
            <Pricing />
            {/* <Testimonials /> */}
            <AvailableStore />
            <Faqs />
            <CallToAction />
          </ContentWrapper>
          <Footer />
        </AppWrapper>{' '}
        {/* end of app creative landing */}
      </Fragment>
    </ThemeProvider>
  );
}
