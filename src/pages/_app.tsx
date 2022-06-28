import '@fontsource/inter/variable.css';
import '@fontsource/raleway/variable.css';

import React from 'react';

import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import theme from '@/lib/theme';

// Setup DayJS plugins
dayjs.extend(weekOfYear);
dayjs.extend(relativeTime);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle="Portfolio - Victor Ragojos"
        canonical={process.env.NEXT_PUBLIC_HOST_URL}
        description=""
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
          type: 'website',
          locale: 'en_US',
          title: 'Portfolio - Victor Ragojos',
          description: '',
          url: process.env.NEXT_PUBLIC_HOST_URL,
          images: [
            {
              width: 1200,
              height: 630,
              type: 'image/png',
              url: `${process.env.NEXT_PUBLIC_HOST_URL}/ogImage.png`,
            },
          ],
        }}
      />

      <ChakraProvider resetCSS theme={theme}>
        <DarkMode>
          <Component {...pageProps} />
        </DarkMode>
      </ChakraProvider>
    </>
  );
};

export default App;
