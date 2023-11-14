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
              content="Terms & Condition"
              className="!mt-12"
            />
          </Fade>
        </SectionHeader>
        <div>
          <p className=" text-left block mx-auto">
            Welcome to Calorieasy! Before you start using our app, please read and understand the following terms and
            conditions. By using Calorieasy, you agree to abide by these terms.
          </p>
        </div>
        <section className="mt-12">
          <ol className="list-decimal pl-4 mb-6">
            <li className="mb-4">
              <strong>Data Storage:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy is designed to store your data locally on your device. We do not collect or store any of
                  your personal data on our servers or any external storage. Your data remains under your control and
                  responsibility.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Use of the App:</strong>
              <ul className="list-disc pl-6">
                <li>
                  You may use Calorieasy for personal use in accordance with these terms and any applicable laws and
                  regulations.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Prohibited Activities:</strong>
              <ul className="list-disc pl-6">
                <li>
                  While using Calorieasy, you agree not to engage in any illegal, unauthorized, or harmful activities
                  that could disrupt the app's functionality or the experience of other users.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Liability:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy is provided "as is" and "as available." We do not make any warranties, express or implied,
                  regarding the app's accuracy, reliability, or suitability for a particular purpose. We shall not be
                  liable for any damages or losses incurred while using the app.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Modifications:</strong>
              <ul className="list-disc pl-6">
                <li>
                  We reserve the right to modify or discontinue Calorieasy at any time. We may also update these terms
                  as needed. Any significant changes will be communicated to users.
                </li>
              </ul>
            </li>

            <li>
              <strong>Contact Us:</strong>
              <ul className="list-disc pl-6">
                <li>
                  If you have any questions or concerns regarding these terms or the use of Calorieasy, please contact
                  us at{' '}
                  <a
                    href="mailto:support@calorieasy.app"
                    className="text-blue-500"
                  >
                    support@calorieasy.app
                  </a>
                  .
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
