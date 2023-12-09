import React, { useState, useEffect } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import { SectionHeader } from '../appCreative.style';
import illustration from 'common/assets/image/appCreative/shapeLeft2.png';
import illustration2 from 'common/assets/image/appCreative/shapeRight2.png';

import { MdClear, MdCheck } from 'react-icons/md';

//

import SectionWrapper, {
  SectionBgArea,
  ContentWrapper,
  ContentPricing,
  PriceTable,
  PricingFeature,
  FeatureItem,
  ContentWrap,
  ButtonWrap,
} from './pricing.style';
import { pricing } from 'common/data/AppCreative';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Pricing = () => {
  const size = process.browser && useWindowSize();
  const isTablet = Boolean(size.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState(0);
  const { slogan, title, pricingFeature, pricingItems } = pricing;

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader className="text-gray-800">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="text-center py-10 ">
              <div className="rounded-full h-48 w-48 bg-green-200 mx-auto flex items-center justify-center">
                <span className="text-6xl text-green-600">✓</span>
              </div>
            </div>
          </div>
          <Heading
            content={'Success! '}
            className="!text-green-500"
          />

          <p>
            We received your purchase and is processing your your order. <br /> Refresh your app shortly to enjoy
            premium features
          </p>
        </SectionHeader>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
