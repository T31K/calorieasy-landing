import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  ContentWrapper,
  MasonryItem,
  FaqItem,
} from './faq.style';
import { faq } from 'common/data/AppCreative';
import { MasonryGrid } from '@egjs/react-grid';

const Faq = () => {
  const { slogan, title, faqs } = faq;
  return (
    <SectionWrapper id="faq">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ContentWrapper>
          <MasonryGrid
            className="container"
            defaultDirection={"end"}
            align={"justify"}
          >
            {faqs.map((faq) => (
              <MasonryItem className={"item"} id={faq.id} key={faq.id}>
                <FaqItem>
                  <Heading as="h4" content={faq.question} />
                  <Text content={faq.answer} />
                </FaqItem>
              </MasonryItem>
            ))}
          </MasonryGrid>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
