import React, { Fragment } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appCreative.style';
import { SectionWrapper, FeatureWrapper } from './keyFeatures.style';

import { keyFeatures } from 'common/data/AppCreative';
import { Fade } from 'react-awesome-reveal';

const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper
      id="keyFeatures"
      className=""
    >
      <Container>
        <SectionHeader className="w-full">
          <Fade
            direction="up"
            triggerOnce
          >
            <Heading
              content="Refund Policy"
              className="!mt-12"
            />
          </Fade>
        </SectionHeader>
        <div>
          <p className=" text-left block mx-auto">
            Thank you for using Calorieasy! We value your satisfaction and want to ensure you have a positive experience
            with our app. Please read our refund policy carefully to understand how refunds are handled.
          </p>
        </div>
        <section className="mt-12">
          <ol className="list-decimal pl-4 mb-6">
            <li className="mb-4">
              <strong>Free Download:</strong>
              <ul className="list-disc pl-6">
                <li>Calorieasy is free to download and use with limited features available to all users.</li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Upgraded Features:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Users have the option to upgrade to a premium version of Calorieasy. The premium version provides
                  enhanced features and access to updates for a duration of one year from the date of purchase.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Refund Eligibility:</strong>
              <ul className="list-disc pl-6">
                <li>
                  We offer a 100% satisfaction guarantee. If you are not completely satisfied with your purchase of the
                  premium version, you can request a refund within 14 days of the purchase date. We will refund 100%,{' '}
                  <strong>no questions asked.</strong>
                </li>
              </ul>
            </li>

            <li>
              <strong>How to Request a Refund:</strong>
              <ul className="list-disc pl-6">
                <li>
                  To request a refund, please contact our support team at{' '}
                  <a
                    href="mailto:support@calorieasy.app"
                    className="text-blue-500"
                  >
                    contact@calorieasy.app
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
