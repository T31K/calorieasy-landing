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
        <TextWrapper className="md:order-2">
          <Heading
            content={'Snap a photo'}
            className="text-center md:text-left mt-7 md:mt-0"
          />
          {features.map((item) => (
            <div className="flex flex-col mb-6">
              <Heading
                as="h3"
                className="mb-0 ml-8 mt-5 md:ml-0 md:mt-0"
                content={item.title}
              />
              <p className="w-[80%] ml-8 md:ml-0">{item.description}</p>
            </div>
          ))}
        </TextWrapper>
        <ThumbWrapper className="mx-auto mb-5 md:m-0 md:order-1 md:mr-8">
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
