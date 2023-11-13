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
import bannerImgMobile from 'common/assets/image/appCreative/availableThumb.png';
import { Fade } from 'react-awesome-reveal';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Banner = () => {

  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade direction='up' delay={100}>
            <Heading
              as="h1"
              content="Your trusted mobile app to make days beautiful 😘"
            />
          </Fade>
          <Fade direction='up' delay={200}>
            <Text content="There will be a day–in our lifetime–when we get to celebrate every person on the planet having access." />
          </Fade>
          <Fade direction='up' delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start 14-days free trail" />
              <div>
                <VideoDialog
                  label={
                    <Button
                      className="text"
                      variant="textButton"
                      icon={<Icon icon={playCircle} />}
                      iconPosition="left"
                      title="Our Interviews"
                    />
                  }
                  content={
                    <div style={{ margin: 'auto' }}>
                      <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  }
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <NextImage src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <NextImage src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
