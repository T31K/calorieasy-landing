import React, { useState } from 'react';
// import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, { ImageGalleryWrap, FeatureContactWrapper, FeatureItemWrapper } from './featureSlider.style';

import { features } from 'common/data/AppCreative';

// SwiperCore.use([Thumbs, Autoplay]);

const FeatureSlider = () => {
  const { slogan, title, items } = features;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>

        <FeatureContactWrapper>
          <FeatureItemWrapper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={0}
              centeredSlides={true}
              slidesPerView="auto"
              touchRatio="0.2"
              slideToClickedSlide={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              watchSlidesProgress={true}
              modules={[Autoplay, Thumbs]}
            >
              {items.map((item) => (
                <SwiperSlide
                  className="feature__outer"
                  key={`feature-key${item.id}`}
                >
                  <FeatureBlock
                    iconPosition="left"
                    icon={item.id}
                    title={
                      <Heading
                        as="h3"
                        content={item.title}
                      />
                    }
                    description={<Text content={item.description} />}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </FeatureItemWrapper>
        </FeatureContactWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSlider;
