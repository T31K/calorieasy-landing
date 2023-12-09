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
import illustration from 'common/assets/image/appCreative/shapeLeft2.png';
import illustration2 from 'common/assets/image/appCreative/shapeRight2.png';
import bannerImgMobile from 'common/assets/image/appCreative/availableThumb.png';
import { Fade } from 'react-awesome-reveal';
import VideoDialog from 'common/components/Dialog/videoDialog';
import { SectionBgArea } from '../Pricing/pricing.style';
import Link from 'common/components/Link';
const Banner = () => {
  return (
    <BannerWrapper id="home">
      <SectionBgArea className="h-[100vh] opacity-[60%] hidden md:block">
        <div className="shape-one">
          <NextImage
            src={illustration}
            alt="Shape"
          />
        </div>
        <div className="shape-two">
          <NextImage
            src={illustration2}
            alt="Shape"
          />
        </div>
      </SectionBgArea>
      <Container>
        <BannerContent>
          <NextImage
            src={mobileBanner}
            alt="Mobile Banner"
            className="!w-[full] block md:hidden mb-5 "
          />
          <Fade
            direction="up"
            delay={100}
          >
            <Heading
              as="h1"
              className="whitespace-nowrap text-center md:text-left"
              content="Track calories with AI"
            />
          </Fade>
          <Fade
            direction="up"
            delay={300}
          >
            <Text
              content="Snap a photo & viola!"
              className="!mt-[-10px] text-center md:text-left "
            />
            <ButtonGroup className="mt-4 flex justify-center md:block">
              <Link href="https://track.calorieasy.app/">
                <Button
                  className="scale-[1.2] ml-5 mb-4 !rounded-xl !text-gray-900 font-bold w-[200px] bg-[#58F168]"
                  title="Track calories now!"
                  href="https://apps.apple.com/sg/app/calorieasy-calorie-counter/id6471479401"
                />
              </Link>
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
        <BannerImage className="!absolute top-[8%] right-[-300px] w-[80%]">
          <NextImage
            src={bannerImg}
            alt="Banner"
            className="mt-[50px] z-[999]"
          />
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
