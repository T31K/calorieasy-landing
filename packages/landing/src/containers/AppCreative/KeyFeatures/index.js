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
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade direction='up' triggerOnce>
            <Heading content={title} />
            <Text content={slogan} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade direction='up' triggerOnce delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                icon={
                  <Fragment>
                    <NextImage src={item.icon} alt={item.title} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
