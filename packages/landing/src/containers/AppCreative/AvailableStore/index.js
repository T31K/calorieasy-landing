import React from 'react';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Select from 'common/components/Select';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import barCodeImg from 'common/assets/image/qr.png';
import downloadPhoneImg from 'common/assets/image/download_phone.png';
import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
  Subscribe,
  SubscribeField,
  BarCodeArea,
} from './availableStore.style';

import { availableStore } from 'common/data/AppCreative';
import { Fade } from 'react-awesome-reveal';

const AvailableStore = () => {
  const { title, description, thumb, numberPrefix } = availableStore;
  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <Heading
            content={title}
            as={'h2'}
          />
          <Text content={'Scan the code below to download!'} />
          {/* <Subscribe>
            <SubscribeField>
              <Select
                options={numberPrefix}
                placeholder="+14"
                className="phone_search_select"
                aria-label="select options"
              />
              <Input
                inputType="text"
                placeholder="Phone Number"
                iconPosition="left"
                aria-label="number"
              />
            </SubscribeField>
            <Button
              title="Send"
              type="submit"
            />
          </Subscribe> */}
          <div className="flex gap-4">
            <BarCodeArea className="flex flex-col items-center justify-center relative">
              <NextImage
                src={barCodeImg}
                className="bg-green-200 p-1.5 rounded-lg blur-[2px]"
                width={170}
                height={170}
                alt="Scan"
              />
              <div className="absolute rotate-[-30deg] px-4 rounded-lg top-[70px] bg-green-500">Coming Soon</div>
              <p className="mt-5">Google Play Store</p>
            </BarCodeArea>
            <BarCodeArea className="flex flex-col items-center justify-center relative">
              <NextImage
                src={barCodeImg}
                className="bg-blue-200 p-1.5 rounded-lg blur-[2px]"
                width={170}
                height={170}
                alt="Scan"
              />
              <div className="absolute rotate-[-30deg] px-4 rounded-lg top-[70px] bg-blue-500">Coming Soon</div>
              <p className="mt-5">iOS App Store</p>
            </BarCodeArea>
          </div>
        </TextWrapper>
        <ThumbWrapper>
          <Fade
            direction="right"
            triggerOnce
          >
            <NextImage
              src={downloadPhoneImg}
              alt="App Image"
            />
          </Fade>
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AvailableStore;
