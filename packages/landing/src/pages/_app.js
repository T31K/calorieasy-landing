import { MantineProvider } from '@mantine/core';
import 'common/assets/css/flaticon.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';

export default function CustomApp({ Component, pageProps }) {
  return (
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
  );
}
