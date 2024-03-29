import '@fontsource/inter/variable.css';
import '@fontsource/raleway/variable.css';

import React, { useEffect } from 'react';

import { ChakraProvider, ColorModeProviderProps } from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import Analytics from '@/lib/analytics';
import { BASE_URL, DESCRIPTION } from '@/lib/constants';
import theme from '@/lib/theme';

// Setup DayJS plugins
dayjs.extend(relativeTime);

const cookieManager = (): ColorModeProviderProps['colorModeManager'] => {
  return {
    ssr: true,
    type: 'cookie',
    get: () => 'dark',
    set: () => 'dark',
  };
};

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Analytics.init(process.env.NEXT_PUBLIC_SPLITBEE_TOKEN ?? '');
  }, []);

  return (
    <>
      <DefaultSeo
        canonical={BASE_URL}
        description={DESCRIPTION}
        defaultTitle="Portfolio - Victor Ragojos"
        additionalLinkTags={[
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
          {
            rel: 'icon',
            href: '/images/favicon.ico',
          },
          {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: '/images/favicon-16x16.png',
          },
          {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: '/images/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/images/favicon-16x16.png',
          },
          {
            sizes: '180x180',
            rel: 'apple-touch-icon',
            href: '/images/apple-touch-icon.png',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'RagOfJoes',
          },
          {
            name: 'color-scheme',
            content: 'dark',
          },
          {
            httpEquiv: 'content-type',
            content: 'text/html, charset=UTF-8',
          },
          {
            name: 'keywords',
            content: [
              'ragofjoes',
              'victor',
              'ragojos',
              'victor ragojos',
              'portfolio',
              'software engineer',
              'developer',
            ].join(','),
          },
        ]}
        openGraph={{
          url: BASE_URL,
          type: 'website',
          locale: 'en_US',
          description: DESCRIPTION,
          title: 'Portfolio - Victor Ragojos',
          images: [
            {
              width: 1200,
              height: 630,
              type: 'image/png',
              url: `${BASE_URL}/images/ogImage.png`,
            },
          ],
        }}
      />

      <ChakraProvider resetCSS theme={theme} colorModeManager={cookieManager()}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
