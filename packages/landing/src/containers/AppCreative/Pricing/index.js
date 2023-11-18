import React, { useState, useEffect } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import { SectionHeader } from '../appCreative.style';
import illustration from 'common/assets/image/appCreative/shapeLeft2.png';
import illustration2 from 'common/assets/image/appCreative/shapeRight2.png';
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
  const { slogan, title, pricingFeature, pricingItems } = pricing;

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader className="text-gray-800">
          <Heading content={'Pricing '} />
          <Text content={'Upgrade for the best experience!'} />
        </SectionHeader>
        <ContentWrapper>
          <ContentPricing>
            {!isTablet && (
              <PricingFeature>
                {pricingFeature.map((feature) => (
                  <FeatureItem key={feature.id}>{feature.name}</FeatureItem>
                ))}
              </PricingFeature>
            )}
            {pricingItems.map((priceTable) => (
              <PriceTable
                key={priceTable.id}
                className={priceTable.isRecommended && 'isRecommended'}
              >
                {priceTable.isRecommended && <div className="recommended">Recommended</div>}

                <h2 className="title">{priceTable.package_name}</h2>
                <div className="price">{priceTable.price}</div>
                <ul className="featureList">
                  {priceTable.features.map((feature) => (
                    <FeatureItem key={feature.id}>
                      {isTablet ? (
                        feature.isAvailable ? (
                          feature.name
                        ) : (
                          <Icon
                            icon={closeCircled}
                            size={18}
                            style={{ color: '#CED7E1' }}
                          />
                        )
                      ) : feature.isAvailable ? (
                        feature?.custom ? (
                          <>Limited</>
                        ) : (
                          <Icon
                            icon={ic_check_circle}
                            size={18}
                            style={{ color: '#3CC68A' }}
                          />
                        )
                      ) : (
                        <Icon
                          icon={closeCircled}
                          size={18}
                          style={{ color: '#CED7E1' }}
                        />
                      )}
                    </FeatureItem>
                  ))}
                </ul>
                <Button
                  title="Upgrade now"
                  className={`${!priceTable.isRecommended && 'primaryOutlined'} choosePlan`}
                />
                <p className="trial invisible h-[17px]">{priceTable.trial_day} days free trial</p>
              </PriceTable>
            ))}
          </ContentPricing>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
