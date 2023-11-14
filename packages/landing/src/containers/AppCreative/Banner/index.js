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
            delay={200}
          >
            <Text
              content="Wave your phone over your food, snap a photo & viola!"
              className="!mt-[-10px]"
            />
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
          </Fade>
          <Fade
            direction="up"
            delay={300}
          >
            <ButtonGroup>
              <Button
                className="primary !rounded-xl font-bold mb-[80px]"
                title="Coming soon!"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <NextImage
            src={bannerImg}
            alt="Banner"
          />
        </BannerImage>
        <BannerImageMobile>
          <NextImage
            src={bannerImgMobile}
            alt="Mobile Banner"
          />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
