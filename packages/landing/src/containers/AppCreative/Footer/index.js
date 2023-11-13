import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';

import { footerWidget } from 'common/data/AppCreative';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade direction='up' triggerOnce delay={100}>
              <NextImage src={footerWidget.logo} alt="Logo" />
              <p>
                © 2020 Team
                <Link href={footerWidget.siteUrl}>
                  {footerWidget.siteName}
                </Link>
              </p>
              <Text className="copyright" content="All rights reserved." />
              <Nav className="social__share">
                {footerWidget.socialLinks.map((item) => (
                  <Link key={item.id} href={item.link} className={item.name}>
                    {item.icon}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade direction='up' triggerOnce delay={200}>
              <Heading as="h4" content={footerWidget.aboutUs.title} />
              <Nav>
                {footerWidget.aboutUs.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade direction='up' triggerOnce delay={300}>
              <Heading as="h4" content={footerWidget.ourInformation.title} />
              <Nav>
                {footerWidget.ourInformation.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade direction='up' triggerOnce delay={400}>
              <Heading as="h4" content={footerWidget.myAccount.title} />
              <Nav>
                {footerWidget.myAccount.menuItems.map((item) => (
                  <Link key={item.id} href={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
