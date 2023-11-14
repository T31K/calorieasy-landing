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
              content="Privacy Policy"
              className="!mt-12"
            />
          </Fade>
        </SectionHeader>
        <div>
          <p className=" text-left block mx-auto">
            This Privacy Policy outlines how Calorieasy (the App) collects, uses, and safeguards personal information of
            its users. Calorieasy is designed to assist users in tracking their calorie intake using AI technology. By
            using the App, you agree to the collection and utilization of your personal information as described in this
            Privacy Policy."
          </p>
        </div>
        <section class="mt-12">
          <ol className="list-decimal pl-4 mb-6">
            <li className="mb-4">
              <strong>Information Collection and Use:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy collects and uses the following information to provide calorie tracking services and
                  improve user experience:
                  <ul className="list-disc pl-6">
                    <li>
                      Personal Information: The App may collect personal information, such as your name and age, to
                      tailor calorie tracking recommendations to your specific needs.
                    </li>
                    <li>
                      Food and Nutrition Data: Calorieasy may collect data about the foods you log to calculate calorie
                      intake accurately and offer nutritional insights.
                    </li>
                    <li>
                      Location Data (Optional): If you grant location permissions, the App may collect your location
                      data to provide localized nutritional information and restaurant suggestions.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Data Security:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy employs reasonable security measures to protect collected personal information from
                  unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or
                  electronic storage is entirely secure, and thus, absolute security cannot be guaranteed.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Third-Party Services:</strong>
              <ul className="list-disc pl-6">
                <li>
                  The App may use third-party services for various purposes, such as data analysis and AI functionality.
                  These services may have their own privacy policies governing the handling of personal information. We
                  encourage you to review these third-party privacy policies.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Data Retention:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy retains your personal information only for as long as necessary to provide calorie tracking
                  services. If you decide to delete your account, your personal information will be promptly removed
                  from our records.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Information Sharing:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy does not share or sell your personal information with third parties without your explicit
                  consent, except as required by applicable laws.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Children's Privacy:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy does not knowingly collect personal information from individuals under the age of 13. If we
                  become aware of such information collected without appropriate consent, we will take steps to delete
                  it promptly.
                </li>
              </ul>
            </li>

            <li className="mb-4">
              <strong>Changes to the Privacy Policy:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Calorieasy may update this Privacy Policy periodically. We will inform users of significant changes
                  through prominent notices within the App or by sending notifications to registered email addresses.
                </li>
              </ul>
            </li>

            <li>
              <strong>Contact Us:</strong>
              <ul className="list-disc pl-6">
                <li>
                  If you have questions or concerns regarding this Privacy Policy or Calorieasy's privacy practices,
                  please reach out to us at{' '}
                  <a
                    href="mailto:contact@calorieasy.app"
                    className="text-blue-500"
                  >
                    contact@calorieasy.app
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
