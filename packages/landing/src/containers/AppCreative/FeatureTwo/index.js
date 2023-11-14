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
