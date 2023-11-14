import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import { featureOne } from 'common/data/AppCreative';

const FeatureOne = () => {
  const { title, thumb, features } = featureOne;
  return (
    <SectionWrapper>
      <TextWrapper className="w-full">
        <Heading
          content={'How It Works'}
          as={'h2'}
          className="flex items-center justify-center text-center block mx-auto"
        />
      </TextWrapper>
      <Container>
        <ThumbWrapper>
          <NextImage
            src={thumb}
            alt="App Image"
          />
        </ThumbWrapper>

        <TextWrapper>
          <Heading content={title} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={
                <Text
                  as="span"
                  content={'0' + item.id}
                />
              }
              title={
                <Heading
                  as="h3"
                  content={item.title}
                />
              }
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureOne;
