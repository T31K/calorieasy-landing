import React from 'react';
import Logo from 'common/components/UIElements/Logo';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { SectionHeader } from '../appCreative.style';
import FeatureBlock from 'common/components/FeatureBlock';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './experience.style';
import { experiences } from 'common/data/AppCreative';
import VideoDialog from 'common/components/Dialog/videoDialog';

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;

  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ExperienceMainWrap>
          <VideoDialog
            label={
              <VideoArea>
                <NextImage src={video_theme} alt="Microsoft" />
                <Button
                  className="video__btn"
                  icon={<Icon className="plus" icon={ic_play_arrow} />}
                />
              </VideoArea>
            }
            content={
              <div style={{ margin: 'auto' }}>
                <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            }
          />
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <NextImage
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    objectFit="cover"
                    className="experience__image"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={'Companies who worked with us proudly'} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
