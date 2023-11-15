import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

import bannerImg from 'common/assets/image/appCreative/bannerImg.png';
import mobileBanner from 'common/assets/image/features/feature_2.png';
import appStoreImg from 'common/assets/image/app_store.png';
import googlePlayImg from 'common/assets/image/google_play.png';
import bannerImgMobile from 'common/assets/image/appCreative/availableThumb.png';
import { Fade } from 'react-awesome-reveal';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <NextImage
            src={mobileBanner}
            alt="Mobile Banner"
            className="!w-[150vw] block md:hidden mb-5"
          />
          <Fade
            direction="up"
            delay={100}
          >
            <Heading
              as="h1"
              content="Track calories in seconds with AI"
            />
          </Fade>
          <Fade
            direction="up"
            delay={300}
          >
            <Text
              content="Wave your phone over your food, snap a photo & viola!"
              className="!mt-[-10px]"
            />
            <ButtonGroup className="mt-4 flex justify-center md:block">
              <Button
                className="primary !rounded-xl !text-gray-900 font-bold w-[200px]"
                title="Track calories now!"
              />
            </ButtonGroup>
            <p className="!text-sm ml-1 mt-1.5 text-center md:text-left">Free To Try (No credit card required)</p>
          </Fade>
          {/* <Fade
            direction="up"
            delay={200}
          >
            <div className="flex items-center gap-2 mt-3">
              <NextImage
                src={appStoreImg}
                alt="App Store"
                height={59}
              />
              <NextImage
                src={googlePlayImg}
                alt="App Store"
                height={60}
              />
            </div>
          </Fade> */}
          {/* <div className="absolute inset-0 overflow-hidden">
            <div className="jumbo absolute -inset-[10px] opacity-20"></div>
          </div> */}
        </BannerContent>
        <BannerImage>
          <NextImage
            src={bannerImg}
            alt="Banner"
            className="mt-[50px]"
          />
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
