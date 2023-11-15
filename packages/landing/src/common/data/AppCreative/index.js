/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from '../../assets/image/appCreative/logo.png';
export const navbar = {
  logoImage: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Features',
      path: '#features',
      offset: '73',
    },
    // {
    //   id: 3,
    //   label: 'Pricing',
    //   path: '#pricing',
    //   offset: '73',
    //  },
    // {
    //   id: 4,
    //   label: 'Client',
    //   path: '#testimonial',
    //   offset: '73',
    // },
    {
      id: 5,
      label: 'FAQ',
      path: '#faq',
      offset: '73',
    },
  ],
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from '../../assets/image/appCreative/key_feature/1.svg';
import keyFeature2 from '../../assets/image/appCreative/key_feature/2.svg';
import keyFeature3 from '../../assets/image/appCreative/key_feature/3.svg';
import keyFeature4 from '../../assets/image/appCreative/key_feature/4.svg';

export const keyFeatures = {
  title: 'Business start with great features',
  slogan:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: 'Make Snap real',
      description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      id: 2,
      icon: keyFeature2,
      title: 'Total Virtual Reality',
      description: 'We’re driven beyond just finishing the projects. We want to find smart online solutions.',
    },
    {
      id: 3,
      icon: keyFeature3,
      title: 'Full 360 View',
      description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
      id: 4,
      icon: keyFeature4,
      title: 'Artificial Intelligence',
      description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },
  ],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import featureOneThumb from '../../assets/image/features/feature_1.png';
import featureTwoThumb from '../../assets/image/features/feature_2.png';
import featureThreeThumb from '../../assets/image/features/feature_3.png';

export const chooseUs = {
  title: 'Why you choose Custom app for your daily use?',
  thumb: featureOneThumb,
  features: [
    {
      id: 1,
      title: 'Front-end Development',
      description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    },
    {
      id: 2,
      title: 'Front-end Development',
      description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    },
  ],
};

export const featureOne = {
  title: 'Set daily calorie goals',
  thumb: featureOneThumb,
  features: [
    {
      id: 1,
      title: 'Answer a few simple questions',
      description:
        "Just to understand your daily calorie intake, activity level and we'll calculate what's the recommended TDEE for you.",
    },
    {
      id: 2,
      title: 'Adjust if needed',
      description: 'After the questions, you can set the values to your preference.',
    },
  ],
};

export const featureTwo = {
  title: 'Wave the food over your food',
  thumb: featureTwoThumb,
  features: [
    {
      id: 1,
      title: 'Make sure food is clear and visible',
      description:
        'Use good lighting and make sure all portions are clearly visible. This helps the AI make a more accurate approximation.',
    },
    {
      id: 2,
      title: 'Click on the check button to confirm',
      description: "Our AI will then do its magic and we'll automatically log the food and their calorific information",
    },
  ],
};

export const featureThree = {
  title: 'Tracking made easy',
  thumb: featureThreeThumb,
  features: [
    {
      id: 1,
      title: 'Automatic timestamps',
      description: "We'll log based on whenever you snapped the food and add it to your daily goal. ",
    },
    {
      id: 2,
      title: 'Calendar view',
      description: 'The calendar view will have all your logs from any other day, ready to view.',
    },
  ],
};

/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */
import expIcon1 from '../../assets/image/appCreative/experience/1.png';
import expIcon2 from '../../assets/image/appCreative/experience/2.png';
import expIcon3 from '../../assets/image/appCreative/experience/3.png';
import expIcon4 from '../../assets/image/appCreative/experience/4.png';
import videoTheme from '../../assets/image/appCreative/experienceVideo.png';

// Client Logo
import geekwire from '../../assets/image/appCreative/client_logo/1.png';
import slack from '../../assets/image/appCreative/client_logo/2.png';
import envato from '../../assets/image/appCreative/client_logo/3.png';
import usaToday from '../../assets/image/appCreative/client_logo/4.png';
import forbes from '../../assets/image/appCreative/client_logo/5.png';
import evernote from '../../assets/image/appCreative/client_logo/6.png';

export const experiences = {
  title: 'Listen our user experience stories',
  slogan:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: expIcon1,
      title: 'Professional Environment',
      description:
        'We enjoy office retreats and visit famous places of our country and abroad also! We have planned to extend our business.',
    },
    {
      id: 2,
      icon: expIcon2,
      title: 'Worked with experienced team',
      description: 'With more than 100,000 users, we are is growing fast. Currently, we are a team of 65+ people',
    },
    {
      id: 3,
      icon: expIcon3,
      title: 'Ultimate skill development',
      description: 'Life is what happens when you’re busy working. We make sure you enjoy it with ultimate experience.',
    },
    {
      id: 4,
      icon: expIcon4,
      title: 'Professional Environment',
      description:
        'We build amazing things that work with awesome people who are WordPress enthusiasts, talented, eager to learn and team players.',
    },
  ],
  clients: [
    {
      id: 1,
      logo: geekwire,
      name: 'geekwire',
      link: '#1',
    },
    {
      id: 2,
      logo: slack,
      name: 'slack',
      link: '#2',
    },
    {
      id: 3,
      logo: envato,
      name: 'envato',
      link: '#3',
    },
    {
      id: 4,
      logo: usaToday,
      name: 'usa today',
      link: '#4',
    },
    {
      id: 5,
      logo: forbes,
      name: 'forbes',
      link: '#5',
    },
    {
      id: 6,
      logo: evernote,
      name: 'evernote',
      link: '#6',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import Image1 from '../../assets/image/appCreative/feature/slide1.png';
import Image2 from '../../assets/image/appCreative/feature/slide2.png';
import Image3 from '../../assets/image/appCreative/feature/slide3.png';
import Image4 from '../../assets/image/appCreative/feature/slide4.png';
import Image5 from '../../assets/image/appCreative/feature/slide5.png';
import Image6 from '../../assets/image/appCreative/feature/slide6.png';

export const features = {
  title: 'Meet our all exciting features',
  slogan:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
    {
      id: 2,
      thumbnail: Image2,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
    {
      id: 3,
      thumbnail: Image3,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
    {
      id: 4,
      thumbnail: Image4,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
    {
      id: 5,
      thumbnail: Image5,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
    {
      id: 6,
      thumbnail: Image6,
      title: 'Professional Environment',
      description: 'We enjoy office retreats and visit famous places of our country and abroad also.',
    },
  ],
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  title: 'Meet our exciting Pricing Plan',
  slogan: 'We designed our pricing plan with affordable price for users',
  pricingFeature: [
    {
      id: 1,
      name: 'Full Access Library',
    },
    {
      id: 2,
      name: 'Multiple user',
    },
    {
      id: 3,
      name: 'Refund Policy',
    },
    {
      id: 4,
      name: 'Google Analytics',
    },
    {
      id: 5,
      name: '24/7 support',
    },
  ],
  pricingItems: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Ultimate Pack',
      price: '35',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
import reviewer1 from '../../assets/image/appCreative/client/client-avatar-1.jpg';
import reviewer2 from '../../assets/image/appCreative/client/client-avatar-2.jpg';
import reviewer3 from '../../assets/image/appCreative/client/client-avatar-3.jpg';

export const testimonial = {
  title: 'What our clients say about us',
  slogan: 'Some inspirational feedback from our customers on twitter',
  reviews: [
    {
      id: 1,
      description:
        'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 2,
      description:
        '@redqteam is great for creating with landing pages within minutes! It then actually takes less time…',
      avatar: reviewer2,
      name: 'Gavin Park',
      designation: 'CEO at Orbital',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 3,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },

    {
      id: 4,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it. profitable and make it cool with fast loading experience & it make the site more customizable & fluent.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 5,
      description:
        'We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 6,
      description:
        'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. ',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
  ],
};

/* ------------------------------------ */
// Available Store data section
/* ------------------------------------ */
import availableThumb from '../../assets/image/appCreative/availableThumb.png';

export const availableStore = {
  title: 'Coming soon to both iOS App Store & Google App Store',
  description: '',
  thumb: availableThumb,
  numberPrefix: [
    {
      label: '+13',
      value: '13',
    },
    {
      label: '+14',
      value: '14',
    },
    {
      label: '+15',
      value: '15',
    },
    {
      label: '+16',
      value: '16',
    },
    {
      label: '+17',
      value: '17',
    },
    {
      label: '+18',
      value: '18',
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  title: 'Frequently Ask Question',
  slogan: 'What are you looking for and find the solution on our FAQ page',
  faqs: [
    {
      id: 1,
      question: 'What is Calorieasy',
      answer:
        "Calorieasy is a mobile app designed to help you track your calorie intake effortlessly. Utilizing advanced AI technology, it allows you to scan your food items, which the app then analyzes to estimate the calorie content. This information is automatically logged, making it easier for you to keep track of your dietary intake and manage your nutritional goals. The app's intuitive interface and AI-driven analysis simplify the process of calorie counting and dietary management.",
    },
    {
      id: 2,
      question: 'How does it work??',
      answer:
        'Calorieasy works by employing cutting-edge image recognition technology. When you scan your food using the app, the AI model then analyzes the image to estimate the calorie content. This process involves identifying the food items in the picture and calculating their approximate calorie values based on a comprehensive food database. The calculated data is then automatically logged in your app, allowing you to track your calorie intake easily and accurately.',
    },
    {
      id: 3,
      question: 'What will I get when I upgrade to premium',
      answer:
        'When you purchase this app, you will be entitled to enjoy all premium features, as well as all future updates for 1 year.',
    },
    {
      id: 4,
      question: 'How to upgrade my app to premium?',
      answer:
        "To upgrade your app to premium, simply go to the 'Profile' tab within the app and click on 'Upgrade.' Please note, we never ask for payment details directly; all transactions are securely processed through the official payment methods provided by the App Store for iOS devices and the Google Play Store",
    },
    {
      id: 5,
      question: 'How to update my app?',
      answer:
        "iOS: Open the App Store on your iOS device. Tap on your profile icon at the top of the screen. Scroll to see pending updates and release notes. Find Calorieasy in the list and tap 'Update' next to it. If you don't see it, the app is already up to date. Android: Open the Google Play Store on your Android device. Tap the profile icon on the top right. Go to 'Manage apps & device.' Under 'Updates available,' look for Calorieasy. If it's listed, tap 'Update.' If not listed, your app is up to date.",
    },
    {
      id: 6,
      question: 'What is Calorieasy built with?',
      answer:
        'Calorieasy is a mobile app built on top of Capacitor/Ionic with React. The main goal was to ship a product quick and efficiently with web technologies, without dabbling on too much native frameworks & setup.',
    },
    {
      id: 7,
      question: 'Is Calorieasy affiliated with MyFitnessPal',
      answer:
        'No. Calorieasy is an independent entity and is not affiliated with MyFitnessPal or its entities in any way.',
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { twitter } from 'react-icons-kit/fa/twitter';
import footerLogo from '../../assets/image/appCreative/logo.png';

export const footerWidget = {
  logo: footerLogo,
  siteName: 'RedQ, Inc',
  siteUrl: '#',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: 'facebook',
      link: '#',
    },
    {
      id: 2,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: 'https://twitter.com/t31k__',
    },
  ],
  aboutUs: {
    title: 'About',
    menuItems: [
      {
        id: 4,
        url: 'https://github.com/T31K',
        text: 'About Us',
      },
    ],
  },
  ourInformation: {
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '/refund',
        text: 'Refund Policy',
      },
      {
        id: 2,
        url: '/privacy',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '/terms_and_conditions',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '/sitemap.xml',
        text: 'Site Map',
      },
    ],
  },
  myAccount: {
    title: 'Related Apps',
    menuItems: [
      {
        id: 1,
        url: 'https://www.myfitnesspal.com/',
        text: 'MyFitnessPal',
      },
      {
        id: 2,
        url: 'https://loseit.com/',
        text: 'Lose It! Calorie Counter',
      },
    ],
  },
};
