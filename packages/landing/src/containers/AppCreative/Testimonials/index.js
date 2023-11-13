import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialItemInner,
  TestimonialHead,
  AuthorImage,
} from './testimonial.style';
import { testimonial } from 'common/data/AppCreative';
import { MasonryGrid } from '@egjs/react-grid';

const TestimonialSection = () => {
  const { slogan, title, reviews } = testimonial;
  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <TestimonialWrapper>
          <MasonryGrid
            className="container"
            defaultDirection={"end"}
            align={"justify"}
            column={0}
            columnSize={0}
            columnSizeRatio={0}
            onRenderComplete={e => {
              console.log(e);
            }}
          >
            {reviews.map((item) => (
              <TestimonialItem key={`testimonial-item-${item.id}`}>
                <TestimonialItemInner>
                  <TestimonialHead>
                    <AuthorImage>
                      <NextImage src={item.avatar} alt={item.name} />
                    </AuthorImage>
                    <Box>
                      <Heading as="h3" content={item.name} />
                      <Text content={item.designation} />
                    </Box>
                    <Link href="#">
                      <Icon icon={twitter} size={24} />
                    </Link>
                  </TestimonialHead>
                  <Text content={item.description} />
                </TestimonialItemInner>
              </TestimonialItem>
            ))}
          </MasonryGrid>
        </TestimonialWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialSection;
