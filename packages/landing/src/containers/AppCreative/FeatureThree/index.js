import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import { featureThree } from 'common/data/AppCreative';

const FeatureThree = () => {
  const { title, thumb, features } = featureThree;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper className="mx-auto mb-5 md:m-0 order-2 md:order-1 md:ml-8">
          <NextImage
            src={thumb}
            alt="App Image"
          />
        </ThumbWrapper>

        <TextWrapper>
          <Heading
            content={title}
            className="text-center md:text-left"
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
      </Container>
    </SectionWrapper>
  );
};

export default FeatureThree;
