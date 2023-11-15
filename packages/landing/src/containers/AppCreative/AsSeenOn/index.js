import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import { featureOne } from 'common/data/AppCreative';
import productHuntImg from 'common/assets/image/logos/ph.png';
import redditImg from 'common/assets/image/logos/reddit.png';
import indieHackerImg from 'common/assets/image/logos/ih.png';
const FeatureOne = () => {
  const { title, thumb, features } = featureOne;
  return (
    <SectionWrapper className="pt-[80px] md:pt-5">
      <TextWrapper className="w-full">
        <Heading
          content={'As Seen On'}
          as={'h2'}
          className="flex items-center justify-center text-center block mx-auto !mb-0"
        />
      </TextWrapper>
      <Container>
        <ThumbWrapper className="flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-8 md:py-4">
          <NextImage
            className="w-[200px] grayscale"
            src={productHuntImg}
            alt="App Image"
          />
          <NextImage
            className="w-[200px] mt-5 md:mt-0 grayscale"
            src={indieHackerImg}
            alt="App Image"
          />
          <NextImage
            className="w-[150px] md:w-[200px] grayscale"
            src={redditImg}
            alt="App Image"
          />
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureOne;
