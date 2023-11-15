import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import { featureTwo } from 'common/data/AppCreative';

const FeatureTwo = () => {
  const { title, thumb, features } = featureTwo;
  return (
    <SectionWrapper>
      <Container className="justify-end">
        <TextWrapper>
          <Heading content={title} />
          {features.map((item) => (
            <div className="flex flex-col mb-6">
              <Heading
                as="h3"
                className="mb-0"
                content={item.title}
              />
              <p>{item.description}</p>
            </div>
          ))}
        </TextWrapper>
        <ThumbWrapper>
          <NextImage
            src={thumb}
            alt="App Image"
          />
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureTwo;
