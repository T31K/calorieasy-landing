import React, { useState, useEffect } from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import Button from 'common/components/Button';
import { SectionHeader } from '../appCreative.style';
import illustration from 'common/assets/image/appCreative/shapeLeft2.png';
import illustration2 from 'common/assets/image/appCreative/shapeRight2.png';

import { MdClear, MdCheck } from 'react-icons/md';

//

import SectionWrapper, {
  SectionBgArea,
  ContentWrapper,
  ContentPricing,
  PriceTable,
  PricingFeature,
  FeatureItem,
  ContentWrap,
  ButtonWrap,
} from './pricing.style';
import { pricing } from 'common/data/AppCreative';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Pricing = () => {
  const size = process.browser && useWindowSize();
  const isTablet = Boolean(size.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState(0);
  const { slogan, title, pricingFeature, pricingItems } = pricing;

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader className="text-gray-800">
          <Heading content={'Pricing '} />
          <Text content={'Upgrade for the best experience!'} />
        </SectionHeader>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto hidden md:flex md:justify-center">
            <div class="custom-container w-[50%] !p-0 !bg-transparent !border-none ">
              <div class="relative group">
                <div class="relative px-7 py-6 bg-[#fff] ring-1 ring-gray-900/5 rounded-[20px] leading-none flex items-top justify-start space-x-6">
                  <div>
                    <p className="uppercase text-sm font-medium text-gray-500">Free</p>

                    <div className="mt-4 text-4xl text-gray-700 font-medium">
                      <div className="price-wrapper">
                        {/* <div className="price-slash"></div> */}
                        <p className="price text-4xl font-bold">$0</p>
                      </div>
                      {/* <span className="price ml-3">$29</span> */}
                    </div>

                    <p className="mt-4 font-medium text-gray-700">per month</p>

                    <div className="mt-8">
                      <ul className="grid grid-cols-1 gap-4">
                        <li className="inline-flex items-center text-gray-900 font-semibold">AI calorie counting</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          3 requests per day
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Normal accuracy
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Normal counting speed
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdClear className="bg-red-100 text-red-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Macros breakdown
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Meal logging</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Log food automatically
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdClear className="bg-red-100 text-red-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          View macros breakdown
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Support</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Basic support
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Updates </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Normal access to features
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 ">
                      <div className="flex flex-col gap-1">
                        <a
                          target="_blank"
                          href="https://buy.stripe.com/5kA6qr7ZYftyb5efZ3"
                          className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                        >
                          Upgrade via Stripe
                        </a>
                        <p className="text-center">Use your linked email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="custom-container w-[50%] !p-0 !bg-transparent !border-none ">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-100 group-hover:duration-200"></div>
                <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-[20px] leading-none flex items-top justify-start space-x-6">
                  <div>
                    <p className="uppercase text-sm font-medium text-gray-500">Premium</p>

                    <div className="mt-4 text-4xl text-gray-700 font-medium">
                      <div className="price-wrapper">
                        {/* <div className="price-slash"></div> */}
                        <p className="price text-4xl font-bold">$5.99</p>
                      </div>
                      {/* <span className="price ml-3">$29</span> */}
                    </div>

                    <p className="mt-4 font-medium text-gray-700">per month</p>

                    <div className="mt-8">
                      <ul className="grid grid-cols-1 gap-4">
                        <li className="inline-flex items-center text-gray-900 font-semibold">AI calorie counting</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Unlimited requests
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Highest accuracy
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Faster counting speed
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Macros breakdown
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Meal logging</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Log food automatically
                        </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          View macros breakdown
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Support</li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Priority support
                        </li>
                        <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Updates </li>
                        <li className="inline-flex items-center text-gray-600">
                          <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                          Priority access to features
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 ">
                      <div className="flex flex-col gap-1">
                        <a
                          target="_blank"
                          href="https://buy.stripe.com/5kA6qr7ZYftyb5efZ3"
                          className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                        >
                          Upgrade via Stripe
                        </a>
                        <p className="text-center">Use your linked email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 mx-auto flex md:hidden">
            <div className="flex justify-around">
              <p
                className={`custom-container-tab  text-sm text-center font-medium text-gray-500 !text-xl border-1 ${
                  activeTab === 0 ? '!border-b-0 text-green-500' : ''
                } pt-3 bg-[#fafafa] w-full`}
                onClick={() => setActiveTab(0)}
              >
                Free
              </p>
              <p className=" custom-container-tab-between text-sm font-medium text-gray-400 !text-xl border-1 pt-3 bg-[#fafafa] w-[30px] "></p>
              <p
                className={`custom-container-tab  text-sm text-center font-semibold text-gray-500 !text-xl border-1 ${
                  activeTab === 1 ? '!border-b-0 text-green-500' : ''
                } pt-3 bg-[#fafafa] w-full`}
                onClick={() => setActiveTab(1)}
              >
                Premium
              </p>
            </div>
            {activeTab === 0 ? (
              <div className="custom-container-mobile opacity-[85%]">
                <div className="mt-4 text-4xl text-gray-500 font-medium">
                  <div className="price-wrapper">
                    {/* <div className="price-slash"></div> */}
                    <p className="price text-4xl font-bold">$0</p>
                  </div>
                  {/* <span className="price ml-3">$29</span> */}
                </div>

                <p className="mt-4 font-medium text-gray-600">Free to use</p>

                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex items-center text-gray-900 font-semibold">AI calorie counting</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />3
                      scans per day
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Normal accuracy
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Normal counting speed
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdClear className="bg-red-100 text-red-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Macros breakdown
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Meal logging</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Log food automatically
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdClear className="bg-red-100 text-red-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      View macros breakdown
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Support</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Basic support
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Updates </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-yellow-100 text-yellow-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Normal access to features
                    </li>
                  </ul>
                </div>

                <div className="mt-8 ">
                  <div className="flex flex-col gap-1">
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/5kA6qr7ZYftyb5efZ3"
                      className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Upgrade via Stripe
                    </a>
                    <p className="text-center">Use your linked email</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="custom-container-mobile ">
                <div className="mt-4 text-4xl text-gray-700 font-medium">
                  <div className="price-wrapper">
                    {/* <div className="price-slash"></div> */}
                    <p className="price text-4xl font-bold">$5.99</p>
                  </div>
                  {/* <span className="price ml-3">$29</span> */}
                </div>

                <p className="mt-4 font-medium text-gray-700">Monthly </p>

                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex items-center text-gray-900 font-semibold">AI calorie counting</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Unlimited scans
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Highest accuracy
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Faster scan speed
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Macros breakdown
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Meal logging</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Log food automatically
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      View macros breakdown
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Support</li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Priority support
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Updates </li>
                    <li className="inline-flex items-center text-gray-600">
                      <MdCheck className="bg-green-100 text-green-500 text-2xl font-bold mr-2 rounded-full p-1" />
                      Priority access to features
                    </li>
                  </ul>
                </div>

                <div className="mt-8 ">
                  <div className="flex flex-col gap-1">
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/5kA6qr7ZYftyb5efZ3"
                      className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Upgrade via Stripe
                    </a>
                    <p className="text-center">Use your linked email</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
